// ============================================================================
// CÂMERA E ESTADO, INTERAÇÃO, ORBWALK (1ª PESSOA) E LOOP PRINCIPAL
// ============================================================================
import { THREE, $q, hullMat, COL, reducedMotion } from "../engine/threeSetup.js";
import { BUNKER_FLOOR_Y, SPAWNS } from "../data/worldData.js";
import { SECTORS } from "../data/uiData.js";
import { clamp, smoothstep } from "./hudAndLabels.js";
import { ctx } from "../engine/context.js";

export let viewTarget = null;
export let viewCur = null;
export let walker = null;
export let sim = null;

export function initCameraState() {
  viewTarget = {rotY:-.55,rotX:.17,zoom:1.12,panX:0,panY:0,lift:0,f:new THREE.Vector3(2,-4,2)};
  viewCur = {rotY:-.55,rotX:.17,zoom:1.12,panX:0,panY:0,lift:0,f:new THREE.Vector3(2,-4,2)};
  walker = {on:!1,x:1,z:-50.6,yaw:0,pitch:0,lvl:`s`,eye:1.7,eyeY:1.9,jx:0,jy:0,keys:{},prevLift:0,bob:0,moved:0};
  sim = {flow:.65,wind:.5,speed:1,season:`set`,hour:0};

  ctx.viewTarget = viewTarget;
  ctx.viewCur = viewCur;
  ctx.walker = walker;
  ctx.sim = sim;
}

export function initCameraAndInteraction() {
  var sectorsByKey=Object.fromEntries(SECTORS.map(function(e){return[e.k,e]})),sb=1,cb=1;

function onResize(){let e=ctx.stageEl.getBoundingClientRect();sb=Math.max(1,e.width),cb=Math.max(1,e.height),ctx.renderer.setSize(sb,cb),ctx.camera.aspect=sb/cb,ctx.camera.updateProjectionMatrix(),ctx.labelsState.needMeasure=!0,hullMat.uniforms.uRes.value.set(sb,cb),hullMat.uniforms.uThick.value=sb<640?1.15:1.5}

window.ResizeObserver?new ResizeObserver(onResize).observe(ctx.stageEl):window.addEventListener(`resize`,onResize),onResize();

var ub=!1;

function focusOn(e){let t=sectorsByKey[e];if(!t)return;ub=[`bunker`,`datacenter`,`labs`,`clean`,`refuge`,`battery`].indexOf(e)>=0,viewTarget.f.set(t.f[0],t.f[1],t.f[2]),viewTarget.rotY=t.ry,viewTarget.rotX=t.rx,viewTarget.zoom=t.z,viewTarget.panX=0,viewTarget.panY=0,e===`overview`?ctx.setLift(0):t.lift!=null&&ctx.setLift(t.lift),ctx.updateInfoCard(t),document.querySelectorAll(`[data-sector]`).forEach(function(t){t.setAttribute(`aria-pressed`,t.dataset.sector===e?`true`:`false`)});let n=$q(`#chips`).querySelector(`[data-sector="`+e+`"]`);if(n&&n.scrollIntoView)try{n.scrollIntoView({block:`nearest`,inline:`center`,behavior:`smooth`})}catch{}}

ctx.labelHooks.onPick=focusOn;

  var mb=new Map,hb=0;

function gb(){let e=THREE.MathUtils.degToRad(ctx.camera.fov),t=2*Math.atan(Math.tan(e/2)*ctx.camera.aspect);return 2*Math.tan(e/2)*(104/Math.sin(Math.min(e,t)/2)/viewCur.zoom)/cb}

function _b(){let e=Array.from(mb.values());return Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)}

ctx.glHost.addEventListener(`pointerdown`,function(e){try{ctx.glHost.setPointerCapture(e.pointerId)}catch{}mb.set(e.pointerId,{x:e.clientX,y:e.clientY}),mb.size===2&&(hb=_b())}),ctx.glHost.addEventListener(`pointermove`,function(e){let t=mb.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,walker.on)walker.yaw-=n*.0055,walker.pitch=clamp(walker.pitch-r*.0045,-1.3,1.3);else if(mb.size===1)viewTarget.rotY+=n*.0075,viewTarget.rotX=clamp(viewTarget.rotX+r*.004,-.2,.6);else if(mb.size===2){let e=_b();hb>0&&(viewTarget.zoom=clamp(viewTarget.zoom*e/hb,.55,8)),hb=e;let t=gb();viewTarget.panX=clamp(viewTarget.panX+n*.5*t,-90,90),viewTarget.panY=clamp(viewTarget.panY-r*.5*t,-70,90)}});

