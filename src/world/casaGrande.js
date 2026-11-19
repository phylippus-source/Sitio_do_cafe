// ============================================================================
// CASA GRANDE: porão alto, fachada imperial, escada de mármore, 2 pisos e telhado
// ============================================================================
import { THREE, toonMat, col, GEO, Batch, hipRoof } from "../engine/threeSetup.js";
import {
  K,
  V,
  CASA_ORIGIN,
  CASA_WHITE,
  CASA_GROUND_H,
  CASA_OCHRE,
  MARBLE,
  TILE_WARM,
  IRON_DARK,
  GOLD_ACCENT,
  WOOD_TRIM,
  CASA_UPPER_H,
} from "../data/worldData.js";
import { ctx } from "../engine/context.js";

export let casaGroup = null;
export let casaFloorMat = null;
export let casaGroundWalls = null;
export let casaRoof = null;
export let casaUpper = null;
export let casaUpperWalls = null;
export let casaDoubleMat = null;
export let casaFoundation = null;
export let wall = null;

export function initCasaGrande() {
  casaGroup=new THREE.Group;
  casaGroup.position.set(CASA_ORIGIN.x,CASA_ORIGIN.y,CASA_ORIGIN.z),ctx.surface.add(casaGroup);
  casaFloorMat=toonMat.clone(),casaGroundWalls=new THREE.Group,casaRoof=new THREE.Group,casaUpper=new THREE.Group,casaUpperWalls=new THREE.Group;
  casaGroup.add(casaGroundWalls),casaGroup.add(casaRoof),casaGroup.add(casaUpper),casaUpper.add(casaUpperWalls),casaUpper.position.y=5;
  casaDoubleMat=toonMat.clone();
  casaDoubleMat.side=2;

function i_(e,t,n,r,i){col(e+CASA_ORIGIN.x,t+CASA_ORIGIN.z,n+CASA_ORIGIN.x,r+CASA_ORIGIN.z,i)}

function a_(e,t,n,r,i,a,o,s){let c=(t[0]+t[1])/2,l=t[1]-t[0],u=o-a;e.addBox(l+.5,.22,i+.16,CASA_WHITE,c,n+o-.04,r),e.addBox(l+.4,.15,i+.2,CASA_WHITE,c,n+a-.12,r),e.addBox(l,u-.05,.06,V.glass.windowDeep,c,n+a+.01,r),e.addBox(.16,u-.02,i+.12,CASA_WHITE,t[0]-.02,n+a+.01,r),e.addBox(.16,u-.02,i+.12,CASA_WHITE,t[1]+.02,n+a+.01,r),e.addBox(.06,u-.06,.08,K.woodD,c,n+a+.03,r+.05*s),e.addGeometry(GEO.box,CASA_WHITE,c,n+o+.22+.18,r,[l+.3,.36,i+.1],[0,0,0])}

function o_(e,t,n,r,i,a,o,s){let c=t[1]-t[0],l=o-a,u=r+(i/2+.06)*s;e.addBox(c*.4,l-.2,.1,V.paint.shutterGreen,t[0]-c*.2-.1,n+a+.1,u),e.addBox(c*.4,l-.2,.1,V.paint.shutterGreen,t[1]+c*.2+.1,n+a+.1,u)}
  wall = function wall(e,t,n,r,i,a,o,s,c,l,u,d){function f(r,i,a,s){i-r<.02||s-a<.02||(t===`x`?e.addBox(i-r,s-a,c,l,(r+i)/2,o+a,n):e.addBox(c,s-a,i-r,l,n,o+a,(r+i)/2))}function p(e,r){u&&(t===`x`?i_(e,n-c/2,r,n+c/2,u):i_(n-c/2,e,n+c/2,r,u))}let m=r;a=(a||[]).slice().sort(function(e,t){return e[0]-t[0]}),a.forEach(function(r){let i=r[2]||0,a=r[3]||s;f(m,r[0],0,s),p(m,r[0]),i>0&&(f(r[0],r[1],0,i),p(r[0],r[1])),f(r[0],r[1],a,s),d&&t===`x`&&(a_(e,r,o,n,c,i,a,d),o_(e,r,o,n,c,i,a,d)),m=r[1]}),f(m,i,0,s),p(m,i)}
  var c_=new Batch,l_=new Batch,q=new Batch,u_=new Batch,d_=new Batch,f_=new Batch,J=new Batch,p_=new Batch,m_=new Batch,h_=new Batch,g_=1,__=CASA_GROUND_H;

h_.addBox(26.8,.8,20.8,K.stone,0,0,0);

for(let e=0;e<4;e++)h_.addBox(26.9,.05,20.9,K.stoneD,0,.2+e*.18,0);

[-9.5,-6.5,-3.5,3.5,6.5,9.5].forEach(function(e){c_.addBox(.6,.44,.16,V.dark.charcoal,e,.3,10.46)}),wall(c_,`x`,-10,-13,13,[[-9,-7.2,.9,2.9],[-3.9,-2.1,.9,2.9],[2.1,3.9,.9,2.9],[7.2,9,.9,2.9]],g_,__,.5,CASA_OCHRE,`s`,-1),wall(c_,`z`,-13,-10,10,[[-6,-4.2,.9,2.9],[-1,.8,.9,2.9],[4.2,6,.9,2.9]],g_,__,.5,CASA_OCHRE,`s`,1),wall(c_,`z`,13,-10,10,[[-6,-4.2,.9,2.9],[-1,.8,.9,2.9],[4.2,6,.9,2.9]],g_,__,.5,CASA_OCHRE,`s`,1),wall(c_,`x`,10,-13,13,[[-11.4,-9.6,.9,2.9],[-3.8,-2.6,.9,2.9],[-1.3,1.3,0,3.4],[2.6,3.8,.9,2.9],[9.6,11.4,.9,2.9]],g_,__,.5,CASA_OCHRE,`s`,1),[[-13,-10],[13,-10],[-13,10],[13,10]].forEach(function(e){c_.addBox(.9,__+.2,.9,CASA_WHITE,e[0],.8,e[1]),c_.addBox(1,.22,1,K.stoneL,e[0],1+__-.2,e[1])}),c_.addBox(26.7,.32,.7,CASA_WHITE,0,1+__-.28,10.1),c_.addBox(26.7,.32,.7,CASA_WHITE,0,1+__-.28,-10.1),c_.addBox(.7,.32,20.6,CASA_WHITE,13.1,1+__-.28,0),c_.addBox(.7,.32,20.6,CASA_WHITE,-13.1,1+__-.28,0);

var v_=.3;

wall(c_,`x`,2,-13,-7,[],g_,__-.04,v_,CASA_WHITE,`s`),wall(c_,`x`,2,-7,13,[[-1.2,1.2,0,3.2]],g_,__-.04,v_,CASA_WHITE,`s`),wall(c_,`z`,-7,-10,10,[[5,6.4,0,3],[-7,-5.6,0,3],[-.4,.8,0,3]],g_,__-.04,v_,CASA_WHITE,`s`),wall(c_,`z`,7,-10,10,[[5,6.4,0,3],[-7,-5.8,0,3],[-2.5,-1.2,0,3]],g_,__-.04,v_,CASA_WHITE,`s`),wall(c_,`x`,-4,-7,7,[[-2.5,2.5,0,3.2]],g_,__-.04,v_,CASA_WHITE,`s`),wall(c_,`x`,-1,-13,-7,[[-10,-8.8,0,3]],g_,__-.04,v_,CASA_WHITE,`s`),wall(c_,`x`,-3,7,13,[],g_,__-.04,v_,CASA_WHITE,`s`),c_.build(casaGroundWalls);

function y_(e,t,n,r,i){h_.addBox(n-e,.2,r-t,i,(e+n)/2,.8,(t+r)/2)}

y_(-13,2,-7,10,13480074),y_(-7,2,7,10,MARBLE),y_(7,2,13,10,V.wood.floorBoard),y_(-13,-1,-7,2,15128240),y_(-13,-10,-7,-1,TILE_WARM),y_(-7,-4,7,2,V.wood.oak),y_(-7,-10,7,-4,V.wood.oak),y_(7,-3,13,2,3894949),y_(7,-10,13,-3,K.concD);
  casaFoundation=h_.build(casaGroup,{mat:casaFloorMat,outline:!1});
  for(let e=0;e<7;e++)for(let t=0;t<8;t++)(e+t)%2&&q.addBox(1.96,.03,.96,4013380,-6+e*2,1,2.5+t*.9*1);

for(let e=0;e<24;e++){let t=1+(e+1)*4/24;q.addBox(2,t-1+0,.275,[MARBLE,15000280][e%2],0,1,9.4-(e+.5)*.275)}

[-1.05,1.05].forEach(function(e){q.addBeam([e,1.9,9.6],[e,5.9,2.8],.04,IRON_DARK,5);for(let t=0;t<=24;t+=2)q.addBox(.05,.9,.05,IRON_DARK,e,1+t*4/24,9.4-t*.275)}),q.addBox(3,.3,1.2,K.woodD,-10,1,3),q.addBox(2.6,2.4,.4,K.woodD,-10,1,2.4),q.addBox(2.2,2,.1,V.clay.gold,-10,1.2,2.65),q.addBox(.3,.9,.3,V.clay.gold,-10,3.4,2.4),q.addBox(1.1,.03,5,V.fabric.brickRed,-10,1,6.2);

for(let e=0;e<3;e++)q.addBox(2.8,.5,.6,K.woodL,-10,1,5.2+e*1.3),q.addBox(2.8,.5,.1,K.woodD,-10,1.5,5+e*1.3);

q.addBox(.6,2.2,.4,K.woodD,5.6,1,2.4),q.addBox(.4,.5,.1,V.clay.gold,5.6,2.2,2.62),q.addBox(1.4,.5,.5,IRON_DARK,-4.5,1,9.3),q.addBox(1.4,.1,.55,K.woodL,-4.5,1.5,9.3),[[-5,2.2],[-3,2.2],[3,2.2]].forEach(function(e,t){q.addBox(1,1.3,.06,K.woodD,e[0],2.4,e[1]+.2),q.addBox(.82,1.1,.04,[4877199,9399114,6262618][t],e[0],2.5,e[1]+.24)}),q.addBox(6,.12,1.8,K.woodD,0,1.76,-7.4),[[-2.8,-8.1],[2.8,-8.1],[-2.8,-6.7],[2.8,-6.7]].forEach(function(e){q.addBox(.18,.76,.18,K.woodD,e[0],1,e[1])});

for(let e=0;e<7;e++)q.addBox(.45,.5,.45,K.woodL,-2.7+e*.9,1,-8.5),q.addBox(.45,.5,.45,K.woodL,-2.7+e*.9,1,-6.3),q.addBox(.45,.55,.06,K.woodD,-2.7+e*.9,1.5,-8.75);

q.addBox(3.4,.9,.5,K.woodD,0,1,-9.6),q.addBox(3.5,.06,.55,MARBLE,0,1.9,-9.6),[[-1.2],[0],[1.2]].forEach(function(e){q.addBox(.5,.4,.2,V.clay.gold,e[0],2.4,-9.7)}),q.addCylinder(2,.03,V.fabric.brickRed,0,1,-1,22),q.addBox(3,.55,.9,V.fabric.burgundy,0,1,-2.9),q.addBox(3,.6,.25,V.fabric.burgundy,0,1.5,-3.3),q.addBox(1.2,.4,.8,K.woodD,0,1,-.8),[[-3.6,-.5],[3.6,-.5]].forEach(function(e){q.addBox(.9,.5,.9,V.paint.shutterGreen,e[0],1,e[1]),q.addBox(.9,.5,.2,V.paint.shutterGreen,e[0],1.4,e[1]-.4)}),q.addBox(1.6,.9,.7,V.dark.charcoal,5.3,1,.8),q.addBox(1.7,.06,.9,K.woodD,5.3,1.9,.8),q.addBox(.06,1.6,10.8,GOLD_ACCENT,-12.72,1.9,-5.6);

for(let e=0;e<9;e++)q.addBox(.07,.4,.4,WOOD_TRIM,-12.7,1.9+e%4*.4,-10.4+e*1.2);

q.addBox(2.2,1,1.1,IRON_DARK,-11.4,1,-9.2),q.addCone(1,1,IRON_DARK,-11.4,2,-9.2,4,[0,Math.PI/4,0]),q.addCylinder(.2,1.8,IRON_DARK,-11.4,3,-9.2,8),u_.addBox(.8,.25,.04,V.flora.pumpkin,-11.4,1.55,-8.62),q.addBox(.7,.9,4.5,K.woodL,-12.3,1,-4.8),q.addBox(.75,.06,4.6,V.light.cream,-12.3,1.9,-4.8),q.addBox(.5,.12,.9,K.steel,-12.3,1.94,-4.2),q.addBox(2.6,.14,1.4,K.wood,-9.6,1.75,-5),[[-1.1,-.5],[1.1,-.5],[-1.1,.5],[1.1,.5]].forEach(function(e){q.addBox(.14,.75,.14,K.woodD,-9.6+e[0],1,-5+e[1])});

for(let e=0;e<5;e++)q.addCylinder(.12,.2,K.copper,-12.4,3.1,-9.5+e*.5,6);

q.addBox(.8,.95,2.4,K.woodD,-12.4,1,.5),q.addBox(2.5,.9,.8,K.woodL,-8.5,1,.6);

function x_(e){return[V.flora.coral,V.flora.marigold,V.flora.sage,V.light.wheat,V.flora.purple,V.clay.copperBrown][e%6]}

function S_(e,t,n,r,i){let a=i%5;a===0||a===3?e.addCylinder(.12,.3,x_(i),t,n,r,6):a===1?e.addCylinder(.09,.2,K.steel,t,n,r,6):a===2?e.addBox(.34,.24,.3,V.clay.sandGold,t,n,r):e.addBox(.3,.3,.3,[K.woodL,V.clay.mustard,V.clay.terracotta][i%3],t,n,r)}

function C_(e,t,n,r,i,a){let o=n-t,s=Math.floor(o/.5),c=Math.max(1,Math.round(o/1.5));for(let c=0;c<3;c++){e.addBox(o,.06,.5,K.woodL,(t+n)/2,i+.55+c*.7,r);for(let n=0;n<s;n++)S_(e,t+.25+n*.5,i+.61+c*.7,r,n+c*2+(a||0))}for(let n=0;n<=c;n++)e.addBox(.08,2.3,.54,K.woodD,t+n*o/c,i,r)}

function w_(e,t,n,r,i,a){let o=n-t,s=Math.floor(o/.5),c=Math.max(1,Math.round(o/1.5));for(let c=0;c<3;c++){e.addBox(.5,.06,o,K.woodL,r,i+.55+c*.7,(t+n)/2);for(let n=0;n<s;n++)S_(e,r,i+.61+c*.7,t+.25+n*.5,n+c*3+(a||0))}for(let n=0;n<=c;n++)e.addBox(.54,2.3,.08,K.woodD,r,i,t+n*o/c)}

C_(q,7.4,12.7,-9.6,1),w_(q,-9.4,-3.4,7.4,1),w_(q,-9.4,-3.4,12.7,1,2),[[9,-6.8],[10,-6.8],[9,-5.6],[10,-5.6]].forEach(function(e){q.addCylinder(.45,.9,K.wood,e[0],1,e[1],10,.42),q.addCylinder(.47,.06,K.steelD,e[0],1.45,e[1],10)});

for(let e=0;e<12;e++)q.addCylinder(.22,.5,V.flora.cornflower,8.4+e%4*.5,1,-4.6+(e/4|0)*.5,8);

q.addBox(2,.85,.8,K.white,11.4,1,-5),q.addBox(2.05,.08,.85,K.steel,11.4,1.85,-5);

function T_(e,t,n,r,i){e.setOrigin(t,0,r,i||0),e.addBox(.42,.42,.6,K.white,0,n,0),e.addBox(.4,.55,.2,K.white,0,n,-.38),e.addBox(.44,.05,.5,K.steel,0,n+.42,.02),e.setOrigin(0,0,0,0)}

function E_(e,t,n,r,i){e.setOrigin(t,0,r,i||0),e.addCylinder(.1,.7,K.white,0,n,0,6),e.addBox(.65,.14,.48,K.white,0,n+.7,0),e.addCylinder(.035,.3,K.steel,0,n+.84,-.17,5),e.addBox(.7,.7,.04,10213873,0,n+1.3,-.3),e.setOrigin(0,0,0,0)}

function D_(e,t,n,r,i,a){e.addBox(1.1,.08,1.1,15397879,t,n,r),e.addCylinder(.03,1.9,K.steel,t-i*.5,n+.08,r+a*.5,5),e.addBox(.3,.05,.3,K.steel,t-i*.38,n+1.85,r+a*.45),e.addBox(.04,1.9,1.1,V.glass.showerGlass,t+i*.55,n+.08,r)}

q.addBox(.06,1.5,4.8,WOOD_TRIM,12.72,1,-.5),q.addBox(.06,.48,4.8,GOLD_ACCENT,12.7,2.01,-.5),T_(q,8,1,1.35,Math.PI),T_(q,9.4,1,1.35,Math.PI),E_(q,10.8,1,1.5,Math.PI),E_(q,12.1,1,1.5,Math.PI),D_(q,8.6,1,-2.2,1,-1),D_(q,11,1,-2.2,1,-1),q.addBox(2.2,.1,1,K.woodD,10,1.76,8.6),q.addBox(2.2,.76,.12,K.woodD,10,1,8.2),q.addBox(.5,.5,.5,K.woodL,10,1,7.6),w_(q,3.2,6.6,12.7,1,4),q.addBox(1.6,1.1,.05,15260080,10,2.2,9.7),q.build(casaGroup),u_.build(casaGroup,{unlit:!0,outline:!1}),f_.addBox(26.7,.2,0,K.black,0,-9,0),wall(f_,`x`,-10,-13,13,[[-9,-7.2,.9,3],[-3.9,-2.1,.9,3],[2.1,3.9,.9,3],[7.2,9,.9,3]],0,CASA_UPPER_H,.5,CASA_OCHRE,`a`,-1),wall(f_,`z`,-13,-10,10,[[-6,-4.2,.9,3],[-1,.8,.9,3],[4.2,6,.9,3]],0,CASA_UPPER_H,.5,CASA_OCHRE,`a`,1),wall(f_,`z`,13,-10,10,[[-6,-4.2,.9,3],[-1,.8,.9,3],[4.2,6,.9,3]],0,CASA_UPPER_H,.5,CASA_OCHRE,`a`,1),wall(f_,`x`,10,-13,13,[[-11.9,-10.3,0,3.1],[-9.2,-7.6,0,3.1],[-6.5,-4.9,0,3.1],[-3.8,-2.2,0,3.1],[2.2,3.8,0,3.1],[4.9,6.5,0,3.1],[7.6,9.2,0,3.1],[10.3,11.9,0,3.1]],0,CASA_UPPER_H,.5,CASA_OCHRE,`a`,1),[[-13,-10],[13,-10],[-13,10],[13,10]].forEach(function(e){f_.addBox(.9,CASA_UPPER_H+.02,.9,CASA_WHITE,e[0],0,e[1])}),f_.addBox(26.7,.34,.7,CASA_WHITE,0,CASA_UPPER_H-.3,10.1),f_.addBox(26.7,.34,.7,CASA_WHITE,0,CASA_UPPER_H-.3,-10.1),f_.addBox(.7,.34,20.6,CASA_WHITE,13.1,CASA_UPPER_H-.3,0),f_.addBox(.7,.34,20.6,CASA_WHITE,-13.1,CASA_UPPER_H-.3,0),[-11.1,-8.4,-5.7,-3,3,5.7,8.4,11.1].forEach(function(e){f_.addBox(2,.18,.14,CASA_WHITE,e,3.1,10.34),f_.addGeometry(GEO.box,CASA_WHITE,e,3.1+.18+.2,10.34,[2,.4,.1],[0,0,0]),f_.addBox(.9,.9,.08,V.glass.windowDeep,e,0,10.28)}),wall(f_,`x`,2.5,-13,-2,[[-9.2,-7.9,0,2.9],[-4.8,-3.5,0,2.9]],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`x`,2.5,2,13,[[3.5,4.8,0,2.9],[7.9,9.2,0,2.9]],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`z`,-7.5,2.5,10,[],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`z`,-2,2.5,10,[],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`z`,2,2.5,10,[],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`z`,7.5,2.5,10,[],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`x`,-1,-13,-4,[[-9.8,-8.4,0,2.9]],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`x`,-1,4,13,[[8.4,9.8,0,2.9]],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`z`,-4,-10,-1,[],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`z`,4,-10,-1,[],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`);

function O_(e,t,n,r,i){let a=e+t*2.55,o=n+r*2.55;wall(f_,`x`,o,Math.min(e-t*.15,a+t*.15),Math.max(e-t*.15,a+t*.15),[],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`),wall(f_,`z`,a,Math.min(n,o),Math.max(n,o),[[Math.min(n+r*i[0],n+r*i[1]),Math.max(n+r*i[0],n+r*i[1]),0,2.4]],0,CASA_UPPER_H-.04,v_,CASA_WHITE,`a`);let s=r>0?0:Math.PI;T_(J,e+t*.45,.04,n+r*.5,s),E_(J,e+t*1.5,.04,n+r*.35,s),J.addBox(2.38,.04,2.38,15397879,e+t*1.2,.04,n+r*1.2),D_(J,e+t*.7,.08,n+r*1.7,t,r),J.addBox(.06,1.4,2.3,WOOD_TRIM,e+t*.04,.08,n+r*1.2)}

