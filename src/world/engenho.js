// ============================================================================
// ENGENHO 1850: alvenaria de pedra, telhado com 48 painéis FV e maquinário interno
// ============================================================================
import { THREE, col, Batch, GEO, cylGeo, coneGeo } from "../engine/threeSetup.js";
import { K, V, BARN_ORIGIN } from "../data/worldData.js";
import { ctx } from "../engine/context.js";

export let barnGroup = null;
export let barnWalls = null;
export let barnRoof = null;

export function initEngenho() {
  barnGroup=new THREE.Group;
  barnGroup.position.set(BARN_ORIGIN.x,BARN_ORIGIN.y,BARN_ORIGIN.z),ctx.surface.add(barnGroup);
  barnWalls=new THREE.Group,barnRoof=new THREE.Group;
  barnGroup.add(barnWalls),barnGroup.add(barnRoof);

var zg=4.8,Bg=Math.atan2(3.6,6.1);

col(21,-43,43,-42.2),col(21,-43,21.8,-33),col(42.2,-43,43,-33),col(21,-33.8,28.5,-33),col(33.5,-33.8,38,-33),col(39.4,-33.8,43,-33);

var Vg=new Batch,Hg=new Batch,K=new Batch,Ug=new Batch,Wg=V.glass.windowDeep;

Vg.addBox(22,zg,.8,K.stone,0,0,-4.6),Vg.addBox(.8,zg,10,K.stone,-10.6,0,0),Vg.addBox(.8,zg,10,K.stone,10.6,0,0),Vg.addBox(7.5,zg,.8,K.stone,-7.25,0,4.6),Vg.addBox(4.5,zg,.8,K.stone,3.75,0,4.6),Vg.addBox(3.6,zg,.8,K.stone,9.2,0,4.6),Vg.addBox(5,.8,.8,K.stone,-1,4,4.6),Vg.addBox(1.4,1.8,.8,K.stone,6.7,3,4.6),[1,2,3,4].forEach(function(e){Vg.addBox(22,.09,.05,K.stoneD,0,e,-5.02),Vg.addBox(.05,.09,10,K.stoneD,-11.02,e,0),Vg.addBox(.05,.09,10,K.stoneD,11.02,e,0),Vg.addBox(7.5,.09,.05,K.stoneD,-7.25,e,5.02),Vg.addBox(4.5,.09,.05,K.stoneD,3.75,e,5.02),Vg.addBox(3.6,.09,.05,K.stoneD,9.2,e,5.02)});

for(let e=0;e<5;e++)[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(function(t){Vg.addBox(e%2?1.1:.8,.96,e%2?.8:1.1,K.stoneL,t[0]*10.7,e*.96,t[1]*4.6)});

[[-7.25,5.02],[9.4,5.02]].forEach(function(e){Vg.addBox(1.8,1.7,.1,K.ocre,e[0],1.6,e[1]),Vg.addBox(1.5,1.4,.12,Wg,e[0],1.75,e[1]+.02),Vg.addBox(.08,1.4,.14,K.woodD,e[0],1.75,e[1]+.03)}),[-7,0,7].forEach(function(e){Vg.addBox(1.8,1.7,.1,K.ocre,e,1.8,-5.02),Vg.addBox(1.5,1.4,.12,Wg,e,1.95,-5.03)}),[-11.02,11.02].forEach(function(e){[-2,2].forEach(function(t){Vg.addBox(.1,1.7,1.8,K.ocre,e,1.8,t),Vg.addBox(.12,1.4,1.5,Wg,e,1.95,t)})}),Vg.addBox(.5,4,1.1,K.woodD,-3.5,0,4.6),Vg.addBox(.5,4,1.1,K.woodD,1.5,0,4.6),Vg.addBox(1.3,2.9,.2,K.wood,6.7,0,4.75),Vg.addBox(.12,2.9,.26,K.woodD,6.7,0,4.78),Vg.addBox(1.6,.14,.3,K.woodD,6.7,2.9,4.76),Vg.build(barnWalls);

var Gg=8.4,Kg=Math.sin(Bg),qg=Math.cos(Bg),Jg=Math.hypot(6.1,3.6)+.3;

[1,-1].forEach(function(e){let t=Jg/2-.1;Hg.addGeometry(GEO.box,K.roof,0,Gg-t*Kg+0,e*t*qg,[24,.3,Jg],[e*Bg,0,0]);for(let t=.6;t<Jg-.3;t+=.75)Hg.addGeometry(GEO.box,K.roofD,0,Gg-t*Kg+.18*qg,e*(t*qg+.18*Kg),[24,.05,.09],[e*Bg,0,0])});

for(let e=0;e<3;e++)for(let t=0;t<16;t++){let n=1.5+e*1.95,r=-9.6+t*1.28,i=.26;Hg.addGeometry(GEO.box,K.steel,r,Gg-n*Kg+i*qg,n*qg+i*Kg,[1.2,.08,1.82],[Bg,0,0]),Hg.addGeometry(GEO.box,[2906790,2576538][(e+t)%2],r,Gg-n*Kg+.32*qg,n*qg+.32*Kg,[1.1,.06,1.7],[Bg,0,0])}

Hg.addBox(24.4,.3,.55,K.roofD,0,8.38,0);

var Yg=new THREE.Shape;

Yg.moveTo(-5.4,0),Yg.lineTo(5.4,0),Yg.lineTo(0,3.35);

var Xg=new THREE.ExtrudeGeometry(Yg,{depth:.8,bevelEnabled:!1});

Xg.translate(0,0,-.4),Xg.rotateY(Math.PI/2),Hg.addGeometry(Xg,K.stone,-10.6,zg,0),Hg.addGeometry(Xg,K.stone,10.6,zg,0),Hg.addBox(1.4,5.2,1.4,K.stone,7,4.6,-2.5),Hg.addBox(1.8,.3,1.8,K.stoneD,7,9.8,-2.5),Hg.build(barnRoof),K.addBox(21.4,.16,9.2,13354164,0,0,0),K.addBeam([-10.4,2,-3.2],[10.9,2,-3.2],.14,K.steel,8),[-9,-4.5,0,4.5,9].forEach(function(e){K.addBox(.5,.4,.5,V.clay.ochreDark,e,1.8,-3.2),K.addBox(.36,1.8,.36,K.woodD,e,.16,-3.7)}),[-8,-4,2,6].forEach(function(e){K.addGeometry(cylGeo(1,16),K.woodL,e,2,-3.2,[.9,.34,.9],[0,0,Math.PI/2])}),[[-8,-8.2,-1.6],[-4,-5,-1.8],[2,-1.5,-1.8],[6,4,-3.2]].forEach(function(e){K.addBeam([e[0],1.7,-3.2],[e[1],.9,e[2]],.05,K.black,4)}),K.addBox(.5,3.4,1.3,K.steelD,-8.6,.16,-1.6),K.addGeometry(cylGeo(1,16),K.steel,-8.6,3,-1.6,[.9,.18,.9],[Math.PI/2,0,0]),K.addGeometry(cylGeo(1,16),K.steel,-8.6,.8,-1.6,[.9,.18,.9],[Math.PI/2,0,0]),K.addBox(.05,2.2,.1,K.black,-8,.8,-1.6),K.addBox(3,.16,2.2,K.woodL,-8.6,1.1,-.6),K.addGeometry(cylGeo(1,8),K.woodD,-8.6,1.55,-.6,[.38,2.4,.38],[0,0,Math.PI/2]),K.addBox(2.2,.8,2.2,K.woodD,-4.2,.16,-1.9),K.addCylinder(.8,.3,K.concD,-4.2,.96,-1.9,18),K.addCylinder(.72,.3,12039081,-4.2,1.26,-1.9,18),K.addGeometry(coneGeo(4),K.wood,-4.2,2.1,-1.9,[.8,1,.8],[Math.PI,Math.PI/4,0]);

for(let e=0;e<4;e++)K.addBox(.5,.6,.4,[14468496,13810047][e%2],-2.6+e*.55,.16,-.6);

K.addBox(2.4,.35,1.8,K.woodD,-1.4,.16,-2),[[-1.4,-1.4],[-.6,-2.4],[-2.2,-2.4]].forEach(function(e){K.addCylinder(.3,1.5,V.clay.ochreDark,e[0],.5,e[1],12),K.addCylinder(.42,.12,K.steel,e[0],2,e[1],10)}),K.addBeam([-3.3,.5,-.4],[-.4,1.1,-.9],.1,8369476,5),K.addBeam([-3.3,.7,-.2],[-.4,1.3,-.7],.1,6988344,5),K.addBeam([-3.3,.9,-.6],[-.4,1,-1.1],.1,9684564,5),[-9.3,-8.5].forEach(function(e){K.addCylinder(.36,1.3,K.red,e,.16,2.6,10),K.addCylinder(.07,1.1,K.steel,e,1.4,2.6,6)}),K.addBox(1.4,.14,.14,K.steel,-8.9,2.5,2.6),K.addBox(2.4,1.3,1.8,V.clay.terracotta,-5.4,.16,2.9),K.addCone(1.1,1.5,K.steelD,-5.4,1.46,2.9,4),K.addCylinder(.22,2,K.steelD,-5.4,2.96,2.9,8),Ug.addBox(1.6,.12,1,V.flora.pumpkin,-5.4,1.46,2.9),K.addCylinder(.38,.8,K.woodD,-3.4,.16,2.8,8),K.addBox(.9,.28,.4,K.black,-3.4,.96,2.8),K.addBox(.3,.2,.3,K.black,-2.9,1.1,2.8),K.addBox(1,.7,.9,9067056,-7,.16,1.8),K.addBox(3,.1,5,K.yellow,-1,.16,2.2);

for(let e=0;e<6;e++)K.addBox(3,.12,.38,K.black,-1,.16,-.1+e*.9);

K.addBox(3,.9,1,K.steelD,4,.16,-3.2),K.addBox(3.2,.5,.9,4025246,4,1.06,-3.2),K.addBox(.8,.9,.9,3103370,2.8,1.56,-3.2),K.addCylinder(.3,.5,K.steel,2.5,1.8,-3.2,10,.3,[0,0,Math.PI/2]),K.addBox(.5,.6,.5,K.steel,5.5,1.56,-3.2),K.addBox(1.2,.4,1.2,V.fabric.emerald,7.2,.16,-3.2),K.addBox(.5,2.4,.5,V.fabric.emerald,7.2,.56,-3.6),K.addBox(.9,.6,1.2,V.fabric.emerald,7.2,2.8,-3.1),K.addBox(1.5,.2,1,K.steel,7.2,1.5,-2.9),K.addBox(2.4,.18,1.3,K.steelD,8,1,-.6),[[-1,-.5],[1,-.5],[-1,.5],[1,.5]].forEach(function(e){K.addBox(.16,.9,.16,K.steelD,8+e[0],.16,-.6+e[1])}),K.addBox(.9,1,.9,K.red,9.4,.16,.6),K.addBeam([9,1,.4],[8,1.4,-.6],.05,K.black,4),[[7.6,1.3,-.6,.16,V.light.white],[7.9,1.45,-.5,.12,10478591],[7.3,1.35,-.8,.1,16773280],[8,1.5,-.7,.1,V.light.white],[7.7,1.55,-.9,.08,V.flora.sunflower]].forEach(function(e){Ug.addGeometry(GEO.ico0,e[4],e[0],e[1],e[2],e[3])}),[4.4,6].forEach(function(e){K.addBox(.28,2.8,.28,K.red,e,.16,1.4)}),K.addBox(2,.4,.4,K.red,5.2,2.6,1.4),K.addCylinder(.22,1,K.steel,5.2,1.6,1.4,8),K.addBox(1.6,.2,.7,K.red,5.2,.16,1.4),K.addBox(2.6,.14,1.3,K.woodL,7.2,1.1,3.7),[[-1.1,-.5],[1.1,-.5],[-1.1,.5],[1.1,.5]].forEach(function(e){K.addBox(.12,.95,.12,K.woodD,7.2+e[0],.16,3.7+e[1])}),K.addBox(.8,.5,.1,K.black,6.6,1.24,3.3),Ug.addBox(.7,.4,.02,4521904,6.6,1.3,3.36),K.addBox(.4,.04,.3,V.fabric.jade,7.4,1.24,3.8),K.addBox(.3,.04,.25,V.fabric.jade,7.9,1.24,3.5),K.addBox(1,.5,.6,K.red,9.8,.16,-3.8),K.addBox(1,.5,.6,K.red,9.8,.66,-3.8),K.addBox(1,.5,.6,K.red,8.7,.16,-3.8),K.addBox(1,.5,.6,K.red,9.5,.16,3),K.addBox(1,.5,.6,K.red,9.5,.66,3),K.addBox(.5,.12,.12,K.steel,9.5,1.2,3),K.build(barnGroup),Ug.build(barnGroup,{unlit:!0,outline:!1});

  ctx.barnGroup = barnGroup;
  ctx.barnWalls = barnWalls;
  ctx.barnRoof = barnRoof;
}