function vb(e){mb.delete(e.pointerId),hb=0}

ctx.glHost.addEventListener(`pointerup`,vb),ctx.glHost.addEventListener(`pointercancel`,vb),ctx.glHost.addEventListener(`lostpointercapture`,vb),ctx.glHost.addEventListener(`wheel`,function(e){e.preventDefault(),walker.on||(viewTarget.zoom=clamp(viewTarget.zoom*Math.exp(-e.deltaY*.0012),.55,8))},{passive:!1}),$q(`#s-xray`).addEventListener(`input`,function(e){ctx.setLift(parseFloat(e.target.value))});

  var Db=.38;

function Ob(e,t){return clamp(1+(9.4-t)/6.6*4,1,5)}

function floorY(e,t,n){if(n===`u`)return BUNKER_FLOOR_Y;let r=e-1,i=t+58;return Math.abs(r)<1.1&&i>2.8&&i<9.9&&(n===`a`||n===`s`)?Ob(r,i):n===`a`?5:Math.abs(r)<13.3&&i>-10.3&&i<13.5?1:Math.abs(r)<3.3&&i>=13.5&&i<16.8?1*(1-(i-13.5)/3.3):e>21&&e<43&&t>-43&&t<-33||e>21&&e<39&&t>-32&&t<-13?.2:0}

function hitsWall(e,t,n){let r=Db,i;for(let a=0;a<COL.length;a++)if(i=COL[a],i[4]===n&&e>i[0]-r&&e<i[2]+r&&t>i[1]-r&&t<i[3]+r)return!0;if(n===`s`){if(e<-49||e>42.4||t<-73.5||t>73.5)return!0}else if(n===`u`){if(e<-11||e>27||t<-72||t>-39)return!0}else if(Math.abs(e-1)>13.3||t+58<-10.3||t+58>12.6)return!0;return!1}

function stepWalk(e){let t=walker.keys,n=walker.jx+(t.d||t.arrowright?1:0)-(t.a||t.arrowleft?1:0),r=walker.jy+(t.w||t.arrowup?1:0)-(t.s||t.arrowdown?1:0),i=Math.hypot(n,r);if(i>1&&(n/=i,r/=i,i=1),i>.06){let a=3*(i>.92?1.7:1)*(t.shift?1.6:1),o=-Math.sin(walker.yaw),s=-Math.cos(walker.yaw),c=Math.cos(walker.yaw),l=-Math.sin(walker.yaw),u=(o*r+c*n)*a*e,d=(s*r+l*n)*a*e;hitsWall(walker.x+u,walker.z,walker.lvl)||(walker.x+=u),hitsWall(walker.x,walker.z+d,walker.lvl)||(walker.z+=d),walker.bob+=e*i*8,walker.moved+=Math.hypot(u,d);let f=floorY(walker.x,walker.z,walker.lvl);Math.abs(walker.x-1)<1.1&&walker.z+58>2.8&&walker.z+58<9.9&&(walker.lvl===`s`&&f>4.55?walker.lvl=`a`:walker.lvl===`a`&&f<4.45&&(walker.lvl=`s`))}let a=floorY(walker.x,walker.z,walker.lvl)+walker.eye+Math.sin(walker.bob)*.025*Math.min(1,i);walker.eyeY+=(a-walker.eyeY)*Math.min(1,e*9),ctx.syncFpHud()}

function syncEyeBtns(){document.querySelectorAll(`[data-fpeye]`).forEach(function(e){e.setAttribute(`aria-pressed`,String(parseFloat(e.dataset.fpeye)===walker.eye))}),document.querySelectorAll(`[data-fplvl]`).forEach(function(e){e.setAttribute(`aria-pressed`,String(e.dataset.fplvl===walker.spot))})}

function fpGo(e){let t=SPAWNS[e];t&&(walker.x=t.x,walker.z=t.z,walker.yaw=t.yaw,walker.pitch=0,walker.lvl=t.lvl,walker.spot=e,walker.eyeY=floorY(walker.x,walker.z,walker.lvl)+walker.eye,ctx.roomPlaques.forEach(function(e){e.visible=!0}),syncEyeBtns())}

