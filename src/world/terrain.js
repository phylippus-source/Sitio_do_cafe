// ============================================================================
// TERRENO 100 × 150 m: camadas de solo, córrego, estradas, porteira, infraestrutura
// ============================================================================
import { THREE, Batch, slab, rand, randRange, GEO } from "../engine/threeSetup.js";
import { K, GLEBA, BUNKER, CREEK, BUNKER_SLAB_Y } from "../data/worldData.js";
import { ctx } from "../engine/context.js";

export let worldBatch = null;
export let waterBatch = null;
export let pondBatch = null;
export let CANOPY_PALETTES = null;
export let inGleba = null;
export let free = null;

export function initTerrain() {
  const SOIL_STRATA=[[-10,-8,9279651],[-8,-5,12026191],[-5,-2.4,9723959],[-2.4,-.4,7226663]];
  CANOPY_PALETTES=[[3116860,4171850,5816411],[2785091,3643471,5222754],[3906101,5617736,7720796]];
  const OCCUPIED_RECTS=[[-12,-70,14,-44],[-36,-44,-16,-19],[-12,-44,8,-19],[-36,-14,-16,11],[-12,-14,8,11],[16.5,-46,21.5,31],[-50,24.5,43,31.5],[-16,-44,-12,24],[21,-44,43,-32],[21,-33,39,-12],[38,-20,44,-14],[23,-10,39,9],[23,10,43,19],[5,31,42,41.5],[33,36,40,72],[-50,56,-16,75],[-44,31,5,62],[14.8,-61,20,-51],[-3,-47,3,-43],[3,-2,10,2]];
  const OCCUPIED_CIRCLES=[[6,36,6]];
  worldBatch = new Batch();
  waterBatch = new Batch();
  pondBatch = new Batch();

  function ng(e,t,n,r,i){SOIL_STRATA.forEach(function(a){let o=Math.min(a[1],i);o>a[0]+.01&&slab(worldBatch,e,t,n,r,a[0],o-a[0],a[2])})}

function rg(e,t,n,r){ng(e,t,n,r,-.4),slab(worldBatch,e,t,n,r,-.4,.4,K.grass)}

rg(GLEBA.x1,GLEBA.z1,BUNKER.x1,GLEBA.z2),rg(BUNKER.x2,GLEBA.z1,CREEK.x1,GLEBA.z2),rg(BUNKER.x1,BUNKER.z2,BUNKER.x2,GLEBA.z2),rg(BUNKER.x1,GLEBA.z1,BUNKER.x2,BUNKER.z1),rg(CREEK.x2,GLEBA.z1,GLEBA.x2,GLEBA.z2),ng(BUNKER.x1,BUNKER.z1,BUNKER.x2,BUNKER.z2,BUNKER_SLAB_Y),ng(CREEK.x1,GLEBA.z1,CREEK.x2,GLEBA.z2,-1.4),slab(waterBatch,CREEK.x1,GLEBA.z1,CREEK.x2,GLEBA.z2,-1.4,.85,K.white),(function(){let e=3811867,t=[-8,-5,-2.4,-.4],n;function r(t,n,r,i){worldBatch.addBox(n-t,.16,.07,e,(t+n)/2,i-.08,r)}function i(t,n,r,i){worldBatch.addBox(.07,.16,n-t,e,r,i-.08,(t+n)/2)}for(t.forEach(function(e){r(-50,50,75.04,e),i(-75,75,-50.04,e),i(-75,75,50.04,e)}),n=0;n<46;n++){let e=rand(),t=[13222580,10853775,14070922,8358548][n%4],r=randRange(-9.6,-.9);if(e<.34){let e=randRange(-49,49);worldBatch.addSphere(1,t,e,r,75,randRange(.45,1.1),randRange(.3,.7),.18)}else e<.6?worldBatch.addSphere(1,t,-50,r,randRange(-74,74),.18,randRange(.3,.7),randRange(.45,1.1)):e<.8?worldBatch.addSphere(1,t,50,r,randRange(-74,74),.18,randRange(.3,.7),randRange(.45,1.1)):worldBatch.addSphere(1,t,randRange(-49,49),r,75,randRange(.45,1.1),randRange(.3,.7),.18)}})();

  inGleba = function inGleba(e,t){return e>=-50&&e<=43&&t>=-75&&t<=75||e>=48&&e<=50}

  var ag=[];

for(let e=0;e<150;e++){let t=randRange(-48,42),n=randRange(-73,73),r=randRange(1.6,4.4);t<-16&&n>54||ag.some(function(e){return Math.hypot(e[0]-t,e[1]-n)<e[2]+r+.1})||(ag.push([t,n,r]),inGleba(t,n)&&inGleba(t+r,n+r)&&inGleba(t-r,n-r)&&inGleba(t+r,n-r)&&inGleba(t-r,n+r)&&worldBatch.addCylinder(r,.03,[K.grass2,K.grass3][e%2],t,0,n,7))}

  free = function free(e,t,n){if(n=n||0,!inGleba(e,t)||e>43)return!1;let r,i,a;for(r=0;r<OCCUPIED_RECTS.length;r++)if(i=OCCUPIED_RECTS[r],e>i[0]-n&&e<i[2]+n&&t>i[1]-n&&t<i[3]+n)return!1;for(r=0;r<OCCUPIED_CIRCLES.length;r++)if(a=OCCUPIED_CIRCLES[r],Math.hypot(e-a[0],t-a[1])<a[2]+n)return!1;return!0}

  function sg(e,t,n,r){worldBatch.addBox(n-e,.06,r-t,K.dirt,(e+n)/2,0,(t+r)/2)}

sg(-16,-44,-12,26),sg(-12,-19,8,-14),sg(-36,-19,-16,-14),sg(-12.5,-46,3.5,-43),sg(-1.2,-47.5,1.2,-43),sg(8,-12,21,-8),sg(15,-44,17,-42),sg(21,-14,39,-10);

var cg=15129792,lg=13351311;

worldBatch.addBox(71.5,.1,5,cg,-14.25,0,28),worldBatch.addBox(71.5,.11,.55,lg,-14.25,0,27),worldBatch.addBox(71.5,.11,.55,lg,-14.25,0,29),worldBatch.addBox(76.5,.1,5,cg,19,0,-7.75),worldBatch.addBox(.55,.11,76.5,lg,18.1,0,-7.75),worldBatch.addBox(.55,.11,76.5,lg,19.9,0,-7.75),sg(21.5,25.5,43,30.5);

for(let e=0;e<46;e++){let t=-48+e*1.6,n=e%2?25.25:30.75;worldBatch.addSphere(1,K.rock,t+randRange(-.3,.3),.1,n+randRange(-.15,.15),randRange(.25,.45),randRange(.18,.3),randRange(.25,.45))}

for(let e=0;e<18;e++){let t=-44+e*4.2;worldBatch.addSphere(1,K.rock,e%2?16.35:21.65,.1,t+randRange(-.3,.3),randRange(.25,.45),randRange(.18,.3),randRange(.25,.45))}

for(let e=0;e<6;e++)worldBatch.addBox(.9,.03,.2,K.white,22.8+e*1.55,.2,-24);

for(let e=0;e<5;e++)worldBatch.addBox(.2,.03,.9,K.white,31,.2,-25.6-e*1.4);

var ug=-49.1;

[24.6,31.4].forEach(function(e,t){worldBatch.addBox(1,3.6,1,K.stone,ug,0,e),worldBatch.addBox(1.3,.28,1.3,K.stoneD,ug,3.6,e),worldBatch.addBox(.8,.2,.8,K.stoneL,ug,3.88,e);for(let t=0;t<4;t++)worldBatch.addBox(1.02,.04,1.02,K.stoneD,ug,.7+t*.8,e)}),worldBatch.addBox(.34,.34,7.799999999999997,K.woodD,ug,3.9,28),worldBatch.addBeam([ug,3.9,25],[ug,3.4,25],.03,K.steelD,4),worldBatch.addBeam([ug,3.9,31],[ug,3.4,31],.03,K.steelD,4),worldBatch.addBox(.18,.9,5.2,K.woodL,ug,2.5,28),[[25.6,-45.7,24.8],[30.4,-45.7,31.2]].forEach(function(e,t){let n=e[2];worldBatch.addBox(3.4,.14,.1,K.wood,-47.15,.55,n),worldBatch.addBox(3.4,.14,.1,K.wood,-47.15,1.45,n);for(let e=0;e<6;e++)worldBatch.addBox(.12,1.6,.08,K.woodL,-48.4+e*.6,.1,n);worldBatch.addBeam([-48.550000000000004,.5,n],[-45.6,1.5,n],.05,K.woodD,4)}),worldBatch.addBox(.2,3,.2,K.woodD,-48.1,0,22.6),worldBatch.addBox(.6,.4,.9,K.red,-48.1,3,22.6),worldBatch.addBox(.5,.08,.7,K.white,-48.1,3.4,22.6),worldBatch.addCylinder(.09,4.2,K.steelD,-47.9,0,33.2,6),worldBatch.addSphere(1,16773560,-47.9,4.4,33.2,.35,.35,.35),worldBatch.addBox(.7,.1,.7,K.black,-47.9,4.2,33.2),worldBatch.addBox(.7,1.1,3.4,K.stone,ug,0,22.7),worldBatch.addBox(.7,1.1,3.4,K.stone,ug,0,33.4),(function(){let e=document.createElement(`canvas`);e.width=1024,e.height=180;let t=e.getContext(`2d`);t.fillStyle=`#f3e3b8`,t.fillRect(0,0,1024,180),t.strokeStyle=`#6b4527`,t.lineWidth=10,t.strokeRect(8,8,1008,164),t.fillStyle=`#3d2a17`,t.font=`bold 84px Georgia, serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`SÍTIO VALE DO CAFÉ`,512,96);let n=new THREE.CanvasTexture(e);n.encoding=THREE.sRGBEncoding,n.anisotropy=4;let r=new THREE.MeshBasicMaterial({map:n});[[1,-49],[-1,-49.2]].forEach(function(e){let t=new THREE.Mesh(new THREE.PlaneGeometry(5.2,.9),r);t.position.set(e[1],2.95,28),t.rotation.y=e[0]>0?Math.PI/2:-Math.PI/2,ctx.surface.add(t)})})();

for(let e=0;e<90;e++){let e=randRange(-74,74),t=rand()<.5;worldBatch.addSphere(1,K.rock,t?randRange(42.2,43.4):randRange(47.6,48.6),-.3,e,randRange(.4,.9),randRange(.25,.5),randRange(.4,.9))}

[[-60,.55],[-57,.38],[-54,.2]].forEach(function(e){waterBatch.addBox(5,e[1],2.4,K.white,45.5,-.55,e[0]),worldBatch.addBox(5,.07,2.4,K.white,45.5,-.55+e[1],e[0])});

  ctx.worldBatch = worldBatch;
  ctx.waterBatch = waterBatch;
  ctx.pondBatch = pondBatch;
  ctx.CANOPY_PALETTES = CANOPY_PALETTES;
  ctx.inGleba = inGleba;
  ctx.free = free;
}

export function initTerrainInfra() {
  var vg=36.5,yg=38,bg=70,xg=15,Sg=.6;

[35.6,37.4].forEach(function(e){worldBatch.addBeam([e,xg,yg],[e,Sg,bg],.16,K.steelD,6)});

for(let e=0;e<=16;e++){let t=e/16;worldBatch.addBox(2.6,.2,.4,K.woodD,vg,xg+-14.4*t-.3,yg+32*t)}

[[34.9,37.4],[38.1,37.4]].forEach(function(e){worldBatch.addBeam([e[0],0,e[1]-.5],[e[0],xg,yg],.22,K.steel,6)}),[[34.9,41.4],[38.1,41.4]].forEach(function(e){worldBatch.addBeam([e[0],0,e[1]+2.6],[e[0],13.8,40.2],.16,K.steel,6)}),worldBatch.addBox(4,.34,.4,K.steel,vg,15.1,yg),worldBatch.addBox(1.6,1.6,1.2,K.steelD,vg,15.4,36.6),worldBatch.addCylinder(.5,1.8,K.red,vg,15.5,36.6,8,.5,[0,0,Math.PI/2]),worldBatch.addGeometry(GEO.box,K.concD,vg,8.079999999999998,55.6,[2,1.8,2.4],[Math.atan2(14.4,32),0,0]),worldBatch.addBeam([vg,15.3,38.1],[vg,8.579999999999998,54.9],.07,K.black,4),worldBatch.addBox(2.6,.5,1.8,K.concD,vg,0,71.2),worldBatch.addBox(30,.1,19,14250060,-33,0,65.5);

for(let e=0;e<15;e++)for(let t=0;t<9.5;t++){let n=rand()*3|0;worldBatch.addBox(2,.04+n*.015,Math.min(2,19-t*2),[13197374,14712922,12080691][n],-47+e*2,.1,56.2+t*2)}

for(let e=0;e<24;e++)worldBatch.addBox(1.2,.5,.6,15126438,-20+e%6*1.3,(e/6|0)*.52,58);

worldBatch.addBox(3.4,2.4,3,K.concD,-42,0,59),worldBatch.addCone(2.4,2,K.roofD,-42,2.4,59,4,[0,Math.PI/4,0]),worldBatch.addCylinder(.4,3.2,K.steelD,-42,4.4,59,8);

function Cg(e,t,n){for(let r=0;r<e.length-1;r++)worldBatch.addBeam([e[r][0],t,e[r][1]],[e[r+1][0],t,e[r+1][1]],.32,n,6);for(let r=0;r<e.length;r++)worldBatch.addSphere(1,n,e[r][0],t,e[r][1],.46,.46,.46)}

Cg([[41,-17],[41,-12],[20,-12],[20,-38.2]],.36,K.black),Cg([[6,36],[16,36],[16,-38.2]],.36,K.steelD),Cg([[6,36],[6,31.4],[-13.6,31.4]],.36,K.steelD),worldBatch.addBeam([20,.36,-38.2],[20,BUNKER_SLAB_Y+3.2,-38.2],.34,K.black,6),worldBatch.addSphere(1,K.black,20,BUNKER_SLAB_Y+3.2,-38.2,.5,.5,.5),worldBatch.addBeam([16,.36,-38.2],[16,BUNKER_SLAB_Y+2.8,-38.2],.16,K.steelD,6),worldBatch.addBox(1.6,.6,1.2,K.steel,18,0,-40.4),worldBatch.addBox(1.1,.35,.9,K.red,18.2,.6,-40.4);

var wg=[2787899,3514439,2324015,4304206],Tg=0;

for(let e=-48;e<=47;e+=3,Tg++)worldBatch.addSphere(1,wg[Tg&3],e+randRange(-.3,.3),randRange(1.2,1.9),-73.4+randRange(-.3,.3),randRange(1.6,2.2),randRange(1.3,1.9),randRange(1.6,2.2),1);

for(let e=-72;e<=73;e+=3,Tg++)e>22&&e<33.5||worldBatch.addSphere(1,wg[Tg&3],-48.4+randRange(-.3,.3),randRange(1.2,1.9),e+randRange(-.3,.3),randRange(1.6,2.2),randRange(1.3,1.9),randRange(1.6,2.2),1);

for(let e=0;e<80;e++){let t=rand()<.55?randRange(-48,47):-48.4+randRange(-1.2,1.2),n=t>-46.5&&rand()<.9?-73.4+randRange(-1.4,1.4):randRange(-72,72);worldBatch.addSphere(1,[14695046,15754406,13643898][e%3],t,randRange(2.2,3.2),n,.22,.22,.22)}
}