O_(-12.75,1,2.65,1,[.7,1.6]),O_(-7.35,1,2.65,1,[.7,1.6]),O_(7.35,-1,2.65,1,[.7,1.6]),O_(12.75,-1,2.65,1,[.7,1.6]),O_(-12.75,1,-1.15,-1,[.7,1.6]),O_(12.75,-1,-1.15,-1,[.7,1.6]),f_.build(casaUpperWalls),J.addBox(12.2,.2,20.6,K.woodD,-7.2,-.2,0),J.addBox(12.2,.2,20.6,K.woodD,7.2,-.2,0),J.addBox(2.2,.2,13.1,K.woodD,0,-.2,-3.75),J.addBox(2.2,.2,.5,K.woodD,0,-.2,10.05),J.addBox(27.2,.2,2,K.woodD,0,-.2,11.4),J.addBox(27.2,.12,.2,IRON_DARK,0,0,12.4);

for(let e=0;e<=54;e++)J.addBox(.05,1,.05,IRON_DARK,-13.5+e*.5,0,12.4);

J.addBox(27.2,.07,.1,IRON_DARK,0,1,12.4),J.addBox(27.2,.05,.07,IRON_DARK,0,.5,12.4);

for(let e=0;e<=26;e++)e%3==0&&J.addSphere(.14,IRON_DARK,-13+e,1.15,12.4,1,1,1);