function enterFP(){if(walker.on)return;walker.on=!0,walker.prevLift=viewTarget.lift,ctx.setLift(0),viewCur.lift=0,ctx.setDrawer(null),ctx.panelEl.classList.remove(`open`),ctx.syncSheetState(),document.body.classList.add(`fp`),$q(`#fp-ui`).hidden=!1;let e=$q(`#fp-btn`);e.setAttribute(`aria-pressed`,`true`),e.textContent=`✕ Sair da 1ª pessoa`,mb.clear(),fpGo(`ground`),onResize()}

function exitFP(){if(!walker.on)return;walker.on=!1,walker.jx=walker.jy=0,walker.keys={},$q(`#fp-knob`).style.transform=``,document.body.classList.remove(`fp`),$q(`#fp-ui`).hidden=!0,ctx.roomPlaques.forEach(function(e){e.visible=!1});let e=$q(`#fp-btn`);e.setAttribute(`aria-pressed`,`false`),e.textContent=`🕹️ 1ª Pessoa (Orbwalk)`,ctx.camera.fov=26,ctx.setLift(walker.prevLift),ctx.labelsState.needMeasure=!0,onResize()}

$q(`#fp-btn`).addEventListener(`click`,function(){walker.on?exitFP():enterFP()}),document.querySelectorAll(`[data-fpeye]`).forEach(function(e){e.addEventListener(`click`,function(){walker.eye=parseFloat(e.dataset.fpeye),syncEyeBtns()})}),document.querySelectorAll(`[data-fplvl]`).forEach(function(e){e.addEventListener(`click`,function(){fpGo(e.dataset.fplvl)})});

var Ib=$q(`#fp-joy`),Lb=$q(`#fp-knob`),Rb=null,zb=52;

function Bb(e){let t=Ib.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r);i>zb&&(n*=zb/i,r*=zb/i),Lb.style.transform=`translate(`+n.toFixed(1)+`px,`+r.toFixed(1)+`px)`,walker.jx=n/zb,walker.jy=-r/zb}

function Vb(e){e.pointerId===Rb&&(Rb=null,walker.jx=walker.jy=0,Lb.style.transform=``)}

Ib.addEventListener(`pointerdown`,function(e){Rb=e.pointerId;try{Ib.setPointerCapture(e.pointerId)}catch{}Bb(e),e.preventDefault()}),Ib.addEventListener(`pointermove`,function(e){e.pointerId===Rb&&Bb(e)}),Ib.addEventListener(`pointerup`,Vb),Ib.addEventListener(`pointercancel`,Vb),Ib.addEventListener(`lostpointercapture`,Vb),document.addEventListener(`keydown`,function(e){walker.on&&(walker.keys[e.key.toLowerCase()]=!0,e.key.indexOf(`Arrow`)===0&&e.preventDefault())}),document.addEventListener(`keyup`,function(e){delete walker.keys[e.key.toLowerCase()]}),window.addEventListener(`blur`,function(){walker.keys={}}),document.addEventListener(`keydown`,function(e){e.key===`Escape`&&(walker.on?exitFP():ctx.setDrawer(null))});

  var Wb=new THREE.Clock,Gb=0,Kb=new THREE.Vector3,qb=reducedMotion?.35:1,perfState={lvl:0,n:0,sum:0};

function Yb(e){if(perfState.lvl>=2||e>.5||(perfState.n++,perfState.n>20&&(perfState.sum+=e),perfState.n<100))return;let t=perfState.sum/79;perfState.n=0,perfState.sum=0,t>.045&&(perfState.lvl++,perfState.lvl===1?(ctx.renderer.setPixelRatio(1),onResize()):ctx.scene.traverse(function(e){e.material===hullMat&&(e.visible=!1)}))}

function startLoop(){requestAnimationFrame(startLoop);let e=Wb.getDelta(),t=Math.min(e,.05),n=t*sim.speed;Gb+=n,Yb(e),Zb(t),Qb(t),$b(),ex(),ctx.surface.userData.tick(n,Gb,{flow:sim.flow*qb,wind:sim.wind*qb}),ctx.dio.updateMatrixWorld(!0),ctx.camera.updateMatrixWorld(!0),ctx.renderer.render(ctx.scene,ctx.camera),ctx.updateLabels(sb,cb)}

