// ============================================================================
// THREE.JS r128 SETUP: materiais toon/unlit/hull/água, luzes, Batch, smoothN, slab
// ============================================================================
import * as THREE from "three";
import { K, V } from "../data/worldData.js";
import { ctx } from "./context.js";

export { THREE };

export function linColor(e){return new THREE.Color(e).convertSRGBToLinear()}

export const toonGrad=new THREE.DataTexture(new Uint8Array([0,0,0,255,128,128,128,255,255,255,255,255]),3,1,THREE.RGBAFormat);
toonGrad.minFilter=toonGrad.magFilter=THREE.NearestFilter,toonGrad.generateMipmaps=!1,toonGrad.needsUpdate=!0;

export const toonMat=new THREE.MeshToonMaterial({vertexColors:!0,gradientMap:toonGrad});
export const unlitMat=new THREE.MeshBasicMaterial({vertexColors:!0});
export const hullMat=new THREE.ShaderMaterial({uniforms:{uRes:{value:new THREE.Vector2(1,1)},uThick:{value:1.5}},vertexShader:`uniform vec2 uRes; uniform float uThick; attribute vec3 snormal;
void main(){
  vec4 clip = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  vec3 nv = normalize(normalMatrix * snormal);
  vec4 nc = projectionMatrix * vec4(nv, 0.0);
  vec2 dp = nc.xy * uRes; float l = length(dp); dp = l > 1e-5 ? dp / l : vec2(0.0);
  clip.xy += dp * (2.0 * uThick / uRes) * clip.w;
  clip.z += 0.0004 * clip.w;
  gl_Position = clip;
}`,fragmentShader:`void main(){ gl_FragColor = vec4(0.035, 0.027, 0.02, 1.0); }`,side:1});
export const waterMat=new THREE.MeshToonMaterial({color:linColor(K.water),gradientMap:toonGrad});
export const pondMat=new THREE.MeshToonMaterial({color:linColor(K.pond),gradientMap:toonGrad});

export const reducedMotion=window.matchMedia&&matchMedia(`(prefers-reduced-motion: reduce)`).matches;
export const $q=function(e,t){return(t||document).querySelector(e)};
export const yh=640;
export const bh=1.5;
export const xh=2;

export let glHost = null;
export let stageEl = null;
export let renderer = null;
export let scene = null;
export let camera = null;
export let dio = null;
export let surface = null;
export let under = null;
export let dirLight = null;
export let sunDir = null;

function initRenderer(e){let t;try{t=new THREE.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:`high-performance`})}catch{return null}let n=Math.min(window.innerWidth,window.innerHeight)<yh;return t.setPixelRatio(Math.min(window.devicePixelRatio||1,n?bh:xh)),t.setClearColor(0,0),t.outputEncoding=THREE.sRGBEncoding,e.appendChild(t.domElement),t}

export var COL=[];
export function col(e,t,n,r,i){COL.push([Math.min(e,n),Math.min(t,r),Math.max(e,n),Math.max(t,r),i||`s`])}

