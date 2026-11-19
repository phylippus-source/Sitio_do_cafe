// ============================================================================
// BUNKER SUBTERRÂNEO 40 × 35 m: casca, gaiola Faraday, fileiras norte e sul
// ============================================================================
import { THREE, toonMat, Batch, col, cylGeo } from "../engine/threeSetup.js";
import {
  BUNKER_FLOOR_Y,
  BUNKER_H,
  BUNKER_INNER,
  BUNKER_SLAB_Y,
  K,
  V,
  WOOD_TRIM,
  MARBLE,
  roomRect,
} from "../data/worldData.js";
import { ctx } from "../engine/context.js";

export let bunkerShell = null;
export let bunkerMat = null;

export function initBunker() {
  bunkerShell = null;
  bunkerMat = toonMat.clone();
  const X=BUNKER_FLOOR_Y;
  const lv=BUNKER_H;
  const uv=new Batch;
  const Z=new Batch;
  const dv=new Batch;
  const fv=new Batch;
  const pv=new Batch;
  const mv=new Batch;
  const Q=new Batch;
  const hv=new Batch;
  const gv=new Batch;
  const _v=new Batch;
  const vv=12896976;
  const yv=15330800;
  const bv=V.dark.navyBlack;
  const xv=16722902;
  const Sv=V.neon.cyan;
  const Cv=V.neon.mint;
  const wv=BUNKER_INNER.x1;
  const Tv=BUNKER_INNER.x2;
  const Ev=BUNKER_INNER.z1;
  const Dv=BUNKER_INNER.z2;
  const Ov=BUNKER_INNER.corridorZ1;
  const kv=BUNKER_INNER.corridorZ2;

  function Av(e,t,n,r,i,a){let o=n;(i||[]).slice().sort(function(e,t){return e[0]-t[0]}).forEach(function(e){s(o,e[0]),o=e[1]}),s(o,r);function s(n,r){r-n<.05||(e===`x`?col(n,t-a/2,r,t+a/2,`u`):col(t-a/2,n,t+a/2,r,`u`))}}

function jv(e,t,n,r,i){ctx.wall(uv,`x`,e,t,n,r,X,lv-.04,.3,i||15330800,null),Av(`x`,e,t,n,r,.3)}

function Mv(e,t,n,r,i){ctx.wall(uv,`z`,e,t,n,r,X,lv-.04,.3,i||15330800,null),Av(`z`,e,t,n,r,.3)}

function Nv(e,t,n,r,i){Z.addBox(n-e,.06,r-t,i,(e+n)/2,X,(t+r)/2)}

function Pv(e,t){return[e-t/2,e+t/2,0,2.5]}

uv.addBox(40,.2,35,12107975,8,BUNKER_SLAB_Y,-55.5),uv.addBox(.6,lv,35,vv,-11.7,X,-55.5),uv.addBox(.6,lv,35,vv,27.7,X,-55.5),uv.addBox(40,lv,.6,vv,8,X,-72.7),uv.addBox(40,lv,.6,vv,8,X,-38.3),col(-12.2,-73.2,-11.4,-37.8,`u`),col(27.4,-73.2,28.2,-37.8,`u`),col(-12.2,-73.2,28.2,-72.4,`u`),col(-12.2,-38.6,28.2,-37.8,`u`),_v.addBox(40,.8,35,11186873,8,-5.1,-55.5),[[-5,-2.4,9723959],[-2.4,-.4,7226663]].forEach(function(e){let t=Math.max(e[0],-4.3),n=Math.min(e[1],-.4);n>t+.01&&_v.addBox(40,n-t,35,e[2],8,t,-55.5)}),_v.addBox(40,.4,35,K.grass,8,-.4,-55.5),bunkerMat.transparent=!1,bunkerShell=_v.build(ctx.surface,{mat:bunkerMat,outline:!1}),jv(Ov,wv,Tv,[Pv(-8.2,1.6),Pv(-2.3,1.2),Pv(2,1.2),Pv(5.5,1.2),Pv(8.6,1.2),Pv(13.1,1.4),Pv(18.05,1.3),Pv(21.5,1.2),Pv(25.2,1.2)]),jv(kv,wv,Tv,[[-8.2,-2.2,0,2.8],Pv(4,1.2),Pv(9.1,1.4),Pv(16.4,1.6),Pv(23.9,1.4)]),[-4.4,.1,3.9,7.1,10.1,16.1,20,23].forEach(function(e){Mv(e,Ev,Ov,[])}),[2.2,5.8,12.4,20.4].forEach(function(e){Mv(e,kv,Dv,[])}),Nv(wv,Ev,-4.4,Ov,1184796),Nv(-4.4,Ev,.1,Ov,V.wood.oak),Nv(.1,Ev,3.9,Ov,V.wood.floorBoard),Nv(3.9,Ev,7.1,Ov,15256016),Nv(7.1,Ev,10.1,Ov,7043722),Nv(10.1,Ev,16.1,Ov,14673642),Nv(16.1,Ev,20,Ov,15397879),Nv(20,Ev,23,Ov,15922424),Nv(23,Ev,Tv,Ov,14870250),Nv(wv,Ov,Tv,kv,V.dark.slate),Nv(wv,kv,2.2,Dv,11967092),Nv(2.2,kv,5.8,Dv,15258544),Nv(5.8,kv,12.4,Dv,1972774),Nv(12.4,kv,20.4,Dv,2902586),Nv(20.4,kv,Tv,Dv,V.light.tileGrey),Q.addBox(38.6,.05,.05,xv,8,X+3.3,Ov+.2),Q.addBox(38.6,.05,.05,Sv,8,X+3.3,kv-.2),Z.addGeometry(cylGeo(1,16),K.steel,8,X+3,-54.5,[.18,38,.18],[0,0,Math.PI/2]),Z.addGeometry(cylGeo(1,16),K.blue,8,X+2.65,-54.5,[.14,38,.14],[0,0,Math.PI/2]),Z.addBox(1.4,.1,1.4,K.steelD,26.5,X,-54.5),[-.5,.5].forEach(function(e){Z.addBeam([26.5+e,X,-54.5],[26.5+e,-.2,-54.5],.05,K.steelD,5)});

for(let e=0;e<14;e++)Z.addBox(1,.04,.04,K.steelD,26.5,X+.4+e*.55,-54.5);

gv.addBox(1.8,.12,1.8,K.steelD,26.5,0,-54.5),gv.addBox(1.5,.06,1.5,K.red,26.5,.12,-54.5),gv.addCylinder(.07,.12,K.steel,26.5,.18,-54.5,6);

  function Kv(e,t,n){Z.setOrigin(e,0,t,n||0),Z.addBox(.42,.42,.6,K.white,0,X+.06,0),Z.addBox(.4,.55,.2,K.white,0,X+.06,-.38),Z.addBox(.44,.05,.5,K.steel,0,X+.48,.02),Z.setOrigin(0,0,0,0)}

function qv(e,t,n){Z.setOrigin(e,0,t,n||0),Z.addCylinder(.1,.7,K.white,0,X+.06,0,6),Z.addBox(.65,.14,.48,K.white,0,X+.76,0),Z.addCylinder(.035,.3,K.steel,0,X+.9,-.17,5),Z.addBox(.7,.7,.04,10213873,0,X+1.36,-.3),Z.setOrigin(0,0,0,0)}

function Jv(e,t,n){Z.addBox(1.1,.08,1.1,15397879,e,X+.06,t),Z.addCylinder(.03,1.9,K.steel,e-.5,X+.14,t+n*.5,5),Z.addBox(.3,.05,.3,K.steel,e-.38,X+1.99,t+n*.45),Z.addBox(.04,1.9,1.1,V.glass.showerGlass,e+.55,X+.14,t)}

function Yv(e,t,n,r,i,a){let o=n+2.55;ctx.wall(uv,`x`,o,e-.15,e+t+(a?.15:0),[[r,i,0,2.4]],X,lv-.04,.3,yv,null),Av(`x`,o,e-.15,e+t,[[r,i,0,2.4]],.3),a&&(ctx.wall(uv,`z`,e+t+.15,n,o,[],X,lv-.04,.3,yv,null),Av(`z`,e+t+.15,n,o,[],.3)),Nv(e,n,e+t,o-.15,15397879),Kv(e+.55,n+.5,0),qv(e+1.6,n+.35,0),Jv(e+.65,n+1.7,1),Z.addBox(.06,1.4,2.3,WOOD_TRIM,e+.04,X+.06,n+1.2)}

function Xv(e,t,n){Z.addBox(2,.5,2.2,K.woodD,e,X+.06,t),Z.addBox(1.9,.28,2.1,V.light.ivory,e,X+.56,t),Z.addBox(1.9,.12,1.3,n,e,X+.84,t+.4),Z.addBox(1.4,.18,.5,K.white,e,X+.84,t-.8),Z.addBox(2.1,1.3,.14,K.woodD,e,X+.06,t-1.15),Z.addBox(.5,.45,.5,K.woodL,e+1.5,X+.06,t-.8),Z.addBox(.5,.45,.5,K.woodL,e-1.5,X+.06,t-.8)}

function Zv(e,t,n){Z.addBox(1.1,.4,2,K.woodD,e,X+.06,t),Z.addBox(1,.22,1.9,V.light.ivory,e,X+.46,t),Z.addBox(1,.1,1.2,n,e,X+.68,t+.35),Z.addBox(1.2,1,.12,K.woodD,e,X+.06,t-1.05)}

function Qv(e,t,n){Z.setOrigin(e,0,t,n||0),Z.addBox(1.6,2.3,.6,K.woodD,0,X+.06,0),Z.addBox(.03,2,.05,V.clay.gold,0,X+.26,.32),Z.setOrigin(0,0,0,0)}

function $v(e,t,n,r){Z.setOrigin(e,0,t,r||0),Z.addBox(n,.05,.8,K.woodL,0,X+.76,0),Z.addBox(.06,.7,.7,K.woodD,-n/2+.05,X+.06,0),Z.addBox(.06,.7,.7,K.woodD,n/2-.05,X+.06,0),Z.setOrigin(0,0,0,0)}

function ey(e,t,n){Z.addBox(.5,.1,.5,n||V.dark.deviceBlack,e,X+.5,t),Z.addBox(.5,.8,.08,n||V.dark.deviceBlack,e,X+.55,t-.26),Z.addCylinder(.05,.44,K.steelD,e,X+.06,t,6),Z.addCylinder(.28,.04,K.steelD,e,X+.06,t,8)}

function ty(e,t,n){Z.addCylinder(.22*n,.35*n,V.clay.terracotta,e,X+.06,t,8),Z.addSphere(.4*n,4173394,e,X+.6*n+.2,t,1,1.2,1)}

var ny=.15;

function ry(e){let t=e.x1+ny,n=e.x2-ny;return{xw:t,xe:n,cx:(t+n)/2,zb:e.z1,zf:e.z2}}

function iy({xe:e,zb:t}){Yv(e-2.8,2.8,t,e-1.05,e-.15,!1)}

function ay({xw:e,xe:t,zf:n}){Qv(e+.3,n-1.4,Math.PI/2),Qv(e+.3,n-3,Math.PI/2),Z.addBox(.5,.8,1.6,V.dark.navyBlack,t-.3,X+.06,n-1.6),Q.addBox(.04,1.5,1.2,Sv,t-.04,X+.9,n-1.6),Z.addBox(.4,.05,1,K.steelD,t-.4,X+.5,n-3.2);for(let t=0;t<5;t++)Z.addBox(.3,.1,.18,[K.red,K.white,V.glass.windowDeep,K.yellow,V.dark.deviceBlack][t],e+.55,X+.06,n-4.1)}

function oy({xw:e,zf:t}){let n=t-6.4;$v(e+.5,n,3.8,Math.PI/2),[-1.3,0,1.3].forEach(function(t,r){let i=n+t;Z.addBox(.08,.62,1.28,V.dark.void,e+.2,X+1,i+(r===0?.08:r===2?-.08:0)),Q.addBox(.04,.56,1.2,[Sv,xv,Cv][r],e+.28,X+1.03,i)}),Z.addBox(.3,.5,.6,V.dark.navyBlack,e+.5,X+.81,n-1.8),Q.addBox(.02,.4,.5,Sv,e+.66,X+.86,n-1.8),Z.addBox(.5,.03,.2,K.black,e+1,X+.8,n),ey(e+1.7,n,V.dark.deviceBlack),Z.addBox(.9,1.9,.8,V.dark.graphite,e+.5,X+.06,n-3.2);for(let t=0;t<9;t++)Q.addBox(.05,.05,.5,[Sv,Cv,xv][t%3],e+.92,X+.3+t*.19,n-3.2);Q.addBox(.04,.04,3.6,Sv,e+.08,X+.72,n)}

function sy({xw:e,xe:t,zf:n}){let r=t-2.35,i=n-5.8;Z.addCylinder(.9,.6,bv,r,X+.06,i,16),Q.addCylinder(.95,.04,Sv,r,X+.66,i,16),Q.addSphere(.55,Sv,r,X+1.6,i,1,1,1,1),Q.addCylinder(1,.03,xv,r,X+.07,i,22),Z.addBox(.9,.5,2.4,V.fabric.indigo,t-.5,X+.06,i),Z.addBox(.3,.8,2.4,V.fabric.indigo,t-.2,X+.06,i),Z.addCylinder(.5,.4,V.flora.violet,e+2.05,X+.06,n-4.1,10),Z.addCylinder(.5,.4,V.neon.cyan,e+2.05,X+.06,n-9.5,10),Z.addBox(.9,1.8,.8,V.dark.slate,e+2.05,X+.06,n-1),Q.addBox(.7,.5,.04,xv,e+2.05,X+1.2,n-.6)}

function cy({xw:e,zb:t}){let n=e+3.15,r=t+4.5;Z.addCylinder(1.95,.3,1382175,n,X+.06,r,28),Z.addCylinder(1.7,.3,15789814,n,X+.36,r,28),Q.addCylinder(2,.03,xv,n,X+.07,r,32),Z.addCylinder(.55,.18,V.flora.violet,n-.6,X+.66,r-.8,10,.45),Z.addCylinder(.55,.18,V.neon.cyan,n+.2,X+.66,r-.9,10,.45),Z.addCylinder(1,.06,V.dark.slate,n,X+.66,r+.5,20,.9);for(let e=-Math.PI/2-1.1;e<=-Math.PI/2+1.11;e+=.275){let t=n+2.25*Math.cos(e),i=r+2.25*Math.sin(e),a=Math.atan2(-Math.cos(e),-Math.sin(e));Z.addBox(.48,1.7,.12,bv,t,X+.06,i,[0,a,0]),Q.addBox(.04,1.5,.04,xv,t,X+.16,i+(i<r?.07:-.07))}for(let e=0;e<16;e++){let t=e/16*Math.PI*2,i=n+2.15*Math.cos(t),a=r+2.15*Math.sin(t),o=Math.atan2(-Math.cos(t),-Math.sin(t));Q.addBox(.5,.05,.1,Sv,i,X+3,a,[0,o,0])}hv.addCylinder(2.1,2.9,15657727,n,X+.08,r,28,.35),Z.addCylinder(.04,.5,K.steelD,n,X+3,r,6),Q.addSphere(.14,V.light.warmGlow,n,X+3.1,r,1,1,1,1)}

function ly({xw:e,xe:t,cx:n,zb:r,zf:i}){Z.addBox(3.6,1.5,.3,666170,e+1.8,X+.5,r+.2),Q.addBox(3.4,1.3,.05,1732560,e+1.8,X+.6,r+.4),[[e+.75,.9,16752970],[e+1.85,1.2,V.neon.magenta],[e+2.85,.8,V.neon.yellow],[e+1.35,1.5,V.neon.mint]].forEach(function(e){Q.addSphere(.12,e[2],e[0],X+e[1],r+.45,1.6,1,.6)}),Z.addBox(.1,2.6,5.4,V.dark.void,e-.05,X+.3,r+3.8);for(let t=0;t<18;t++){let n=.5+t*37%17/17*1.9;Q.addBox(.08,n,.26,[Sv,xv,V.neon.yellow,V.neon.violet][t%4],e+.08,X+.4,r+1.4+t*.3)}for(let e=0;e<3;e++){Z.addBox(.3,.05,1.6,K.woodD,t-.2,X+1+e*.5,r+4);for(let n=0;n<4;n++)Z.addSphere(.1,[V.neon.magenta,V.neon.cyan,V.neon.yellow,V.flora.lime][(e+n)%4],t-.2,X+1.15+e*.5,r+3.4+n*.4,1,1.4,1)}Z.addBox(.9,.8,.5,V.dark.slate,t-.4,X+.06,r+6.9),Z.addBox(.5,.1,.4,K.black,t-.4,X+.86,r+6.9),Z.addCylinder(.2,.04,V.dark.deviceBlack,t-.4,X+.96,r+6.9,16),Z.addBox(.4,1.4,.3,V.dark.deviceBlack,t-.2,X+.06,r+7.8),Z.addBox(.4,1.4,.3,V.dark.deviceBlack,t-.2,X+.06,r+6),ty(e+.45,r+1.9,1.2),ty(t-.4,r+2.5,1);let a=t-e-.3;Q.addBox(a,.05,.05,xv,n,X+3.4,i-6.2),Q.addBox(a,.05,.05,Sv,n,X+3.4,r+5.4)}

function uy(e){let t=ry(e);iy(t),ay(t),oy(t),sy(t),cy(t),ly(t)}

function dy({xw:e,xe:t,zb:n}){let r=t-1.85,i=n+6.8;Xv(r,i,V.flora.grass),Z.addBox(3.2,1.6,.16,V.wood.darkWalnut,r,X+.06,i-1.4),Q.addBox(2.8,.05,.05,V.neon.amber,r,X+1.55,i-1.28),Z.addBox(.9,1,.4,K.woodD,e+.35,X+.06,i-1.7),Q.addCylinder(.06,.05,V.light.warmGlow,e+.35,X+1.1,i-1.7,6)}

function fy({xw:e,xe:t,zf:n}){let r=n-5;Z.addBox(1.6,.9,.5,K.woodD,t-.3,X+.06,r),Z.addBox(.08,1.1,1.6,V.dark.void,t-.08,X+.9,r),Q.addBox(.03,1,1.5,V.neon.blue,t-.14,X+.95,r),Z.addBox(1,.8,.5,K.woodL,e+.35,X+.06,n-1.5),Z.addBox(.04,1.4,.9,V.glass.showerGlass,e+.1,X+.9,n-1.5),Q.addBox(.02,1.4,.04,V.light.warmGlow,e+.12,X+.9,n-1)}

function py({xw:e,zf:t}){Z.addBox(.9,.5,.9,V.fabric.burgundy,e+.7,X+.06,t-5.7),Z.addBox(.2,.6,.9,V.fabric.burgundy,e+.3,X+.06,t-5.7),Z.addCylinder(.03,1.2,K.steelD,e+1.3,X+.06,t-5.8,5),Q.addSphere(.16,V.light.warmGlow,e+1.3,X+1.3,t-5.8,1,1,1,1)}

function my({xe:e,zb:t}){Z.addBox(.7,1.9,.5,V.wood.darkWalnut,e-.4,X+.06,t+1.6);for(let n=0;n<6;n++)Z.addCylinder(.07,.3,[V.fabric.wine,2771487,V.fabric.wine][n%3],e-.45+(n%2*.2-.1),X+.4+(n/2|0)*.45,t+1.65,6)}

function hy(e){let t=ry(e),n=t.xe-1.85,r=t.zb+6.8;Yv(t.xw,2.6,t.zb,t.xw+1.55,t.xw+2.45,!0),Qv(t.xe-.85,t.zb+.3,0),dy(t),fy(t),py(t),my(t),Z.addCylinder(1.2,.03,V.stone.sandstone,n,X+.06,r+2.4,20),Q.addBox(3.6,.04,.04,V.neon.amber,t.xe-2.05,X+3.3,t.zb+8.4)}

function gy(e){let{xw:t,xe:n,zb:r,zf:i}=ry(e);Yv(t,2.4,r,t+.75,t+1.65,!0),Xv(t+2.15,r+8.4,V.flora.salmon),Qv(n-.3,i-4.8,-Math.PI/2),$v(t+.45,i-2.4,1.3,0),Z.addBox(.5,.4,.05,K.black,t+.45,X+.85,i-2.7),ey(t+.45,i-1.8,V.flora.purple),ty(n-.35,i-1.2,1),Z.addCylinder(.9,.03,V.flora.purple,t+.75,X+.06,i-4.7,18)}

function _y(e){let{xw:t,zb:n,zf:r}=ry(e);Yv(t,2.9,n,t+.95,t+1.85,!1),Zv(t+1.95,n+8.4,V.flora.violet),Qv(t+.3,r-4.7,Math.PI/2),Z.addBox(1.2,.06,.6,K.woodL,t+1.55,X+.76,r-1.6),Z.addBox(.5,.4,.05,K.black,t+1.55,X+.85,r-1.9),ey(t+1.55,r-1.1,16743112),Q.addBox(2.6,.05,.05,16767370,t+1.45,X+3.2,n+2.4),Z.addCone(.7,1.5,15255968,t+.75,X+.06,r-5.8,6),Q.addSphere(.1,V.light.warmGlow,t+.75,X+.6,r-5.8,1,1,1,1);for(let e=0;e<10;e++)Q.addBox(.06,.06,.06,[V.neon.yellow,V.light.white,V.glass.iceBlue][e%3],t+.15+e*7%11*.25,X+3.45,r-1.7-e*5%9*1.2)}

function vy(e){let{xw:t,zb:n,zf:r}=ry(e);Yv(t,2.7,n,t+.95,t+1.85,!1),Zv(t+1.85,n+8.4,V.flora.cornflower),Qv(t+.3,r-4.7,Math.PI/2),$v(t+1.35,r-1.8,1.2,0),ey(t+1.35,r-1.2,V.glass.windowDeep)}

function yy(e){let{x1:t,z1:n}=e;for(let e=0;e<4;e++)for(let r=0;r<2;r++){let i=e*2+r,a=t+(r===0?1.4:4.4),o=n+4+e*3;Z.addBox(2.2,1,1.4,K.steel,a,X,o),Z.addBox(2,.1,1.2,2912120,a,X+1,o),mv.addBox(1.8,.05,1,3530928,a,X+1.1,o),dv.addBox(1.4,.06,.04,[Sv,Cv][i%2],a,X+.6,o+.72)}for(let e=0;e<5;e++){let r=t+.85+e*1.1;Z.addBox(.95,2.3,.9,V.dark.graphite,r,X,n+.5);for(let t=0;t<10;t++)for(let i=0;i<3;i++)[dv,fv,pv][(e+t+i)%3].addBox(.12,.07,.04,[Sv,Cv,V.flora.violet,V.neon.amber][(e*3+t+i)%4],r-.28+i*.28,X+.25+t*.2,n+.98)}}

function by(e){let{x1:t,x2:n,z1:r,z2:i}=e,a=t+.5,o=n-.5,s=r+8.2;[a,o].forEach(function(e){Z.addBox(.9,.95,12,K.white,e,X,s),Z.addBox(1,.07,12.1,V.metal.blueSteel,e,X+.95,s)}),[1.9,4.9,7.9,10.9].forEach(function(e,t){let n=r+e;Z.addCylinder(.2,1,K.white,a,X+1.02,n,10),Z.addSphere(.35,V.glass.showerGlass,a,X+1.7,n,1,1,1,1),Z.addBox(.6,.5,.6,[K.steelD,K.white][t%2],o,X+1.02,n),mv.addBox(.3,.3,.04,Sv,o-.3,X+1.3,n)}),Z.addBox(1.2,1.9,1,K.steel,t+1.9,X,i-1.4)}

function xy(e){let{x1:t,z1:n}=e;Z.addBox(1.4,.9,3,1645602,t+1.6,X,n+2.8),Z.addBox(.7,.5,.9,K.white,t+1.4,X+.9,n+2.2),mv.addBox(.6,.04,.8,V.neon.violet,t+1.4,X+.9,n+2.2),Z.addBox(.2,1.2,.2,K.steelD,t+1.4,X+1.4,n+2.2),Z.addCylinder(.5,3,V.light.tileGrey,t+2.4,X,n+7.8,12),Z.addBox(1.1,1.1,1.1,K.white,t+1.6,X,n+13),pv.addBox(.2,.06,6,V.neon.violet,t+1.5,X+3.2,n+8.4)}

function Sy(e){let{x1:t,z1:n}=e;[1.8,4.2,6.6,9].forEach(function(e){let r=n+e;Z.addGeometry(cylGeo(1,16),K.steel,t+2.2,X+1,r,[.7,3,.7],[0,0,Math.PI/2]),Z.addGeometry(cylGeo(1,16),K.orange,t+.7,X+1,r,[.55,.14,.55],[0,0,Math.PI/2]),Z.addBox(.2,1,.2,K.steelD,t+1.4,X,r),Z.addBox(.2,1,.2,K.steelD,t+3,X,r),pv.addBox(.12,.9,.9,16742954,t+.6,X+.55,r)}),[1.2,2.4,3.6].forEach(function(e){Z.addCylinder(.5,2.4,K.blue,t+e,X,n+11.8,12),Z.addCylinder(.52,.2,K.steel,t+e,X+2.4,n+11.8,12)});for(let e=0;e<4;e++)Z.addCylinder(.24,.9,K.red,t+1+e*.7,X,n+14.2,8),Z.addCylinder(.18,.2,K.white,t+1+e*.7,X+.9,n+14.2,8)}

function Cy({x1:e,x2:t,z1:n}){let r=e+7,i=n+.5;Z.addBox(8,.9,.7,V.light.linen,r,X+.06,i),Z.addBox(8.1,.06,.8,V.light.cream,r,X+.96,i),Z.addBox(.8,.12,.5,K.steel,e+5,X+1,i),Z.addCylinder(.035,.3,K.steel,e+5,X+1.12,n+.7,5),Z.addBox(.9,.1,.6,K.black,e+8,X+1.02,i),Z.addBox(.9,1.9,.8,K.white,t-1.3,X+.06,i),Z.addBox(2,.1,.8,K.steelD,e+8,X+2.5,n+.3),Z.addBox(3.2,.95,1.1,V.light.linen,e+6.8,X+.06,n+3.8),Z.addBox(3.3,.06,1.2,MARBLE,e+6.8,X+1.01,n+3.8);for(let t=0;t<4;t++)Z.addCylinder(.22,.6,K.woodD,e+5.6+t*.8,X+.06,n+5,8)}

function wy({x1:e,z1:t}){let n=e+6.8,r=t+8.6;Z.addBox(3.4,.08,1.3,K.woodD,n,X+.76,r),[[-1.5,-.5],[1.5,-.5],[-1.5,.5],[1.5,.5]].forEach(function(e){Z.addBox(.12,.7,.12,K.woodD,n+e[0],X+.06,r+e[1])});for(let t=0;t<4;t++)Z.addBox(.42,.5,.42,K.woodL,e+5.5+t*.8,X+.06,r-1.4),Z.addBox(.42,.5,.42,K.woodL,e+5.5+t*.8,X+.06,r+1.4);Z.addBox(.42,.5,.42,K.woodL,n-3.1,X+.06,r),Z.addBox(.42,.5,.42,K.woodL,n+3.1,X+.06,r)}

function Ty({x1:e,x2:t,z1:n,z2:r}){Z.addBox(1,.5,3.8,V.fabric.royalBlue,e+1.8,X+.06,n+11.3),Z.addBox(.3,.8,3.8,V.fabric.royalBlue,e+1,X+.06,n+11.3),Z.addBox(3.2,.5,1,V.fabric.royalBlue,e+3.6,X+.06,n+13.3),Z.addBox(1,.4,1,K.woodD,e+3.2,X+.06,n+11),Z.addCylinder(1.6,.03,V.fabric.rust,e+3,X+.06,n+10.2,22),Z.addBox(.1,1.5,3.2,V.dark.void,e+.25,X+1,n+5.7),Q.addBox(.02,1.4,3.1,V.neon.blue,e+.35,X+1.05,n+5.7),Z.addBox(.5,.4,2.6,K.woodD,e+.5,X+.06,n+5.7),Z.addBox(2.2,1.1,.5,V.dark.slate,t-1.8,X+.06,r-1.6),Q.addBox(1.8,.04,.04,V.neon.amber,t-1.8,X+.9,r-1.3),[-2.6,-1.8,-1].forEach(function(e){Z.addCylinder(.2,.5,K.woodD,t+e,X+.06,r-2.4,8)})}

function Ey(e){Cy(e),wy(e),Ty(e),ty(e.x1+.6,e.z1+.6,1.3),ty(e.x2-.5,e.z1+8.2,1.3),Q.addBox(12,.05,.05,V.light.warmGlow,e.x1+6.8,X+3.3,e.z1+7.2)}

function Dy(e,t,n,r){let i=r%5;i===0||i===3?Z.addCylinder(.12,.3,[V.flora.coral,V.flora.marigold,V.flora.sage,V.light.wheat,V.flora.purple,V.clay.copperBrown][r%6],e,t,n,6):i===1?Z.addCylinder(.09,.2,K.steel,e,t,n,6):i===2?Z.addBox(.34,.24,.3,V.clay.sandGold,e,t,n):Z.addBox(.3,.3,.3,[K.woodL,V.clay.mustard,V.clay.terracotta][r%3],e,t,n)}

function Oy(e,t,n){let r=t-e,i=Math.floor(r/.5),a=Math.round(r/1.5);for(let a=0;a<3;a++){Z.addBox(.5,.06,r,K.woodL,n,X+.6+a*.7,(e+t)/2);for(let t=0;t<i;t++)Dy(n,X+.66+a*.7,e+.25+t*.5,t+a*3)}for(let t=0;t<=a;t++)Z.addBox(.54,2.3,.08,K.woodD,n,X+.06,e+t*r/a)}

function ky(e){let{x1:t,x2:n,z1:r,z2:i}=e;Oy(r+.8,i-.8,t+.4),Oy(r+.8,i-.8,n-.4);for(let e=0;e<4;e++)Z.addCylinder(.4,.9,K.wood,t+1.3+e%2*1,X+.06,r+6.2+(e/2|0)*1,10,.37);Z.addBox(1.4,.85,.7,K.white,t+1.8,X+.06,i-2)}

function Ay({x1:e,z1:t}){[3.2,5.4].forEach(function(n,r){let i=t+n;for(let t=0;t<3;t++){let n=e+1.4+t*1.5;Z.addBox(.9,.5,.9,V.fabric.burgundy,n,X+.06+r*.3,i),Z.addBox(.9,.7,.2,V.fabric.burgundy,n,X+.4+r*.3,i+.45)}})}

function jy({x1:e,x2:t,z1:n,z2:r}){let i=e+2.8,a=n+10.8;Z.addBox(2.4,.8,1.3,1727034,i,X+.06,a),Z.addBox(2.5,.1,1.4,K.woodD,i,X+.8,a),Z.addCylinder(.1,.1,V.light.white,e+2.4,X+.92,a,8),Z.addCylinder(.1,.1,V.flora.tomatoRed,e+3.1,X+.92,a,8),Z.addBox(.08,.08,1.5,K.woodD,t-.8,X+1.4,a),Q.addBox(2.2,.04,.04,xv,i,X+2.4,a);for(let t=0;t<2;t++)Z.addBox(.9,1.8,.8,V.dark.slate,e+4.4+t*1.1,X+.06,r-1),Q.addBox(.7,.5,.04,[xv,Sv][t],e+4.4+t*1.1,X+1.2,r-1.38)}

function My(e){let{x1:t,z1:n}=e;Z.addBox(5.2,2.6,.2,V.dark.void,t+3.3,X+.6,n+.3),Q.addBox(4.9,2.3,.04,V.neon.blue,t+3.3,X+.75,n+.42),Ay(e),jy(e),Q.addBox(6.2,.05,.05,Sv,t+3.3,X+3.3,n+7.2)}

function Ny(e){let{x1:t,x2:n,z1:r,z2:i}=e,a=r+7;[1.8,4,6.2].forEach(function(e){let n=t+e;for(let e=0;e<4;e++){Z.addBox(1,.08,12.4,K.steelD,n,X+.5+e*.7,a);for(let t=0;t<19;t++)Z.addSphere(.26,[V.flora.cropGreenA,V.flora.cropGreenC,V.flora.lime][(t+e)%3],n+(t%2?.2:-.2),X+.78+e*.7,r+1.2+t*.62,1,.8,1);Q.addBox(.9,.03,12,13913343,n,X+.38+e*.7,a)}Z.addBox(.1,3,12.4,K.steelD,n-.55,X,a),Z.addBox(.1,3,12.4,K.steelD,n+.55,X,a)}),Z.addCylinder(.5,1.4,K.blue,t+.6,X,i-1.2,10),Z.addCylinder(.5,1.4,K.blue,n-.8,X,i-1.2,10)}

function Py({x2:e,z1:t}){let n=e-.6,r=t+7;Z.addBox(.8,.95,10,K.woodL,n,X,r),Z.addBox(.9,.06,10.1,V.light.cream,n,X+.95,r),[2.2,4.2,6.2].forEach(function(r){Z.addBox(.5,.5,.5,K.white,n,X+1.01,t+r),mv.addBox(.3,.3,.04,Sv,e-.86,X+1.3,t+r)})}

function Fy({x1:e,z1:t}){let n=e+1.8;Z.addBox(1.6,1.5,1.4,K.steelD,n,X,t+1.6),mv.addBox(1,.5,.05,V.neon.amber,n,X+.8,t+2.3),Z.addBox(2.2,.8,.8,K.steel,n,X,t+5.8),Z.addCylinder(.3,.5,K.black,e+1,X+.8,t+5.8,8),Z.addBox(1,.9,.9,K.red,e+1.2,X,t+9.8)}

function Iy({x1:e,x2:t,z1:n,z2:r}){Z.addBox(1.2,.12,2.4,K.steelD,e+3.8,X,r-2.6);for(let t=0;t<4;t++)Z.addBox(.2,.2,.9,K.woodL,e+3.8,X+.12+t*.2,r-2.6);Z.addBox(.2,.2,1.6,K.yellow,e+2.2,X+.06,r-2),Z.addBox(.9,.05,1.6,K.steelD,e+2.2,X+.26,r-2);for(let e=0;e<9;e++)Z.addBox(.1,.3,.5+e%3*.12,[K.red,K.steel,K.yellow][e%3],t-.1,X+1.3+e%3*.4,n+2.2+e*1)}

function Ly(e){Py(e),Fy(e),Iy(e)}

var Ry=[[`Suíte cyberpunk do Mestre`,uy],[`Suíte dos pais`,hy],[`Quarto da irmã`,gy],[`Quarto da sobrinha`,_y],[`Quarto do convidado`,vy],[`Datacenter`,yy],[`Laboratórios`,by],[`Sala limpa`,xy],[`Suporte de vida e baterias`,Sy],[`Estar, jantar e cozinha`,Ey],[`Despensa 90 dias`,ky],[`Cinema e jogos`,My],[`Hidroponia`,Ny],[`Oficina maker`,Ly]];

function buildBunker(){Ry.forEach(([e,t])=>t(roomRect(e))),uv.build(ctx.under),Z.build(ctx.under),mv.build(ctx.under,{unlit:!0,outline:!1}),Q.build(ctx.under,{unlit:!0,outline:!1});let e=toonMat.clone();e.transparent=!0,e.opacity=.3,e.depthWrite=!1,e.side=2,hv.build(ctx.under,{mat:e,outline:!1}),gv.build(ctx.surface),[dv,fv,pv].forEach(function(e){ctx.bunkerLeds.push(e.build(ctx.under,{unlit:!0,outline:!1}))})}

  buildBunker(),(function(){let e=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({color:2760728,transparent:!0,opacity:.12,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.scale.set(108,158,1),e.position.set(3,-10.12,3),ctx.dio.add(e)})();

  ctx.bunkerShell = bunkerShell;
  ctx.bunkerMat = bunkerMat;
}
