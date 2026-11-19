// ============================================================================
// FLORA: árvores, bambuzal, silvicultura, pomar, tufos, flores, rochas e apiário
// ============================================================================
import { rand, randRange } from "../engine/threeSetup.js";
import { K, V } from "../data/worldData.js";
import { ctx } from "../engine/context.js";

export function initFlora() {
  function Eg(e,t,n,r){let i=ctx.CANOPY_PALETTES[rand()*3|0],a=randRange(3.2,4.6)*r,o=randRange(2.4,3.4)*r;e.addCylinder(.34*r,a,[V.wood.walnut,7030055,V.wood.oak][rand()*3|0],t,0,n,6,.24*r),e.addSphere(o,i[0],t,a+o*.55,n,1,.9,1),e.addSphere(o*.78,i[1],t+randRange(-.9,.9)*r,a+o*1.1,n+randRange(-.9,.9)*r,1,.9,1),e.addSphere(o*.55,i[2],t+randRange(-.8,.8)*r,a+o*1.55,n+randRange(-.8,.8)*r,1,.9,1)}

function Dg(e,t,n){let r=randRange(2,2.6),i=randRange(1.7,2.2),a=[V.flora.pumpkin,15909424,V.flora.tomatoRed,16752186][rand()*4|0];e.addCylinder(.26,r,7030055,t,0,n,6,.2),e.addSphere(i,3840576,t,r+i*.5,n,1,.85,1),e.addSphere(i*.62,5420370,t+.5,r+i*.95,n-.4,1,.85,1);for(let o=0;o<5;o++)e.addSphere(1,a,t+randRange(-1.5,1.5),r+i*randRange(.2,.8),n+randRange(-1.5,1.5),.2,.2,.2)}

function Og(e,t,n){let r=randRange(11,15),i=randRange(1.7,2.5),a=[5085811,6269566,4164710][rand()*3|0];e.addCylinder(.34,r,[13221795,14208950][rand()*2|0],t,0,n,5,.2),e.addSphere(i,a,t,r,n,1,1.9,1),e.addSphere(i*.7,7191436,t+randRange(-.8,.8),r+i*1.3,n+randRange(-.8,.8),1,1.6,1)}

function kg(e,t,n){let r=randRange(7,10);e.addCylinder(.3,r*.4,7030055,t,0,n,5);for(let i=0;i<4;i++)e.addCone(2.3-i*.5,3.2,[2783807,3378247,4038224][i%3],t,r*.28+i*1.9,n,6)}

for(var Ag=new ctx.worldBatch.constructor,jg=0,Mg,Ng=18,Pg,Fg;Ng<=42.5;Ng+=2.5)for(Pg=-73;Pg<=-47;Pg+=2.5){let e=Ng+randRange(-.8,.8),t=Pg+randRange(-.8,.8);e>13&&e<18.2&&t>-62&&t<-50||rand()<.83&&(rand()<.12?kg(Ag,e,t):Og(Ag,e,t),jg++)}

for(Ng=-43;Ng<=-17;Ng+=1.7)for(Pg=-71;Pg<=-47;Pg+=1.7){if(rand()<.12)continue;let e=Ng+randRange(-.5,.5),t=Pg+randRange(-.5,.5),n=randRange(9,14),r=[9159498,8108094,10276694][rand()*3|0];Ag.addCylinder(.2,n,r,e,0,t,5,.12);for(let r=2;r<n-.4;r+=2.4)Ag.addCylinder(.25,.13,6130219,e,r,t,5);Ag.addSphere(1,6270527,e,n+.2,t,1,1.7,1),rand()<.5&&Ag.addSphere(.7,8111189,e+randRange(-.5,.5),n-2.2,t+randRange(-.5,.5),1,1.5,1)}

for(Pg=-70;Pg<=72;Pg+=3.4)for(let e=0;e<2;e++){let t=-47.2+e*3+randRange(-.6,.6),n=Pg+randRange(-1,1);(ctx.free(t,n,0)||t<-45&&ctx.inGleba(t,n))&&(n>54&&t>-48&&t<-17||n>21.5&&n<34||Math.hypot(t+36.5,n-48.5)<9||(rand()<.5?Eg(Ag,t,n,randRange(.9,1.3)):kg(Ag,t,n),jg++))}

for(Fg=0;Fg<420&&jg<560;Fg++){let e=randRange(-46,42),t=randRange(-72,72);ctx.free(e,t,2.5)&&(t<-46&&e>14||t<-46&&e<-16||(rand()<.38?Dg(Ag,e,t):Eg(Ag,e,t,randRange(.85,1.25)),jg++))}

for([[-11,64],[-7,67],[-3,64],[1,67],[-10,71],[-5,72],[0,71]].forEach(function(e){Dg(Ag,e[0],e[1])}),Pg=-72;Pg<=72;Pg+=5.5)Pg>-52&&Pg<-30||Pg>-24&&Pg<-8||Eg(Ag,49.2,Pg+randRange(-1,1),randRange(.5,.65));

for(Mg=0;Mg<640;Mg++){let e=randRange(-48,42),t=randRange(-73,73);if(ctx.free(e,t,.5))for(let n=0;n<3;n++)Ag.addCone(randRange(.14,.2),randRange(.5,.9),[K.tuft,5812792,V.flora.fernGreen][n],e+randRange(-.3,.3),0,t+randRange(-.3,.3),3)}

for(Mg=0;Mg<240;Mg++){let e=randRange(-48,42),t=randRange(-73,73);ctx.free(e,t,.5)&&(Ag.addCylinder(.04,.5,V.flora.fernGreen,e,0,t,3),Ag.addSphere(1,[V.light.white,V.flora.sunflower,16743080,V.flora.lilac,16747066][Mg%5],e,.6,t,.17,.17,.17))}

for(Mg=0;Mg<48;Mg++){let e=randRange(-48,42),t=randRange(-73,73);ctx.free(e,t,1)&&Ag.addSphere(1,[K.rock,12039336,9407878][Mg%3],e,.3,t,randRange(.5,1.1),randRange(.4,.7),randRange(.5,1.1))}

for(let e=0;e<6;e++){let t=16.2+e%3*1.6,n=-57.5+(e/3|0)*2.6;Ag.addBox(.7,.5,.1,K.woodD,t,0,n),[0,1,2].forEach(function(r){Ag.addBox(.95,.34,.85,[V.flora.straw,V.light.butter,14922298][(r+e)%3],t,.5+r*.36,n)}),Ag.addBox(1.05,.12,.95,14672870,t,1.58,n),Ag.addBox(.5,.05,.07,K.black,t,.62,n+.45),Ag.addBox(.7,.14,.5,K.woodD,t,0,n+.2)}

for(Mg=0;Mg<14;Mg++)Ag.addCylinder(.04,.8,V.flora.fernGreen,randRange(15.4,19.6),0,randRange(-60.5,-52.5),3);

Ag.build(ctx.surface);
}
