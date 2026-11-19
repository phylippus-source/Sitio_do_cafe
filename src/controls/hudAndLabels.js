// ============================================================================
// HUD E LEGENDAS: placas de cômodos, rótulos 3D + líderes SVG, sliders, BOM, Aura OS
// ============================================================================
import { THREE, $q, waterMat, linColor, pondMat } from "../engine/threeSetup.js";
import { ROOMS, BUNKER_FLOOR_Y } from "../data/worldData.js";
import { LABELS, SECTORS, BOM } from "../data/uiData.js";
import { ctx } from "../engine/context.js";

export var clamp=function(e,t,n){return Math.min(n,Math.max(t,e))};
export function smoothstep(e,t,n){let r=clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}

export function initHudAndLabels() {
  function roomAt(e,t,n){for(let r=0;r<ROOMS.length;r++){let i=ROOMS[r];if(i[5]===n&&e>=i[1]&&e<=i[3]&&t>=i[2]&&t<=i[4])return i}return null}

var Wy=null,Gy=``;

function syncFpHud(){Wy=Wy||$q(`#fp-hud`);let e=roomAt(ctx.walker.x,ctx.walker.z,ctx.walker.lvl),t=e?e[0]+` · `+Math.round((e[3]-e[1])*(e[4]-e[2]))+` m²`:`Sítio Vale do Café`;t!==Gy&&(Gy=t,Wy.textContent=t)}

var roomPlaques=[];

function addRoomPlaque(e,t,n,r,i,a){let o=document.createElement(`canvas`);o.width=256,o.height=64;let s=o.getContext(`2d`);s.fillStyle=`#2b1d12`,s.fillRect(0,0,256,64),s.strokeStyle=`#d4a24a`,s.lineWidth=4,s.strokeRect(3,3,250,58),s.fillStyle=`#f6e7c3`,s.font=`bold 26px Georgia, serif`,s.textAlign=`center`,s.textBaseline=`middle`,s.fillText(t,128,34);let c=new THREE.CanvasTexture(o);c.encoding=THREE.sRGBEncoding;let l=new THREE.Mesh(new THREE.PlaneGeometry(1,.25),new THREE.MeshBasicMaterial({map:c}));l.position.set(n,r,i),l.rotation.y=a||0,l.visible=!1,e.add(l),roomPlaques.push(l)}

addRoomPlaque(ctx.casaGroup,`CAPELA`,-6.75,4.05,5.7,Math.PI/2),addRoomPlaque(ctx.casaGroup,`ESCRITÓRIO`,6.75,4.05,5.7,-Math.PI/2),addRoomPlaque(ctx.casaGroup,`SALA DE JANTAR`,0,4.3,-3.8,0),addRoomPlaque(ctx.casaGroup,`COZINHA`,-6.75,4.05,-6.3,Math.PI/2),addRoomPlaque(ctx.casaGroup,`DESPENSA`,6.75,4.05,-6.4,-Math.PI/2),addRoomPlaque(ctx.casaGroup,`BANHEIROS`,6.75,4.05,-1.85,-Math.PI/2),addRoomPlaque(ctx.casaUpper,`CORREDOR DAS SUÍTES`,0,3.2,2.3,0),addRoomPlaque(ctx.casaUpper,`SALA ÍNTIMA`,0,3.2,-1.2,0),addRoomPlaque(ctx.barnGroup,`ENGENHO 1850`,-6,4.2,4.4,Math.PI),addRoomPlaque(ctx.barnGroup,`OFICINA`,3,4.2,4.4,Math.PI),addRoomPlaque(ctx.under,`SUÍTE DO MESTRE`,-8.2,BUNKER_FLOOR_Y+2.9,-55.6,0),addRoomPlaque(ctx.under,`PAIS`,-2.3,BUNKER_FLOOR_Y+2.9,-55.6,0),addRoomPlaque(ctx.under,`IRMÃ`,2,BUNKER_FLOOR_Y+2.9,-55.6,0),addRoomPlaque(ctx.under,`SOBRINHA`,5.5,BUNKER_FLOOR_Y+2.9,-55.6,0),addRoomPlaque(ctx.under,`CONVIDADO`,8.6,BUNKER_FLOOR_Y+2.9,-55.6,0),addRoomPlaque(ctx.under,`DATACENTER`,13.1,BUNKER_FLOOR_Y+2.9,-55.6,0),addRoomPlaque(ctx.under,`LABORATÓRIOS`,18.05,BUNKER_FLOOR_Y+2.9,-55.6,0),addRoomPlaque(ctx.under,`SALA LIMPA`,21.5,BUNKER_FLOOR_Y+2.9,-55.6,0),addRoomPlaque(ctx.under,`SUPORTE DE VIDA`,25.2,BUNKER_FLOOR_Y+2.9,-55.6,0),addRoomPlaque(ctx.under,`DESPENSA`,4,BUNKER_FLOOR_Y+2.9,-53,Math.PI),addRoomPlaque(ctx.under,`CINEMA E JOGOS`,9.1,BUNKER_FLOOR_Y+2.9,-53,Math.PI),addRoomPlaque(ctx.under,`HIDROPONIA`,16.4,BUNKER_FLOOR_Y+2.9,-53,Math.PI),addRoomPlaque(ctx.under,`OFICINA MAKER`,23.9,BUNKER_FLOOR_Y+2.9,-53,Math.PI);

  const Zy=$q(`#labels`);
  const Qy=$q(`#leaders`);
  const $y=`http://www.w3.org/2000/svg`;
  const eb=LABELS.map(function(e){let t=new THREE.Object3D;t.position.set(e.p[0],e.p[1],e.p[2]),({s:ctx.surface,u:ctx.under,c:ctx.casaRoof,b:ctx.barnRoof,i:ctx.casaGroup,e:ctx.barnGroup,U:ctx.casaUpper}[e.L]||ctx.surface).add(t);let n=document.createElement(`button`);n.className=`lbl`,n.type=`button`;let r=document.createElement(`span`);if(r.textContent=e.t,n.appendChild(r),e.s){let t=document.createElement(`small`);t.textContent=e.s,n.appendChild(t)}n.addEventListener(`click`,function(){labelHooks.onPick(e.k)}),Zy.appendChild(n);let i=document.createElementNS($y,`line`),a=document.createElementNS($y,`circle`);return a.setAttribute(`r`,`3`),Qy.appendChild(i),Qy.appendChild(a),{d:e,anchor:t,el:n,line:i,dot:a,w:0,h:0}});
  const labelsState={needMeasure:!0,show:!0};
  const labelHooks={onPick:function(){}};
  const rb=new THREE.Vector3;
  function measureLabels(){eb.forEach(function(e){e.el.hidden=!1,e.w=e.el.offsetWidth,e.h=e.el.offsetHeight}),labelsState.needMeasure=!1}
  function updateLabels(e,t){if(!labelsState.show||ctx.walker.on)return;labelsState.needMeasure&&measureLabels();let n=e<640,r=[];eb.forEach(function(i){let a=n&&!i.d.m||!i.d.m&&ctx.viewCur.zoom<1.5||i.d.i&&ctx.viewCur.lift<40||i.d.z&&ctx.viewCur.zoom<i.d.z;rb.setFromMatrixPosition(i.anchor.matrixWorld).project(ctx.camera),i.sx=(rb.x*.5+.5)*e,i.sy=(-rb.y*.5+.5)*t,i.vis=!a&&rb.z<1&&i.sx>-20&&i.sx<e+20&&i.sy>-20&&i.sy<t+20,i.vis?r.push(i):(i.el.hidden=!0,i.line.style.display=`none`,i.dot.style.display=`none`)}),r.sort(function(e,t){return t.d.m-e.d.m||t.sy-e.sy});let i=[];r.forEach(function(n){let r=n.w,a=n.h,o=n.sx-r/2,s=n.sy-16-a,c=!1,l=0,u=0;for(let n=0;n<9&&!c;n++)for(let d=0;d<5&&!c;d++){let f=clamp(o+[0,1,-1,2,-2][d]*(r*.55+4),4,Math.max(4,e-r-4)),p=s-n*(a+5);if(p<4||p>t-a-4)continue;let m=!1;for(let e=0;e<i.length;e++){let t=i[e];if(f<t.x+t.w+4&&f+r+4>t.x&&p<t.y+t.h+4&&p+a+4>t.y){m=!0;break}}m||(c=!0,l=f,u=p)}if(!c){n.el.hidden=!0,n.line.style.display=`none`,n.dot.style.display=`none`;return}i.push({x:l,y:u,w:r,h:a}),n.el.hidden=!1,n.el.style.transform=`translate(`+l.toFixed(1)+`px,`+u.toFixed(1)+`px)`;let d=clamp(n.sx,l+6,l+r-6);n.line.style.display=``,n.dot.style.display=``,n.line.setAttribute(`x1`,n.sx.toFixed(1)),n.line.setAttribute(`y1`,n.sy.toFixed(1)),n.line.setAttribute(`x2`,d.toFixed(1)),n.line.setAttribute(`y2`,(u+a).toFixed(1)),n.dot.setAttribute(`cx`,n.sx.toFixed(1)),n.dot.setAttribute(`cy`,n.sy.toFixed(1))})}

  function updateInfoCard(e){$q(`#info-tag`).textContent=[`bunker`,`datacenter`,`labs`,`clean`,`refuge`,`battery`].indexOf(e.k)>=0?`Subsolo`:[`casa_in`,`barn_in`].indexOf(e.k)>=0?`Interior`:e.k===`overview`?`Visão geral`:`Superfície`,$q(`#info-title`).textContent=e.n,$q(`#info-text`).textContent=e.d}
  function setLift(e){ctx.viewTarget.lift=e;let t=$q(`#s-xray`);t.value=e,$q(`#o-xray`).textContent=Math.round(e)+`%`}

  function solarPos(e,t){let n=-22.4*Math.PI/180,r=t*Math.PI/180,i=(e-12)*15*Math.PI/180,a=Math.sin(n)*Math.sin(r)+Math.cos(n)*Math.cos(r)*Math.cos(i),o=Math.asin(a),s=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(n)-Math.tan(r)*Math.cos(n))+Math.PI;return{v:new THREE.Vector3(-Math.sin(s)*Math.cos(o),a,Math.cos(s)*Math.cos(o)),se:a}}
  function updateSun(){if(ctx.sim.hour<6){ctx.sunDir.set(-.55,.78,.55).normalize(),ctx.dirLight.intensity=.34,$q(`#o-sun`).textContent=`Padrão`;return}let e=solarPos(ctx.sim.hour,{jun:-23.44,set:0,dez:23.44}[ctx.sim.season]);e.v.y=Math.max(e.v.y,.04),ctx.sunDir.copy(e.v).normalize(),ctx.dirLight.intensity=.34*clamp(e.se*4,.12,1.1);let t=Math.floor(ctx.sim.hour),n=Math.round((ctx.sim.hour-t)*60);$q(`#o-sun`).textContent=t+`:`+(n<10?`0`:``)+n}
  $q(`#s-speed`).addEventListener(`input`,function(e){ctx.sim.speed=parseFloat(e.target.value)/100,$q(`#o-speed`).textContent=Math.round(ctx.sim.speed*100)+`%`}),$q(`#s-sun`).addEventListener(`input`,function(e){ctx.sim.hour=parseFloat(e.target.value),updateSun()}),document.querySelectorAll(`[data-season]`).forEach(function(e){e.addEventListener(`click`,function(){ctx.sim.season=e.dataset.season,document.querySelectorAll(`[data-season]`).forEach(function(t){t.setAttribute(`aria-pressed`,t===e?`true`:`false`)}),updateSun()})}),document.querySelectorAll(`[data-flavour]`).forEach(function(e){e.addEventListener(`click`,function(){let t={cristal:2864102,lagoa:3129226,sinestesia:11561952}[e.dataset.flavour];waterMat.color.copy(linColor(t)),pondMat.color.copy(linColor(t)),document.querySelectorAll(`[data-flavour]`).forEach(function(t){t.setAttribute(`aria-pressed`,t===e?`true`:`false`)})})}),$q(`#b-labels`).addEventListener(`click`,function(e){labelsState.show=!labelsState.show,e.currentTarget.setAttribute(`aria-pressed`,String(labelsState.show)),e.currentTarget.textContent=`Legendas: `+(labelsState.show?`on`:`off`),document.body.classList.toggle(`nolabels`,!labelsState.show),labelsState.show&&(labelsState.needMeasure=!0)}),$q(`#b-reset`).addEventListener(`click`,function(){ctx.focusOn(`overview`)}),$q(`#d-up`).addEventListener(`click`,function(){ctx.viewTarget.panY=clamp(ctx.viewTarget.panY+9,-70,90)}),$q(`#d-down`).addEventListener(`click`,function(){ctx.viewTarget.panY=clamp(ctx.viewTarget.panY-9,-70,90)});

  const AURA_ANSWERS={opsec:`Rede: três links de 300 Mbps fragmentados, malha HF/LoRa com AES-256 e mascaramento de tráfego ativo. Os 40 geofones do perímetro estão sem alertas.`,energy:`Telemetria: os 4 cilindros guardam 320 kWh a 550 °C (14 dias de autonomia). A Pelton de 3,5 kW cobre os 2,45 kW do datacenter e sobra 1,05 kW para a iluminação.`,family:`Refúgio: +35 Pa de pressão positiva, HEPA H14 e luz circadiana em ciclo. O calor do óleo a 48 °C mantém o piso do quarto aquecido.`,staff:`Escala 4x3: duas pessoas cobrem os sete dias. Com quatro ou cinco, as equipes se dividem entre campo, laboratórios, marcenaria e apoio doméstico.`};
  const panelEl=$q(`#panel`);
  const mobileQuery=window.matchMedia(`(max-width:899px)`);
  let wb=null;
  function syncSheetState(){let e=panelEl.classList.contains(`open`);document.body.classList.toggle(`sheet-open`,mobileQuery.matches&&(e||!!wb)),document.body.classList.toggle(`drawer-open`,!!wb),$q(`#d-panel`).setAttribute(`aria-expanded`,String(e)),$q(`#d-bom`).setAttribute(`aria-pressed`,String(wb===`bom`)),$q(`#d-aura`).setAttribute(`aria-pressed`,String(wb===`aura`))}
  function setDrawer(e){[`bom`,`aura`].forEach(function(t){$q(`#`+t).hidden=t!==e}),wb=e||null,e&&mobileQuery.matches&&panelEl.classList.remove(`open`),syncSheetState()}
  $q(`#d-panel`).addEventListener(`click`,function(){let e=!panelEl.classList.contains(`open`);e&&setDrawer(null),panelEl.classList.toggle(`open`,e),syncSheetState()}),[`#b-bom`,`#d-bom`].forEach(function(e){$q(e).addEventListener(`click`,function(){setDrawer(wb===`bom`?null:`bom`)})}),[`#b-aura`,`#d-aura`].forEach(function(e){$q(e).addEventListener(`click`,function(){setDrawer(wb===`aura`?null:`aura`)})}),document.querySelectorAll(`[data-close]`).forEach(function(e){e.addEventListener(`click`,function(){setDrawer(null)})}),mobileQuery.addEventListener?mobileQuery.addEventListener(`change`,syncSheetState):mobileQuery.addListener&&mobileQuery.addListener(syncSheetState),document.querySelectorAll(`[data-ask]`).forEach(function(e){e.addEventListener(`click`,function(){let t=$q(`#aura-log`),n=document.createElement(`div`);n.className=`msg`;let r=document.createElement(`b`);r.textContent=`Aura · relatório`,n.appendChild(r),n.appendChild(document.createTextNode(AURA_ANSWERS[e.dataset.ask])),t.appendChild(n);let i=t.parentElement;i.scrollTop=i.scrollHeight})});

  var Hb=$q(`#sector-grid`),Ub=$q(`#chips`);
  SECTORS.forEach(function(e){[Hb,Ub].forEach(function(t){let n=document.createElement(`button`);n.className=`btn`,n.textContent=e.n,n.dataset.sector=e.k,n.setAttribute(`aria-pressed`,e.k===`overview`?`true`:`false`),n.addEventListener(`click`,function(){ctx.focusOn(e.k)}),t.appendChild(n)})}),(function(){let e=$q(`#bom-body`);BOM.forEach(function(t){let n=document.createElement(`section`);n.className=`cat`;let r=document.createElement(`h4`);r.textContent=t.t;let i=document.createElement(`span`);i.textContent=t.tag,r.appendChild(i);let a=document.createElement(`ul`);t.items.forEach(function(e){let t=document.createElement(`li`),n=document.createElement(`b`);n.textContent=e[0]+`: `,t.appendChild(n),t.appendChild(document.createTextNode(e[1])),a.appendChild(t)}),n.appendChild(r),n.appendChild(a),e.appendChild(n)})})();

  ctx.roomAt = roomAt;
  ctx.syncFpHud = syncFpHud;
  ctx.roomPlaques = roomPlaques;
  ctx.labelsState = labelsState;
  ctx.labelHooks = labelHooks;
  ctx.measureLabels = measureLabels;
  ctx.updateLabels = updateLabels;
  ctx.updateInfoCard = updateInfoCard;
  ctx.setLift = setLift;
  ctx.updateSun = updateSun;
  ctx.panelEl = panelEl;
  ctx.syncSheetState = syncSheetState;
  ctx.setDrawer = setDrawer;
}