[-13.5,13.5].forEach(function(e){J.addBox(.22,1,.22,IRON_DARK,e,0,12.4)}),[-9.5,-3.2,3.2,9.5].forEach(function(e){J.addBox(.24,1,.24,IRON_DARK,e,0,12.4)}),[-1.1,1.1].forEach(function(e){J.addBox(.06,1,7,IRON_DARK,e,0,6.3)}),J.addBox(2.2,.06,.06,IRON_DARK,0,1,9.8);

function k_(e,t,n,r,i){J.addBox(n-e,.04,r-t,i,(e+n)/2,0,(t+r)/2)}

k_(-13,2.5,-7.5,10,V.wood.floorBoard),k_(-7.5,2.5,-2,10,V.wood.floorBoard),k_(2,2.5,7.5,10,V.wood.floorBoard),k_(7.5,2.5,13,10,V.wood.floorBoard),k_(-13,-1,13,2.5,TILE_WARM),k_(-13,-10,-4,-1,V.wood.floorBoard),k_(-4,-10,4,-1,V.wood.oak),k_(4,-10,13,-1,V.wood.floorBoard),k_(-2,2.5,-1,10,V.wood.floorBoard),k_(1,2.5,2,10,V.wood.floorBoard),k_(-1,9.8,1,10,V.wood.floorBoard);