function Zb(e){let t=1-8e-4**e;viewCur.rotY+=(viewTarget.rotY-viewCur.rotY)*t,viewCur.rotX+=(viewTarget.rotX-viewCur.rotX)*t,viewCur.zoom+=(viewTarget.zoom-viewCur.zoom)*t,viewCur.panX+=(viewTarget.panX-viewCur.panX)*t,viewCur.panY+=(viewTarget.panY-viewCur.panY)*t,viewCur.lift+=(viewTarget.lift-viewCur.lift)*t,viewCur.f.lerp(viewTarget.f,t)}

function Qb(e){if(walker.on)stepWalk(e),ctx.camera.fov=clamp(THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(42))/ctx.camera.aspect)),60,100),ctx.camera.near=.12,ctx.camera.far=700,ctx.camera.updateProjectionMatrix(),ctx.dio.rotation.set(0,0,0),ctx.dio.position.set(0,0,0),ctx.camera.position.set(walker.x,walker.eyeY,walker.z),ctx.camera.rotation.order=`YXZ`,ctx.camera.rotation.set(walker.pitch,walker.yaw,0),ctx.dirLight.position.copy(ctx.sunDir).multiplyScalar(260);else{let e=THREE.MathUtils.degToRad(ctx.camera.fov),t=2*Math.atan(Math.tan(e/2)*ctx.camera.aspect),n=104/Math.sin(Math.min(e,t)/2)/viewCur.zoom,r=.5;ctx.camera.position.set(0,Math.sin(r)*n,Math.cos(r)*n),ctx.camera.lookAt(0,0,0),ctx.camera.near=Math.max(4,n-140),ctx.camera.far=n+320,ctx.camera.updateProjectionMatrix(),ctx.dio.rotation.set(viewCur.rotX,viewCur.rotY,0),Kb.copy(viewCur.f).applyEuler(ctx.dio.rotation),ctx.dio.position.set(-Kb.x+viewCur.panX,-Kb.y+viewCur.panY,-Kb.z),ctx.dirLight.position.copy(ctx.sunDir).applyEuler(ctx.dio.rotation).multiplyScalar(260)}}

function $b(){let e=(walker.on?Math.PI-walker.yaw:Math.PI-viewCur.rotY).toFixed(3)+`rad`;$q(`#compass-n`).style.transform=`rotate(`+e+`)`,$q(`#compass`).style.setProperty(`--a`,e)}

function ex(){let e=clamp(viewCur.lift/100,0,1),t=e*e*(3-2*e),n=smoothstep(.1,.95,e);ctx.casaRoof.position.set(0,20*t,-7*t),ctx.casaUpper.position.y=5+9*t,ctx.casaUpperWalls.scale.y=1-.62*n,ctx.barnRoof.position.set(0,13*t,-5*t);let r=1-.97*smoothstep(.04,.4,e);ctx.bunkerMat.opacity=r,ctx.bunkerMat.transparent=r<.995,ctx.bunkerMat.depthWrite=r>.6,ctx.bunkerShell.visible=r>.03,ctx.casaFloorMat.opacity=r,ctx.casaFloorMat.transparent=r<.995,ctx.casaFloorMat.depthWrite=r>.6,ctx.casaFoundation&&(ctx.casaFoundation.visible=r>.03);let i=ub&&e>.9;ctx.casaGroup.visible=!i,ctx.barnGroup.visible=!i;let a=1-.88*smoothstep(.55,.95,e);ctx.casaDoubleMat.opacity=a,ctx.casaDoubleMat.transparent=a<.995,ctx.casaDoubleMat.depthWrite=a>.6,[ctx.casaRoof,ctx.barnRoof].forEach(function(e){e.traverse(function(e){e.material===hullMat&&(e.visible=a>.6)})}),ctx.casaGroundWalls.scale.y=1-.62*n,ctx.barnWalls.scale.y=1-.58*n}

  ctx.sectorsByKey = sectorsByKey;
  ctx.onResize = onResize;
  ctx.focusOn = focusOn;
  ctx.fpGo = fpGo;
  ctx.enterFP = enterFP;
  ctx.exitFP = exitFP;
  ctx.perfState = perfState;
  ctx.startLoop = startLoop;
}
