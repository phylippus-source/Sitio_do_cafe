// ============================================================================
// PÁTIO TÉCNICO, RODA D'ÁGUA, MOINHO, ANIMAIS, PEIXES, ESPUMA E ANIMAÇÃO
// ============================================================================
import {
  THREE,
  Batch,
  cylGeo,
  GEO,
  linColor,
  coneGeo,
  randRange,
  rand,
  waterMat,
  pondMat,
} from "../engine/threeSetup.js";
import { K, V } from "../data/worldData.js";
import { ctx } from "../engine/context.js";

export let beacons = null;
export let wheelGroup = null;
export let wheelRotor = null;
export let millGroup = null;
export let millRotor = null;
export let animals = null;
export let fish = null;
export let foam = null;
export let sprays = null;
export let bunkerLeds = null;

export function initPatioAndDynamics() {
  var Y = new Batch();
  beacons = [];
  function U_(e,t,n,r,i){return[e+r*Math.cos(n)+i*Math.sin(n),t-r*Math.sin(n)+i*Math.cos(n)]}

function W_(e,t,n,r,i){e.addBox(i,r,n,K.black,t,0,0),e.addGeometry(cylGeo(1,12),K.black,t,r/2,n/2,[r/2,i,r/2],[0,0,Math.PI/2]),e.addGeometry(cylGeo(1,12),K.black,t,r/2,-n/2,[r/2,i,r/2],[0,0,Math.PI/2]);for(let a=0;a<4;a++)e.addGeometry(cylGeo(1,8),K.steelD,t,r*.42,-n/2+n*(a+.5)/4,[r*.28,i*1.04,r*.28],[0,0,Math.PI/2])}

function G_(e,t,n){e.addCone(.34,.9,K.orange,t,0,n,8),e.addCylinder(.27,.14,K.white,t,.3,n,8,.23),e.addBox(.8,.06,.8,K.black,t,0,n)}

function K_(e,t,n,r,i){e.setOrigin(t,0,n,i||0);for(let t=0;t<r;t++){e.addBox(1.2,.14,1,K.woodL,0,t*.42,0);for(let n=0;n<3;n++)e.addBox(1.2,.1,.18,K.woodD,0,t*.42+.14,-.38+n*.38);for(let n=0;n<3;n++)e.addBox(.12,.14,1,K.woodD,-.5+n*.5,t*.42+.24,0)}e.setOrigin(0,0,0,0)}

function q_(e,t,n,r,i){e.setOrigin(t,0,n,r||0);for(let t=0;t<(i||2);t++)e.addBox(1,.5,.55,K.red,0,t*.5,0),e.addBox(.55,.06,.07,K.steel,0,t*.5+.4,.3),e.addBox(1.02,.04,.57,K.redD||11020832,0,t*.5+.24,0);e.setOrigin(0,0,0,0)}

function J_(e,t,n,r){Y.addCylinder(.2,.12,K.black,e,t,n,8),beacons.push({x:e,y:t+.12,z:n,col:r})}

Y.addBox(18,.2,19,K.conc,30,0,-22.5),Y.addBox(18.2,.08,.3,K.concD,30,.2,-13.2);

for(let e=0;e<9;e++)Y.addBox(1.3,.03,.22,K.yellow,21.8+e*2,.2,-31.8);

Y.addBox(.2,.03,9,K.white,24,.2,-20),Y.addBox(.2,.03,9,K.white,36.5,.2,-20),Y.addBox(12,.03,.2,K.white,30,.2,-16),[[22,-14.5],[38,-14.5]].forEach(function(e){Y.addCylinder(.12,6,K.steelD,e[0],.2,e[1],6),Y.addBox(.8,.2,.5,K.steel,e[0],6,e[1]),Y.addBox(.6,.06,.3,16774857,e[0],5.94,e[1])}),(function(e,t,n,r){e.setOrigin(t,0,n,r),W_(e,-.95,2.5,.85,.5),W_(e,.95,2.5,.85,.5),e.addBox(1.5,.9,2.2,K.yellow,0,.55,-.1),e.addBox(1.6,.2,2.3,K.black,0,.45,-.1),e.addBox(1.2,.5,.9,K.black,0,1.45,-.8),e.addBox(1.3,.08,1.3,K.yellow,0,2.72,.1),[[-.62,-.58],[.62,-.58],[-.62,.62],[.62,.62]].forEach(function(t){e.addBox(.1,1.3,.1,K.yellow,t[0],1.45,t[1])}),e.addBox(1.1,1,1.1,V.glass.paleBlue,0,1.45,0),e.addBox(1.4,.1,.1,K.black,0,1.1,.62),e.addBeam([-.82,1,-.7],[-.82,.9,1.9],.1,K.yellow,6),e.addBeam([.82,1,-.7],[.82,.9,1.9],.1,K.yellow,6),e.addBox(1.9,.5,.7,K.black,0,.45,2.15),e.addBox(1.9,.7,.1,K.black,0,.9,2.45),e.addBox(1.9,.14,.5,K.steel,0,.3,2.4),e.addBeam([-.6,1.2,-.9],[-.5,.6,1.2],.07,K.steelD,5),e.setOrigin(0,0,0,0);let i=U_(t,n,r,.6,-.1);J_(i[0],2.8,i[1],K.orange)})(Y,30.7,-26.6,Math.PI),(function(e,t,n,r){e.setOrigin(t,0,n,r),W_(e,-1,3.2,.8,.65),W_(e,1,3.2,.8,.65),e.addBox(2.2,.4,2.4,K.black,0,.7,0),e.addBox(2.2,.18,.5,K.orange,0,.3,1.95),e.addBeam([-1,.6,.8],[-1,.5,1.9],.08,K.steelD,5),e.addBeam([1,.6,.8],[1,.5,1.9],.08,K.steelD,5),e.setOrigin(t,0,n,-1.15),e.addGeometry(cylGeo(1,16),K.black,0,1.15,0,[1.3,.12,1.3]),e.addBox(2,1,2.3,K.orange,0,1.2,-.3),e.addBox(1.8,.8,.9,K.black,0,2.2,-1.1),e.addBox(1,1.5,1,V.glass.paleBlue,-.5,2.2,.4),e.addBox(1.2,.1,1.2,K.orange,-.5,3.7,.4),e.addBox(.1,1.5,.1,K.orange,-.95,2.2,.85),e.addBox(1.2,.7,.5,K.black,0,1.4,-1.5),e.addBeam([.5,1.7,.5],[.5,3.5,2.5],.18,K.orange,6),e.addBeam([.5,3.5,2.5],[.5,2,4],.14,K.orange,6),e.addBeam([.5,1.9,.1],[.5,3.2,1.6],.07,K.steel,5),e.addGeometry(GEO.box,K.black,.5,1.55,4.3,[.6,.9,.6],[.6,0,0]),e.addGeometry(GEO.box,K.steel,.5,1.2,4.6,[.62,.16,.35],[.6,0,0]),e.setOrigin(0,0,0,0);let i=U_(t,n,-1.15,-.5,.4);J_(i[0],3.75,i[1],K.orange)})(Y,36.2,-23.2,-.6);

function Y_(e,t,n,r,i){e.setOrigin(t,0,n,r),e.addBox(1.9,.14,1,i,0,.36,0),e.addBox(.14,.7,1,K.black,-.95,.4,0),e.addBox(1.9,.5,.12,K.black,0,.5,-.5),[[-.7,-.5],[.7,-.5],[-.7,.5],[.7,.5]].forEach(function(t){e.addGeometry(cylGeo(1,10),K.black,t[0],.24,t[1],[.24,.16,.24],[Math.PI/2,0,0])}),e.addBox(.8,.5,.55,K.red,.3,.5,.05),e.addBox(.8,.04,.57,K.steel,.3,1,.05),e.addBox(.5,.3,.4,K.blue,-.4,.5,.1),e.addBox(.04,.9,.04,K.black,-1,.5,-.4),e.addBox(.04,.9,.04,K.black,-1,.5,.4),e.addBox(.06,.06,.9,K.black,-1,1.4,0),e.setOrigin(0,0,0,0)}

Y_(Y,25.6,-28.6,.35,K.orange),Y_(Y,27.6,-21.6,-.5,K.yellow),Y_(Y,34.2,-29.4,.1,K.orange),(function(e,t,n,r){e.setOrigin(t,0,n,r),e.addBox(1.9,1.5,3.1,K.white,0,.5,-.6),e.addBox(1.85,1,1.3,K.white,0,.5,1.6),e.addBox(1.7,.6,.1,V.glass.paleBlue,0,1.35,2.25),e.addBox(1.95,.12,4.6,K.blue,0,.7,.2),e.addBox(1.6,.5,.1,V.glass.paleBlue,0,1.4,.95),e.addBox(.1,.5,1,V.glass.paleBlue,.93,1.2,1.6),e.addBox(.1,.5,1,V.glass.paleBlue,-.93,1.2,1.6),[[-.95,1.5],[.95,1.5],[-.95,-1.2],[.95,-1.2]].forEach(function(t){e.addGeometry(cylGeo(1,12),K.black,t[0],.4,t[1],[.4,.26,.4],[0,0,Math.PI/2]),e.addGeometry(cylGeo(1,8),K.steel,t[0],.4,t[1],[.2,.28,.2],[0,0,Math.PI/2])}),e.addBox(1.5,.2,.1,K.black,0,.5,2.3),e.setOrigin(0,0,0,0)})(Y,24.6,-18.6,.18),(function(e,t,n,r){e.setOrigin(t,0,n,r),e.addGeometry(cylGeo(1,12),K.black,0,.45,.8,[.45,.16,.45],[0,0,Math.PI/2]),e.addGeometry(cylGeo(1,12),K.black,0,.45,-.8,[.45,.16,.45],[0,0,Math.PI/2]),e.addBox(.3,.5,1.2,K.red,0,.55,0),e.addBox(.34,.14,.9,K.black,0,1,-.2),e.addBox(.7,.08,.08,K.steel,0,1.35,.55),e.addBox(.16,.3,.2,K.white,0,1.1,.8),e.setOrigin(0,0,0,0)})(Y,22.6,-16,1.2),K_(Y,37.3,-30.3,3,.1),K_(Y,37.5,-28.6,2,-.2),K_(Y,22.8,-25.2,2,.4);

for(let e=0;e<3;e++)q_(Y,23+e*1.1,-30.2,.05*e,e===1?3:2);

q_(Y,37.2,-26,.3,2),[[27.8,-24],[33.8,-24.8],[29.6,-30.2],[34.6,-26.8],[27,-17],[33,-16.4],[24,-23.6],[38.6,-20.6]].forEach(function(e){G_(Y,e[0],e[1])}),[[38.2,-17.4],[38.2,-16.4],[39.1,-17]].forEach(function(e){Y.addCylinder(.45,1,[K.blue,K.red,K.blue][(e[1]*2|0)&1],e[0],.2,e[1],10),Y.addCylinder(.46,.1,K.black,e[0],.8,e[1],10)}),Y.addBox(1.4,2.2,.16,K.white,39.2,.2,-23.3),Y.addBox(1.3,.5,.18,K.yellow,39.2,1.7,-23.3),Y.addBox(.2,.2,.2,K.black,39.2,1,-23.3),Y.addBox(3.8,2.6,3.6,K.stone,41,0,-17),Y.addBox(4.3,.3,4.1,K.roofD,41,2.6,-17),Y.addCylinder(.8,1.3,K.copper,39,0,-17,10),Y.addCylinder(.2,1.5,K.steelD,39,1.3,-17,8),Y.addBeam([43.6,3,-22.5],[41.9,1.6,-18.8],.3,K.steelD,8),Y.addBox(1,.8,1,K.steel,43.2,2.6,-23),Y.build(ctx.surface),beacons.forEach(function(e){let t=new THREE.Mesh(new THREE.SphereGeometry(.28,8,6),new THREE.MeshBasicMaterial({color:linColor(K.orange)}));t.position.set(e.x,e.y+.22,e.z),ctx.surface.add(t),e.mesh=t;let n=new THREE.Mesh(new THREE.BoxGeometry(.9,.06,.12),new THREE.MeshBasicMaterial({color:linColor(V.light.butter)}));n.position.copy(t.position),ctx.surface.add(n),e.bar=n});

  wheelGroup=new THREE.Group;
  wheelGroup.position.set(45.5,2,-41.2),ctx.surface.add(wheelGroup);
  wheelRotor=new THREE.Group;
  wheelGroup.add(wheelRotor),(function(){let e=new Batch,t=2.6,n=V.wood.ebony;[-3/2,3/2].forEach(function(r){e.addGeometry(GEO.tor,n,0,0,r,[t,t,3]),e.addGeometry(GEO.tor,n,0,0,r,[2.1,2.1,3]);for(let n=0;n<8;n++){let i=n/8*Math.PI*2;e.addBeam([0,0,r],[Math.cos(i)*t,Math.sin(i)*t,r],.11,K.woodD,5)}}),e.addGeometry(cylGeo(1,10),K.steelD,0,0,0,[.34,4.4,.34],[Math.PI/2,0,0]),e.addGeometry(cylGeo(1,10),K.copper,0,0,0,[.52,.5,.52],[Math.PI/2,0,0]);for(let t=0;t<16;t++){let n=t/16*Math.PI*2;e.addGeometry(GEO.box,[K.wood,K.woodD][t%2],Math.cos(n)*2.5,Math.sin(n)*2.5,0,[.7,.12,3],[0,0,n])}e.build(wheelRotor),wheelGroup.rotation.y=Math.PI/2})(),(function(){let e=new Batch;[43.3,47.7].forEach(function(t){e.addBox(.5,2.8,.5,K.woodD,t,-1.4,-41.2),e.addBox(.9,.5,.9,K.stone,t,-1.4,-41.2),e.addBeam([t,-1.2,-43.2],[t,2.2,-41.4],.14,K.woodD,5),e.addBeam([t,-1.2,-39.2],[t,2.2,-41],.14,K.woodD,5),e.addBox(.5,.4,.5,K.copper,t,1.9,-41.2)}),e.addBox(1.8,.25,12,K.wood,45.5,4.9,-48.4),e.addBox(.18,.55,12,K.woodD,44.7,4.9,-48.4),e.addBox(.18,.55,12,K.woodD,46.3,4.9,-48.4),e.addBox(1.6,.06,12,K.water,45.5,5.14,-48.4),[-53,-49,-44].forEach(function(t){e.addBox(.3,5,.3,K.woodD,44.5,0,t),e.addBox(.3,5,.3,K.woodD,46.5,0,t)}),e.addBeam([42.9,2,-41.2],[44.4,2,-41.2],.28,K.steelD,8),e.build(ctx.surface)})();

  millGroup=new THREE.Group;
  millGroup.position.set(6,0,36),ctx.surface.add(millGroup);
  millRotor=new THREE.Group;
  millRotor.position.set(0,14.4,2.3),millGroup.add(millRotor),(function(){let e=new Batch;e.addBox(5.4,.5,5.4,K.concD,0,0,0),e.addCylinder(2.1,12.8,13199434,0,.5,0,10,1.2);for(let t=0;t<6;t++)e.addCylinder(2.1-t*.15,.22,K.stoneL,0,1.2+t*2.1,0,10,2-t*.15);e.addBox(1.2,2,.2,K.woodD,0,.5,2),e.addBox(.7,1.4,.1,K.wood,0,.5,2.1),e.addCylinder(1.7,1.4,K.wood,0,13.3,0,10,1.4),e.addCone(1.9,1.8,K.roofD,0,14.6,0,10),e.addBox(1.7,1.6,2.6,K.steelD,0,13.5,1.2),e.addBox(.25,.7,.25,K.black,0,15,-.2),e.addBox(1.4,.5,.1,K.black,0,13.9,2.5),e.build(millGroup);let t=new Batch;t.addGeometry(cylGeo(.55,10),K.steelD,0,0,0,[.55,1.1,.55],[Math.PI/2,0,0]),t.addGeometry(coneGeo(8),K.white,0,0,.95,[.5,.9,.5],[Math.PI/2,0,0]);for(let e=0;e<8;e++){let n=e/8*Math.PI*2;t.addGeometry(GEO.box,[16054264,14673128][e%2],Math.cos(n)*1.55,Math.sin(n)*1.55,.1,[.34,2.1,.07],[0,0,n-Math.PI/2]),t.addGeometry(GEO.box,K.steel,Math.cos(n)*.62,Math.sin(n)*.62,.1,[.14,.9,.12],[0,0,n-Math.PI/2])}t.build(millRotor)})();

  function ev(e){let t=new Batch;e===`pig`?(t.addBox(1.5,.9,.85,K.pink,0,.5,0),t.addBox(.6,.65,.7,16168902,.9,.62,0),t.addBox(.28,.28,.4,V.animal.pigPink,1.25,.7,0),t.addGeometry(GEO.ico0,V.animal.pigPink,-.78,.85,0,[.12,.12,.12]),[[-.5,-.3],[-.5,.3],[.5,-.3],[.5,.3]].forEach(function(e){t.addCylinder(.11,.5,V.animal.pigPink,e[0],0,e[1],6)}),t.addBox(.1,.22,.15,V.animal.pigPink,.95,1.18,-.25),t.addBox(.1,.22,.15,V.animal.pigPink,.95,1.18,.25),t.addBox(.07,.07,.07,K.black,1.2,.88,-.2),t.addBox(.07,.07,.07,K.black,1.2,.88,.2)):e===`hen`?(t.addBox(.45,.4,.36,K.white,0,.32,0),t.addBox(.22,.3,.24,K.white,.26,.55,0),t.addGeometry(coneGeo(3),K.yellow,.43,.62,0,[.07,.16,.07],[0,0,-Math.PI/2]),t.addGeometry(GEO.ico0,K.red,.3,.84,0,[.07,.08,.05]),t.addGeometry(coneGeo(3),K.white,-.28,.55,0,[.18,.34,.2],[0,0,Math.PI/2*1.15]),t.addCylinder(.025,.25,K.yellow,0,0,-.1,4),t.addCylinder(.025,.25,K.yellow,0,0,.1,4)):(t.addBox(1.2,.7,.5,13617856,0,.7,0),t.addBox(.4,.6,.38,12170150,.7,1.1,0),t.addBox(.25,.22,.3,V.animal.grey,.95,1.15,0),t.addGeometry(coneGeo(3),V.animal.horn,.8,1.62,-.1,[.07,.28,.07]),t.addGeometry(coneGeo(3),V.animal.horn,.8,1.62,.1,[.07,.28,.07]),t.addGeometry(GEO.ico0,V.animal.horn,.82,.85,0,[.08,.22,.08]),[[-.45,-.16],[-.45,.16],[.45,-.16],[.45,.16]].forEach(function(e){t.addCylinder(.07,.7,8090987,e[0],0,e[1],5)}),t.addGeometry(coneGeo(3),V.animal.grey,-.7,1,0,[.1,.3,.1],[0,0,Math.PI/2*1.2]));let n=new THREE.Group;return t.build(n),n}
  animals=[];
  (function(){let e={pig:ev(`pig`),hen:ev(`hen`),goat:ev(`goat`)};[[`pig`,4,1],[`hen`,10,1],[`goat`,5,1]].forEach(function(t){for(let n=0;n<t[1];n++){let n=e[t[0]].clone(!0),r={g:n,kind:t[0],cx:randRange(25,37),cz:randRange(-8,7),rx:randRange(1.2,3.8),rz:randRange(1,3),ph:randRange(0,6.28),sp:randRange(.18,.34)*(t[0]===`hen`?1.6:1)*(rand()<.5?-1:1)};t[0]===`pig`&&(r.cx=randRange(24.5,29),r.cz=randRange(-6,6),r.rx=randRange(.8,1.8),r.rz=randRange(1,2.4)),t[0]===`goat`&&(r.cx=randRange(33.5,37.5),r.cz=randRange(-4,3),r.rx=randRange(.8,1.6),r.rz=randRange(1,2.6)),t[0]===`hen`&&(r.cx=randRange(-41,-33),r.cz=randRange(36.5,38),r.rx=randRange(.8,1.8),r.rz=randRange(.6,1.5)),ctx.surface.add(n),animals.push(r)}})})();

  fish=[];
  (function(){let e=new Batch;e.addGeometry(coneGeo(3),K.orange,.15,.1,0,[.28,.9,.14],[0,0,-Math.PI/2]),e.addGeometry(coneGeo(3),16767392,-.6,.1,0,[.22,.4,.1],[0,0,Math.PI/2]);let t=new THREE.Group;e.build(t);let n=new Batch;n.addGeometry(coneGeo(3),K.white,.15,.1,0,[.28,.9,.14],[0,0,-Math.PI/2]),n.addGeometry(coneGeo(3),V.glass.iceBlue,-.6,.1,0,[.22,.4,.1],[0,0,Math.PI/2]);let r=new THREE.Group;n.build(r);for(let e=0;e<8;e++){let n=(e%2?r:t).clone(!0);n.scale.setScalar(randRange(.9,1.3)),ctx.surface.add(n),fish.push({g:n,cx:ctx.LAKE_X,cz:ctx.LAKE_Z,r:randRange(1.8,5.2),a:randRange(0,6.28),sp:randRange(.28,.62)*(e%3==0?-1:1),y:.42})}ctx.FISH_TANKS.forEach(function(e){for(let n=0;n<4;n++){let i=(n%2?r:t).clone(!0);i.scale.setScalar(randRange(.7,.95)),ctx.surface.add(i),fish.push({g:i,cx:e.x,cz:e.z,r:randRange(.7,1.7),a:randRange(0,6.28),sp:randRange(.5,.9)*(n%2?-1:1),y:.9})}})})(),ctx.waterBatch.build(ctx.surface,{mat:waterMat}),ctx.pondBatch.build(ctx.surface,{mat:pondMat}),ctx.worldBatch.build(ctx.surface);

  foam=[];
  (function(){let e=new THREE.MeshBasicMaterial({color:V.light.white});for(let t=0;t<26;t++){let n=new THREE.Mesh(new THREE.BoxGeometry(randRange(.8,2),.06,.12),e),r=t<14?[-74,-62]:[-39,74];t>=14&&(r=[-36,74]),n.position.set(randRange(43.7,47.3),-.5,randRange(r[0],r[1])),ctx.surface.add(n),foam.push({m:n,v:randRange(1.8,3.4),z0:r[0],z1:r[1]})}})();

  sprays = [];
  var av = new THREE.BoxGeometry(0.22, 0.22, 0.22);
  var ov = [
    new THREE.MeshBasicMaterial({ color: V.light.white }),
    new THREE.MeshBasicMaterial({ color: linColor(9428213) }),
    new THREE.MeshBasicMaterial({ color: linColor(12969977) }),
  ];
  for(let e=0;e<34;e++){let t=new THREE.Mesh(av,ov[e%3]);t.visible=!1,ctx.surface.add(t),sprays.push({m:t,life:0,vx:0,vy:0,vz:0})}

  ctx.beacons = beacons;
  ctx.wheelGroup = wheelGroup;
  ctx.wheelRotor = wheelRotor;
  ctx.millGroup = millGroup;
  ctx.millRotor = millRotor;
  ctx.animals = animals;
  ctx.fish = fish;
  ctx.foam = foam;
  ctx.sprays = sprays;
}

