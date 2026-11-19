// ============================================================================
// ENTRYPOINT: orquestra a ordem exata de inicialização do HTML original
// ============================================================================
import "./styles.css";
import { THREE, $q, hullMat, initThreeScene } from "./engine/threeSetup.js";
import { validate } from "./data/uiData.js";
import { ctx } from "./engine/context.js";
import { initTerrain, initTerrainInfra } from "./world/terrain.js";
import { initSisteminha } from "./world/sisteminha.js";
import { initFlora } from "./world/flora.js";
import { initEngenho } from "./world/engenho.js";
import { initCasaGrande } from "./world/casaGrande.js";
import { initPatioAndDynamics, initAnimation } from "./world/patioAndDynamics.js";
import { initBunker } from "./bunker/bunker.js";
import { initHudAndLabels } from "./controls/hudAndLabels.js";
import { initCameraState, initCameraAndInteraction } from "./controls/cameraAndInteraction.js";

// 1. WebGLRenderer (THREE.sRGBEncoding), Scene, Camera, Lights
initThreeScene();

// 2. Terreno 100 × 150 m (parte 1: solo, córrego, estradas, porteira)
initTerrain();

// 3. Núcleo Sisteminha Embrapa (lago, tanques, canteiros, estufa, curral)
initSisteminha();

// 4. Infraestrutura de terreno (bateria gravitacional, argila/forno, redes, cerca viva)
initTerrainInfra();

// 5. Flora (árvores, bambuzal, silvicultura, pomar, tufos, flores, apiário)
initFlora();

// 6. Engenho 1850
initEngenho();

// 7. Casa Grande
initCasaGrande();

// 8. Pátio técnico, roda d'água, moinho, animais, peixes, espuma e build dos batches
initPatioAndDynamics();

// 9. Loop de animação dos elementos dinâmicos (surface.userData.tick)
initAnimation();

// 10. Bunker subterrâneo completo + plano de sombra da base
initBunker();

// 11. Estado da câmera, simulação e 1ª Pessoa (Orbwalk)
initCameraState();

// 12. HUD, placas de cômodos, legendas 3D e gavetas (BOM / Aura OS)
initHudAndLabels();

// 13. Resize, foco por setor, ponteiro/teclado, Orbwalk e loop principal
initCameraAndInteraction();

// 14. Validação de dados, inicialização do loop e hook ?debug
validate().forEach(function (err) {
  console.error("[dados] " + err);
});
ctx.updateInfoCard(ctx.sectorsByKey.overview);
ctx.startLoop();
setTimeout(function () {
  ctx.focusOn("overview");
}, 60);

if (new URLSearchParams(window.location.search).has("debug")) {
  window.__sitio = {
    THREE,
    scene: ctx.scene,
    diorama: ctx.dio,
    hull: hullMat,
    viewTarget: ctx.viewTarget,
    walker: ctx.walker,
    fpGo: ctx.fpGo,
    enterFP: ctx.enterFP,
    exitFP: ctx.exitFP,
    state: function () {
      return {
        adaptiveQuality: ctx.perfState.lvl,
        lift: ctx.viewCur.lift,
        casaRoofY: ctx.casaRoof.position.y,
        barnRoofY: ctx.barnRoof.position.y,
        wallsY: ctx.casaGroundWalls.scale.y,
        wheel: ctx.wheelRotor.rotation.z,
        rotor: ctx.millRotor.rotation.z,
        fish: ctx.fish.length,
        animals: ctx.animals.length,
        tri: ctx.renderer.info.render.triangles,
        calls: ctx.renderer.info.render.calls,
      };
    },
    focusOn: ctx.focusOn,
    setDrawer: ctx.setDrawer,
    panel: function () {
      $q("#d-panel").click();
    },
  };
}