function A_(e,t,n){J.addBox(2,.5,2.2,K.woodD,e,.04,t),J.addBox(1.9,.28,2.1,V.light.ivory,e,.54,t),J.addBox(1.9,.12,1.3,n,e,.82,t+.4),J.addBox(1.4,.18,.5,K.white,e,.82,t-.8),J.addBox(2.1,1.3,.14,K.woodD,e,.04,t-1.15),J.addBox(.5,.45,.5,K.woodL,e+1.5,.04,t-.8)}

function j_(e,t,n){J.setOrigin(e,0,t,n||0),J.addBox(1.6,2.3,.6,K.woodD,0,.04,0),J.addBox(.03,2,.05,V.clay.gold,0,.2,.32),J.setOrigin(0,0,0,0)}

var M_=[V.flora.cornflower,V.flora.salmon,V.flora.grass,V.flora.violet,V.flora.marigold,V.flora.cornflower];

A_(-10.2,6.8,M_[0]),j_(-7.95,5.4,-Math.PI/2),A_(-4.7,6.8,M_[1]),j_(-2.45,5.4,-Math.PI/2),A_(4.7,6.8,M_[2]),j_(2.45,5.4,Math.PI/2),A_(10.2,6.8,M_[3]),j_(7.95,5.4,Math.PI/2),A_(-8.2,-6.5,M_[4]),j_(-11,-9.45,0),A_(8.2,-6.5,M_[5]),j_(11,-9.45,0),J.addCylinder(2.4,.03,V.fabric.rust,0,.04,-5.5,22),J.addBox(2.8,.55,.9,V.fabric.royalBlue,0,.04,-8.4),J.addBox(2.8,.6,.25,V.fabric.royalBlue,0,.5,-8.8),J.addBox(1.2,.4,.8,K.woodD,0,.04,-5.5),[[-2.4,-6],[2.4,-6]].forEach(function(e){J.addBox(.9,.5,.9,V.paint.shutterGreen,e[0],.04,e[1])}),[[-8,6],[8,6],[0,-5],[0,.7]].forEach(function(e){J.addCylinder(.03,1,IRON_DARK,e[0],CASA_UPPER_H-1,e[1],4),J.addCylinder(.4,.06,IRON_DARK,e[0],CASA_UPPER_H-1.05,e[1],10),p_.addSphere(.14,V.light.warmGlow,e[0],CASA_UPPER_H-1.1,e[1],1,1,1)}),J.build(casaUpper),p_.build(casaUpper,{unlit:!0,outline:!1}),d_.addBox(26.8,.8,3.4,K.stone,0,0,11.9),d_.addBox(26.8,.2,3.4,MARBLE,0,.8,11.9);

