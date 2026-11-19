// ============================================================================
// NÚCLEO SISTEMINHA EMBRAPA: lago de reúso, tanques, canteiros, estufa e curral
// ============================================================================
import { randRange, GEO, coneGeo } from "../engine/threeSetup.js";
import { K, V, QUADRAS } from "../data/worldData.js";
import { ctx } from "../engine/context.js";

export let LAKE_X = -36.5;
export let LAKE_Z = 48.5;
export let FISH_TANKS = null;

export function initSisteminha() {
  LAKE_X=-36.5,LAKE_Z=48.5;
  ctx.worldBatch.addCylinder(7.2,.14,K.sand,LAKE_X,0,LAKE_Z,36),ctx.pondBatch.addCylinder(6.2,.3,K.white,LAKE_X,0,LAKE_Z,36);

for(let e=0;e<30;e++){let t=e/30*Math.PI*2+randRange(-.08,.08),n=randRange(6.6,7.2);ctx.worldBatch.addSphere(1,K.rock,LAKE_X+Math.cos(t)*n,.1,LAKE_Z+Math.sin(t)*n,randRange(.5,.9),randRange(.35,.6),randRange(.5,.9))}

[[-3.2,-1.4,.9],[2.4,2.8,.8],[-2,3.1,.7],[3.4,-2.2,.6]].forEach(function(e){ctx.worldBatch.addCylinder(e[2],.04,4569162,LAKE_X+e[0],.3,LAKE_Z+e[1],10)}),ctx.worldBatch.addSphere(1,K.pink,-39.7,.42,47.1,.3,.25,.3);
  FISH_TANKS=[{x:-19,z:38.5},{x:-9.5,z:38.5}];
  function mg(e){let t,n=e.x,r=e.z;for(ctx.worldBatch.addCylinder(4.4,.06,K.conc,n,0,r,32),t=0;t<18;t++){let e=t/18*Math.PI*2;ctx.worldBatch.addGeometry(GEO.box,K.conc,n+Math.cos(e)*2.32,.45,r+Math.sin(e)*2.32,[.88,.9,.22],[0,-e-Math.PI/2,0])}ctx.worldBatch.addCylinder(2.46,.1,K.concD,n,.9,r,24,2.46),ctx.pondBatch.addCylinder(2.2,.8,K.white,n,0,r,24),ctx.worldBatch.addCylinder(.09,.9,K.black,n+.4,.8,r,6),ctx.worldBatch.addBox(.5,.05,.5,K.steelD,n+.4,1.7,r),ctx.worldBatch.addCylinder(.34,.75,K.blue,n+3.1,.06,r+.7,10,.3),ctx.worldBatch.addSphere(1,K.white,n+3.1,.88,r+.7,.26,.14,.26),ctx.worldBatch.addCylinder(.42,.9,15327947,n+3.1,.06,r-.8,10,.38),ctx.worldBatch.addCylinder(.45,.08,K.steel,n+3.1,.96,r-.8,10),ctx.worldBatch.addBeam([n+2.3,.85,r-.3],[n+3.1,.8,r-.8],.06,K.black,5),ctx.worldBatch.addBeam([n+3.1,.4,r-.8],[n+3.1,.4,r+.7],.06,K.black,5),ctx.worldBatch.addBox(.5,.35,.4,K.black,n+2.5,.06,r+1.9),ctx.worldBatch.addBeam([n+3.1,.12,r-1.2],[n+3.1,.12,r-3.6],.05,K.brown||V.wood.walnut,5)}

FISH_TANKS.forEach(mg),ctx.worldBatch.addBox(1,1.9,.5,K.concD,-14.2,0,31.8),ctx.worldBatch.addBox(.7,.5,.1,K.yellow,-14.2,1.1,32.1),ctx.worldBatch.addCylinder(.1,3.4,K.woodD,-15.6,0,31.8,6),ctx.worldBatch.addBeam([10,.14,32],[-5.5,.14,34.5],.07,K.blue,5),ctx.worldBatch.addBeam([-5.5,.14,34.5],[-7.3,.7,37.4],.07,K.blue,5),ctx.worldBatch.addBeam([-9.5,.14,41],[-9.5,.14,44.4],.09,K.blue,5),ctx.worldBatch.addBeam([-19,.14,41],[-19,.14,44.4],.09,K.blue,5),ctx.worldBatch.addBox(24,.1,.14,K.blue,-16,.1,44.4);

for(let e=0;e<5;e++){let t=46.1+e*1.9,n=[5816411,V.flora.leafGreen,V.flora.tomatoRed,V.flora.violet,V.flora.straw][e];ctx.worldBatch.addBox(24,.38,1.3,K.soilD,-16,0,t);for(let r=0;r<17;r++){let i=-27.2+r*1.4;e===0?ctx.worldBatch.addSphere(1,[8048739,5617743][r%2],i,.6,t,.34,.26,.34):e===1?ctx.worldBatch.addSphere(1,[4037194,7127146][r%2],i,.7,t,.42,.34,.42):e===2?(ctx.worldBatch.addCylinder(.03,1,K.woodD,i,.38,t,4),ctx.worldBatch.addSphere(1,n,i,1.1,t,.2,.2,.2),ctx.worldBatch.addSphere(1,V.flora.leafGreen,i,.9,t,.3,.25,.3)):e===3?ctx.worldBatch.addBox(.34,.5,.34,[V.flora.purple,6963092][r%2],i,.38,t):(ctx.worldBatch.addCone(.16,.7+r%3*.1,7122490,i,.38,t,4),ctx.worldBatch.addSphere(1,n,i,1,t,.12,.12,.12))}}

ctx.worldBatch.addBox(.2,1.4,.2,K.woodD,-28.6,0,55.4),ctx.worldBatch.addBox(1.9,.8,.1,V.light.parchment,-28.6,1.4,55.4);

for(let e=0;e<3;e++){let t=33.2+e*2.5;ctx.worldBatch.addBox(.14,1.3,2.2,K.woodL,-1.1,0,t),ctx.worldBatch.addBox(.14,1.3,2.2,K.woodL,1.1,0,t),ctx.worldBatch.addBox(2.2,1.3,.14,K.woodL,0,0,t-1.1+.1);for(let e=0;e<4;e++)ctx.worldBatch.addBox(2.2,.08,.14,K.woodD,0,.2+e*.3,t+1.05);ctx.worldBatch.addSphere(1,[V.wood.ebony,4861724,3810327][e],0,.55+e*.15,t,.85,.5+e*.14,.85,1)}

for(let e=0;e<8;e++){let t=-.5+e%4*1.7,n=44.2+(e/4|0)*3.2;ctx.worldBatch.addBox(1.5,.7,2.5,12742732,t,0,n),ctx.worldBatch.addBox(1.3,.08,2.3,2957077,t,.7,n);for(let e=0;e<3;e++)ctx.worldBatch.addBox(.5,.06,.06,15245472,t-.3+e*.3,.78,n-.5+e*.5)}

var hg={x1:-43,x2:-31,z1:31,z2:40.5};

[hg.z1,hg.z2].forEach(function(e){[.5,1.1].forEach(function(t){ctx.worldBatch.addBox(hg.x2-hg.x1+.2,.1,.1,K.wood,(hg.x1+hg.x2)/2,t,e)})}),[hg.x1,hg.x2].forEach(function(e){[.5,1.1].forEach(function(t){ctx.worldBatch.addBox(.1,.1,hg.z2-hg.z1,K.wood,e,t,(hg.z1+hg.z2)/2)})});

for(let e=0;e<=6;e++)[hg.z1,hg.z2].forEach(function(t){ctx.worldBatch.addBox(.16,1.4,.16,K.woodD,hg.x1+e*2,0,t)});

for(let e=1;e<5;e++)[hg.x1,hg.x2].forEach(function(t){ctx.worldBatch.addBox(.16,1.4,.16,K.woodD,t,0,hg.z1+e*(hg.z2-hg.z1)/5)});

ctx.worldBatch.addBox(4.2,2,3,K.woodL,-40,0,33.4),ctx.worldBatch.addGeometry(GEO.box,K.roofD,-40,2.35,33.4,[4.8,.2,3.6]),ctx.worldBatch.addBox(.9,1.3,.1,K.woodD,-40,0,35),ctx.worldBatch.addBeam([-37.6,.1,35.4],[-38.6,1.3,35],.08,K.wood,4);

for(let e=0;e<4;e++)ctx.worldBatch.addBox(.7,.5,.6,V.clay.honey,-42.4+e*.9,.9,32.6);

ctx.worldBatch.addBox(1.6,.4,.5,V.water.trough,-35,0,38.8),ctx.worldBatch.addCylinder(.3,.6,K.steel,-33,0,38.8,8),[[-27.2,33.2],[-27.2,36.4]].forEach(function(e){ctx.worldBatch.addBox(5,.08,2.2,K.woodL,e[0],.1,e[1]),ctx.worldBatch.addGeometry(GEO.arc,K.white,e[0]-2,.1,e[1],[1.1,1,1.1],[0,0,0]),ctx.worldBatch.addGeometry(GEO.arc,K.white,e[0]+2,.1,e[1],[1.1,1,1.1],[0,0,0]),ctx.worldBatch.addBox(5,.06,.06,K.white,e[0],1.1,e[1])}),ctx.worldBatch.addBox(3.2,2,2.6,K.cal,-26,0,40.2),ctx.worldBatch.addBox(3.5,.25,2.9,K.roofD,-26,2,40.2);

for(let e=0;e<3;e++)ctx.worldBatch.addBox(2.4,.08,.7,[10211402,8173626,12048746][e],-26,.6+e*.5,40.2);

var gg={x:27.5,z:35.6,len:12,w:10};

for(let e=0;e<=8;e++)ctx.worldBatch.addGeometry(GEO.arc,K.white,gg.x-6+e*1.5,0,gg.z,[5,3.2,5],[0,Math.PI/2,0]);

ctx.worldBatch.addBox(12,.14,.14,K.white,gg.x,3.2,gg.z),ctx.worldBatch.addBox(.18,.18,10,K.white,gg.x-6,0,gg.z),ctx.worldBatch.addBox(.18,.18,10,K.white,gg.x+6,0,gg.z);

for(let e=0;e<4;e++){ctx.worldBatch.addBox(8,.5,1.2,K.soilD,gg.x-1.4,0,gg.z-3.4+e*2.3);for(let t=0;t<8;t++)ctx.worldBatch.addSphere(1,[V.flora.leafGreen,3118660,6734426][(t+e)%3],gg.x-4.9+t*1,.7,gg.z-3.4+e*2.3+randRange(-.2,.2),randRange(.35,.5),randRange(.4,.6),randRange(.35,.5))}

ctx.worldBatch.addBox(4,2.6,4,K.cal,gg.x+4,0,gg.z+1.4),ctx.worldBatch.addBox(4.3,.3,4.3,K.roofD,gg.x+4,2.6,gg.z+1.4),ctx.worldBatch.addBox(1,1.9,.12,K.woodD,gg.x+4,0,gg.z+3.45),ctx.worldBatch.addBox(.9,.5,.1,V.water.trough,gg.x+4,1.4,gg.z+3.46),QUADRAS.forEach(function(e){ctx.worldBatch.addBox(e.x2-e.x1,.3,e.z2-e.z1,K.soilD,(e.x1+e.x2)/2,0,(e.z1+e.z2)/2);let t=(e.z2-e.z1-2)/12,n,r,i,a;for(n=0;n<13;n++)for(i=e.z1+1+n*t,ctx.worldBatch.addBox(e.x2-e.x1-1.6,.34,.9,5913120,(e.x1+e.x2)/2,.3,i),r=0;r<18;r++){a=e.x1+1.6+r*(e.x2-e.x1-3.2)/17;let t=.64,o=(n+r)%3;e.k===0?(ctx.worldBatch.addBox(.7,.7,.7,[V.flora.cropGreenA,V.flora.cropGreenB,V.flora.cropGreenC][o],a,t,i),o===0&&ctx.worldBatch.addSphere(1,V.flora.lilac,a,1.6400000000000001,i,.22,.22,.22)):e.k===1?(ctx.worldBatch.addSphere(1,[V.flora.cropGreenB,4697423,6078560][o],a,.99,i,.55,.38,.55),r%3==0&&ctx.worldBatch.addSphere(1,10514628,a,.7,i+.45,.28,.2,.28)):e.k===2?n%2==0?ctx.worldBatch.addCone(.34,2.4+o*.25,7913274,a,t,i,4):(ctx.worldBatch.addSphere(1,K.orange,a,1.02,i,.52,.42,.52,1),ctx.worldBatch.addSphere(1,4889146,a+.6,.8400000000000001,i,.35,.12,.35)):(ctx.worldBatch.addBox(.55,.45+o*.2,.55,[5216826,4164140,6991429][o],a,t,i),ctx.worldBatch.addSphere(1,16176954,a,1.3399999999999999+o*.2,i,.26,.26,.26))}ctx.worldBatch.addBox(.25,1.3,.25,K.woodD,e.x1+.7,0,e.z2+.5),ctx.worldBatch.addBox(1.5,.8,.12,V.light.parchment,e.x1+.7,1.3,e.z2+.5)});

var _g={x1:23,x2:39,z1:-10,z2:9};

ctx.worldBatch.addBox(16,.12,19,V.stone.sandstone,31,0,-.5),[_g.z1,_g.z2].forEach(function(e){[.55,1.15].forEach(function(t){ctx.worldBatch.addBox(_g.x2-_g.x1+.2,.14,.14,K.wood,31,t,e)})}),[_g.x1,_g.x2].forEach(function(e){[.55,1.15].forEach(function(t){ctx.worldBatch.addBox(.14,.14,_g.z2-_g.z1,K.wood,e,t,-.5)})});

for(let e=0;e<=8;e++)[_g.z1,_g.z2].forEach(function(t){ctx.worldBatch.addBox(.2,1.5,.2,K.woodD,_g.x1+e*2,0,t)});

for(let e=1;e<=9;e++)[_g.x1,_g.x2].forEach(function(t){ctx.worldBatch.addBox(.2,1.5,.2,K.woodD,t,0,_g.z1+e*(_g.z2-_g.z1)/10)});

ctx.worldBatch.addBox(.14,1.3,19,K.wood,31,0,-.5),ctx.worldBatch.addBox(6.6,2.6,4.4,K.woodL,26.5,0,-6.2),ctx.worldBatch.addGeometry(coneGeo(4),K.roof,26.5,3.6,-6.2,[4.9,2.2,4.9],[0,Math.PI/4,0]),ctx.worldBatch.addBox(1.2,1.7,.1,K.woodD,26.5,0,-3.95),ctx.worldBatch.addBox(5.4,2.2,3.8,K.woodL,35.2,0,5.4),ctx.worldBatch.addGeometry(GEO.box,K.roofD,35.2,2.5,5.4,[6.2,.3,4.6]),[[34,-6.4],[35.8,-6.4],[27,6.5]].forEach(function(e){ctx.worldBatch.addBox(2.2,.45,.7,V.clay.honey,e[0],0,e[1]),ctx.worldBatch.addBox(2,.2,.5,7049038,e[0],.45,e[1])});

for(let e=0;e<5;e++)ctx.worldBatch.addBox(1.3,.8,.8,15124314,36.5+e%2*.1,e>2?.8:0,-3+e%3*1.1);

ctx.worldBatch.addBox(3,.55,1.1,V.water.trough,28,0,1.4),[[16,32.5],[19,33.5],[13,34.5],[19.6,36.6],[10,32.5]].forEach(function(e){ctx.worldBatch.addCylinder(1.1,1.4,K.blue,e[0],0,e[1],14),ctx.worldBatch.addCylinder(.8,.14,1782608,e[0],1.4,e[1],14),ctx.worldBatch.addCylinder(1.2,.2,K.steel,e[0],1.14,e[1],14),ctx.worldBatch.addCylinder(.16,2.2,K.steelD,e[0]+.9,0,e[1],8)}),ctx.worldBatch.addBox(15,.4,3.6,K.concD,30,0,13.5),ctx.worldBatch.addGeometry(GEO.half,5221986,30,.4,13.5,[1.6,13.6,1.6],[0,0,Math.PI/2]),ctx.worldBatch.addSphere(1,K.white,39,1.4,13.5,1.4,1.1,1.3,1),ctx.worldBatch.addBox(1.4,.12,3,K.concD,30,0,10.2),ctx.worldBatch.addCylinder(.5,2.6,K.steel,25,0,16.8,10),ctx.worldBatch.addCylinder(.62,.3,K.red,25,2.6,16.8,10),ctx.worldBatch.addCylinder(.5,2.2,K.steel,27.4,0,16.8,10),ctx.worldBatch.addCylinder(.62,.3,K.blue,27.4,2.2,16.8,10),ctx.worldBatch.addBeam([26.4,.9,13.5],[25.2,2.8,16.8],.14,K.steelD,6),ctx.worldBatch.addBeam([37.4,1.2,13.5],[38.8,1.2,13.5],.12,K.steelD,6);

  ctx.LAKE_X = LAKE_X;
  ctx.LAKE_Z = LAKE_Z;
  ctx.FISH_TANKS = FISH_TANKS;
}