var rngSeed=11;
export function rand(){rngSeed|=0,rngSeed=rngSeed+1831565813|0;let e=Math.imul(rngSeed^rngSeed>>>15,1|rngSeed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}
export function randRange(e,t){return e+rand()*(t-e)}

export const GEO={box:new THREE.BoxGeometry(1,1,1),ico0:new THREE.IcosahedronGeometry(1,0),ico1:new THREE.IcosahedronGeometry(1,1),tor:new THREE.TorusGeometry(1,.05,4,18),arc:new THREE.TorusGeometry(1,.035,4,16,Math.PI),half:new THREE.CylinderGeometry(1,1,1,14,1,!1,0,Math.PI)};
const geoCache={};
export function cylGeo(e,t){let n=`c`+e.toFixed(3)+`|`+t;return geoCache[n]||(geoCache[n]=new THREE.CylinderGeometry(e,1,1,t))}
export function coneGeo(e){let t=`n`+e;return geoCache[t]||(geoCache[t]=new THREE.ConeGeometry(1,1,e))}
export function prepGeo(e){if(!e.userData.ni){let t=e.index?e.toNonIndexed():e;t.computeBoundingBox(),e.userData.ni=t}return e.userData.ni}

const Bh=new THREE.Matrix4;
const Vh=new THREE.Quaternion;
const Hh=new THREE.Euler;
const Uh=new THREE.Vector3;
const Wh=new THREE.Vector3;
const Gh=new THREE.Matrix3;
const Kh=new THREE.Vector3(0,1,0);

export function smoothN(e,t){let n=e.length/3,r=new Map,i=new Float32Array(e.length),a=Array(n);for(let i=0;i<n;i++){let n=Math.round(e[3*i]*400)+1e4+20001*(Math.round(e[3*i+1]*400)+1e4)+400040001*(Math.round(e[3*i+2]*400)+1e4);a[i]=n;let o=r.get(n);o||(o=[0,0,0],r.set(n,o)),o[0]+=t[3*i],o[1]+=t[3*i+1],o[2]+=t[3*i+2]}for(let e=0;e<n;e++){let t=r.get(a[e]),n=Math.hypot(t[0],t[1],t[2])||1;i[3*e]=t[0]/n,i[3*e+1]=t[1]/n,i[3*e+2]=t[2]/n}return i}
export var Batch=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.base=new THREE.Matrix4,this.sealed=!1}setOrigin(e,t,n,r){return this.base.makeRotationY(r||0),this.base.setPosition(e||0,t||0,n||0),this}addGeometry(e,t,n,r,i,a,o,s){if(this.sealed)throw Error(`Batch já construído: não aceita mais primitivas`);let c=prepGeo(e),l=c.boundingBox,u=l.min.y,d=Math.max(1e-6,l.max.y-l.min.y);typeof a==`number`&&(a=[a,a,a]),a=a||[1,1,1],s?Vh.copy(s):(o=o||[0,0,0],Hh.set(o[0],o[1],o[2]),Vh.setFromEuler(Hh)),Number.isFinite(n+r+i+a[0]+a[1]+a[2]+Vh.x+Vh.y+Vh.z+Vh.w)||console.error(`[Batch] entrada não finita (rotação deve ser [rx, ry, rz])`,{x:n,y:r,z:i,s:a,r:o}),Uh.set(n,r,i),Wh.set(a[0],a[1],a[2]),Bh.compose(Uh,Vh,Wh),Bh.premultiply(this.base),Gh.getNormalMatrix(Bh);let f=c.attributes.position,p=c.attributes.normal,m=linColor(t),h=f.count;for(let e=0;e<h;e++){Uh.fromBufferAttribute(f,e);let t=(Uh.y-u)/d;Uh.applyMatrix4(Bh),this.pos.push(Uh.x,Uh.y,Uh.z),Uh.fromBufferAttribute(p,e).applyMatrix3(Gh).normalize(),this.nor.push(Uh.x,Uh.y,Uh.z);let n=.93+.12*t;this.col.push(m.r*n,m.g*n,m.b*n)}return this}addBox(e,t,n,r,i,a,o,s){return this.addGeometry(GEO.box,r,i,a+t/2,o,[e,t,n],s)}addCylinder(e,t,n,r,i,a,o,s,c){return s=s==null?e:s,this.addGeometry(cylGeo(s/e,o||10),n,r,i+t/2,a,[e,t,e],c)}addCone(e,t,n,r,i,a,o,s){return this.addGeometry(coneGeo(o||6),n,r,i+t/2,a,[e,t,e],s)}addSphere(e,t,n,r,i,a,o,s,c){return this.addGeometry(c?GEO.ico1:GEO.ico0,t,n,r,i,[e*(a||1),e*(o||1),e*(s||1)])}addBeam(e,t,n,r,i){let a=new THREE.Vector3(e[0],e[1],e[2]),o=new THREE.Vector3(t[0],t[1],t[2]),s=a.distanceTo(o),c=new THREE.Quaternion().setFromUnitVectors(Kh,o.clone().sub(a).normalize());return this.addGeometry(cylGeo(1,i||6),r,(a.x+o.x)/2,(a.y+o.y)/2,(a.z+o.z)/2,[n,s,n],null,c)}build(e,t){t=t||{};let n=new THREE.BufferGeometry;n.setAttribute(`position`,new THREE.Float32BufferAttribute(this.pos,3)),n.setAttribute(`normal`,new THREE.Float32BufferAttribute(this.nor,3)),n.setAttribute(`color`,new THREE.Float32BufferAttribute(this.col,3));let r=new THREE.Mesh(n,t.mat||(t.unlit?unlitMat:toonMat));if(t.outline!==!1){let e=new THREE.BufferGeometry;e.setAttribute(`position`,n.attributes.position),e.setAttribute(`snormal`,new THREE.Float32BufferAttribute(smoothN(this.pos,this.nor),3)),r.add(new THREE.Mesh(e,hullMat))}return e&&e.add(r),this.pos=this.nor=this.col=null,this.sealed=!0,r}};
export function slab(e,t,n,r,i,a,o,s){e.addBox(r-t,o,i-n,s,(t+r)/2,a,(n+i)/2)}
export function hipRoof(e,t,n){let r=e-t,i=e/2,a=t/2,o=r/2,s=[-i,0,-a],c=[i,0,-a],l=[i,0,a],u=[-i,0,a],d=[-o,n,0],f=[o,n,0],p=[u,l,f,u,f,d,c,s,d,c,d,f,l,c,f,s,u,d],m=[];p.forEach(function(e){m.push(e[0],e[1],e[2])});let h=new THREE.BufferGeometry;return h.setAttribute(`position`,new THREE.Float32BufferAttribute(m,3)),h.computeVertexNormals(),h}

export function initThreeScene() {
  glHost = $q("#gl");
  stageEl = $q("#stage");
  renderer = initRenderer(glHost);
  if (!renderer) {
    glHost.innerHTML = `<div class="fallback">Este aparelho não conseguiu iniciar o WebGL.</div>`;
    throw Error("WebGL indisponível");
  }
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(26, 1, 30, 2400);
  dio = new THREE.Group();
  surface = new THREE.Group();
  under = new THREE.Group();
  dio.add(under);
  dio.add(surface);
  scene.add(dio);
  scene.add(new THREE.AmbientLight(V.light.white, 0.6));
  dirLight = new THREE.DirectionalLight(V.light.white, 0.34);
  sunDir = new THREE.Vector3(-0.55, 0.78, 0.55).normalize();
  scene.add(dirLight);
  scene.add(dirLight.target);

  ctx.glHost = glHost;
  ctx.stageEl = stageEl;
  ctx.renderer = renderer;
  ctx.scene = scene;
  ctx.camera = camera;
  ctx.dio = dio;
  ctx.surface = surface;
  ctx.under = under;
  ctx.dirLight = dirLight;
  ctx.sunDir = sunDir;
}