for(let e=0;e<=8;e++){let t=-12+e*3;Math.abs(t)<.1||(d_.addCylinder(.28,3.88,CASA_WHITE,t,1,12.4,10,.22),d_.addBox(.7,.22,.7,CASA_WHITE,t,1,12.4),d_.addBox(.6,.24,.6,K.stoneL,t,4.72,12.4))}

[-1.5,1.5].forEach(function(e){d_.addCylinder(.3,3.88,CASA_WHITE,e,1,12.4,10,.24),d_.addBox(.8,.24,.8,CASA_WHITE,e,1,12.4)}),d_.addBox(27,.3,.5,CASA_WHITE,0,4.62,12.4);

for(let e=0;e<7;e++)d_.addBox(6.2-e*0,.14,.45,MARBLE,0,1/7*e,13.6+(6-e)*.45),d_.addBox(6.2,1/7,.04,e%2?WOOD_TRIM:GOLD_ACCENT,0,1/7*e+0,13.6+(6-e)*.45+.23);

[-3.2,3.2].forEach(function(e){d_.addBeam([e,.9,13.4],[e,1.9,16.8],.05,IRON_DARK,5),d_.addBox(.2,.9,.2,CASA_WHITE,e,0,16.8),d_.addSphere(.22,K.stoneL,e,1.1,16.8,1,1.4,1),d_.addSphere(.22,K.stoneL,e,2.1,13.4,1,1.4,1)});