export function initAnimation() {
  bunkerLeds = [];
  var Iv = 0;
  var Lv = { pig: 1.7, hen: 0.6, goat: 1.3 };
  function Rv(e,t,n){for(let r=0;r<foam.length;r++){let i=foam[r];i.m.position.z+=i.v*e*(.5+n.flow),i.m.position.z>i.z1&&(i.m.position.z=i.z0),i.m.scale.x=.8+Math.sin(t*3+r)*.25}}

function zv(){for(let e=0;e<sprays.length;e++)if(sprays[e].life<=0){let t=sprays[e];t.life=randRange(.5,.95),t.m.visible=!0,t.m.position.set(45.5+randRange(-1.5,1.5),-.4,-41.2+randRange(-1.5,-.1)+0),t.vx=randRange(-.8,.8),t.vy=randRange(3.5,6.5),t.vz=randRange(-3,1.5);break}}

function Bv(e){for(let t=0;t<sprays.length;t++){let n=sprays[t];if(n.life<=0)continue;n.life-=e,n.vy-=14*e,n.m.position.x+=n.vx*e,n.m.position.y+=n.vy*e,n.m.position.z+=n.vz*e,n.m.rotation.x+=e*5,n.m.rotation.y+=e*4;let r=Math.max(.05,n.life*1.4);n.m.scale.setScalar(Math.min(1,r)),(n.life<=0||n.m.position.y<-.55)&&(n.life=0,n.m.visible=!1)}}

function Vv(e,t){for(Iv+=e*(8+t.flow*18);Iv>1;)--Iv,zv();Bv(e)}

function Hv(e,t){fish.forEach(function(n){n.a+=n.sp*e,n.g.position.set(n.cx+Math.cos(n.a)*n.r,n.y+Math.sin(t*2+n.a*3)*.02,n.cz+Math.sin(n.a)*n.r),n.g.rotation.y=-n.a+(n.sp>0?-Math.PI/2:Math.PI/2)})}

function Uv(e,t){animals.forEach(function(n){n.ph+=n.sp*e;let r=n.cx+Math.cos(n.ph)*n.rx,i=n.cz+Math.sin(n.ph*1.3)*n.rz,a=-Math.sin(n.ph)*n.rx*(n.sp>0?1:-1),o=Math.cos(n.ph*1.3)*n.rz*1.3*(n.sp>0?1:-1);n.g.position.set(r,.2+Math.abs(Math.sin(t*(n.kind===`hen`?9:4)+n.ph*7))*(n.kind===`hen`?.08:.04),i),n.g.rotation.y=Math.atan2(-o,a)*(n.sp,1)})}

function Wv(){for(let e=0;e<animals.length;e++)for(let t=e+1;t<animals.length;t++){let n=animals[e],r=animals[t];if(n.kind!==r.kind)continue;let i=r.g.position.x-n.g.position.x,a=r.g.position.z-n.g.position.z,o=Math.sqrt(i*i+a*a)||.001,s=Lv[n.kind];if(o<s){let e=(s-o)/2/o;n.g.position.x-=i*e,n.g.position.z-=a*e,r.g.position.x+=i*e,r.g.position.z+=a*e}}}

function Gv(e){beacons.forEach(function(t,n){let r=Math.floor(e*2.2+n*.4)%2==0;t.mesh.material.color.copy(linColor(r?V.flora.sunflower:K.orange)),t.mesh.scale.setScalar(r?1.15:.9),t.bar.rotation.y=e*7+n}),bunkerLeds.forEach(function(t,n){t.visible=Math.floor(e*(1.6+n*.35)+n)%4!=0})}

ctx.surface.userData.tick=function(e,t,n){let r=(.5+n.flow*1.6)*.8;wheelRotor.rotation.z-=e*r,millRotor.rotation.z+=e*(.5+n.wind*2),Rv(e,t,n),Vv(e,n),Hv(e,t),Uv(e,t),Wv(),Gv(t)};

  ctx.bunkerLeds = bunkerLeds;
}