for(let e=0;e<=6;e++)[-3.2,3.2].forEach(function(t){d_.addBox(.04,.8,.04,IRON_DARK,t,1/7*e,16.8-e*.45)});

for(let e=0;e<=26;e++)Math.abs(e-13)>3&&d_.addBox(.05,.9,.05,IRON_DARK,-13+e,1,13.55);

d_.addBox(10.5,.07,.07,IRON_DARK,-8.2,1.9,13.55),d_.addBox(10.5,.07,.07,IRON_DARK,8.2,1.9,13.55),[-12,-6,6,12].forEach(function(e){d_.addBox(.18,.5,.18,IRON_DARK,e,4,11.2),m_.addSphere(.17,16769952,e,3.8,11.2,1,1.3,1)}),d_.build(casaGroup),m_.build(casaGroup,{unlit:!0,outline:!1}),i_(-13.4,13.2,-3.2,13.5,`s`),i_(3.2,13.2,13.4,13.5,`s`),i_(-13.5,10.2,-13.2,13.5,`s`),i_(13.2,10.2,13.5,13.5,`s`),i_(-13.5,-10.3,13.5,-10.3,`a`),i_(13.4,-10.4,13.5,12.6,`a`),i_(-13.5,-10.4,-13.4,12.6,`a`),i_(-13.5,12.4,13.5,12.6,`a`),i_(-1.2,4.2,-1,9.9,`a`),i_(1,4.2,1.2,9.9,`a`),i_(-1.2,9.8,1.2,10,`a`);

var N_=5+CASA_UPPER_H,P_=4.6,F_=30.2,I_=24.2;

l_.addGeometry(hipRoof(F_,I_,P_),K.roof,0,N_,0),l_.addBox(30.599999999999998,.3,24.599999999999998,K.woodD,0,N_-.3,0);

var L_=Math.atan2(P_,I_/2),R_=Math.sin(L_),z_=Math.cos(L_);

for(let e=.5;e<I_/2-.6;e+=.8){let t=F_-2*e-.6;[[1,1],[-1,-1]].forEach(function(n){l_.addGeometry(GEO.box,K.roofD,0,N_+e*R_+.04,n[0]*(I_/2-e*z_),[t,.05,.1],[n[0]*L_,0,0])})}

l_.addBox(6.6,.3,.55,K.roofD,0,N_+P_-.02,0);

var B_=new THREE.Shape;

B_.moveTo(-4.4,0),B_.lineTo(4.4,0),B_.lineTo(0,3);

var V_=new THREE.ExtrudeGeometry(B_,{depth:.6,bevelEnabled:!1});

V_.translate(0,0,-.3),l_.addGeometry(V_,CASA_WHITE,0,N_-.1,10.6),l_.addGeometry(V_,K.stoneL,0,N_-.1,10.2,[1.06,1.06,.4]),l_.addCylinder(.85,.14,CASA_WHITE,0,N_+1,10.98,24,.85,[Math.PI/2,0,0]),l_.addCylinder(.7,.15,1914214,0,N_+1,11,24,.7,[Math.PI/2,0,0]),l_.addBox(.06,.55,.05,CASA_WHITE,0,N_+1,11.1),l_.addBox(.4,.06,.05,CASA_WHITE,.1,N_+1,11.1),[-4.5,4.5].forEach(function(e){l_.addSphere(.3,K.stoneL,e,N_+.1,10.6,1,1.3,1)}),l_.addSphere(.3,K.stoneL,0,N_+3.1,10.6,1,1.3,1);

for(let e=0;e<=12;e++)l_.addBox(.12,.5,.06,K.woodD,-12+e*2,N_-.7,12.1);

l_.addBox(1.4,3.4,1.4,CASA_OCHRE,6,N_+1.3,-3),l_.addBox(1.8,.3,1.8,K.stoneD,6,N_+4.5,-3),l_.addBox(.8,.9,.8,K.stone,6,N_+4.8,-3),l_.build(casaRoof,{mat:casaDoubleMat});

  ctx.casaGroup = casaGroup;
  ctx.casaFloorMat = casaFloorMat;
  ctx.casaGroundWalls = casaGroundWalls;
  ctx.casaRoof = casaRoof;
  ctx.casaUpper = casaUpper;
  ctx.casaUpperWalls = casaUpperWalls;
  ctx.casaDoubleMat = casaDoubleMat;
  ctx.casaFoundation = casaFoundation;
  ctx.wall = wall;
}
