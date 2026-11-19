// Contexto compartilhado em tempo de execução para conectar grupos de cena,
// batches, colisões, atores animados e controladores sem dependências circulares.

export const ctx = {
  // Three.js DOM & objetos de cena (preenchidos por initThreeScene)
  glHost: null,
  stageEl: null,
  renderer: null,
  scene: null,
  camera: null,
  dio: null,
  surface: null,
  under: null,
  dirLight: null,
  sunDir: null,

  // Terreno e batches compartilhados (preenchidos por initTerrain)
  worldBatch: null,
  waterBatch: null,
  pondBatch: null,
  CANOPY_PALETTES: null,
  inGleba: null,
  free: null,

  // Coordenadas do Sisteminha (preenchidas por initSisteminha)
  LAKE_X: -36.5,
  LAKE_Z: 48.5,
  FISH_TANKS: null,

  // Grupos do Engenho 1850 (preenchidos por initEngenho)
  barnGroup: null,
  barnWalls: null,
  barnRoof: null,

  // Grupos da Casa Grande e construtor de parede (preenchidos por initCasaGrande)
  casaGroup: null,
  casaFloorMat: null,
  casaGroundWalls: null,
  casaRoof: null,
  casaUpper: null,
  casaUpperWalls: null,
  casaDoubleMat: null,
  casaFoundation: null,
  wall: null,

  // Pátio, dinâmicas e animação (preenchidos por initPatioAndDynamics / initAnimation)
  beacons: null,
  wheelGroup: null,
  wheelRotor: null,
  millGroup: null,
  millRotor: null,
  animals: null,
  fish: null,
  foam: null,
  sprays: null,
  bunkerLeds: [],

  // Bunker (preenchido por initBunker)
  bunkerShell: null,
  bunkerMat: null,

  // Estado de câmera, simulação e 1ª Pessoa (preenchido por initCameraState)
  viewTarget: null,
  viewCur: null,
  walker: null,
  sim: null,

  // HUD e legendas (preenchidos por initHudAndLabels)
  roomAt: null,
  syncFpHud: null,
  roomPlaques: null,
  labelsState: null,
  labelHooks: null,
  measureLabels: null,
  updateLabels: null,
  updateInfoCard: null,
  setLift: null,
  updateSun: null,
  panelEl: null,
  syncSheetState: null,
  setDrawer: null,

  // Câmera e interação (preenchidos por initCameraAndInteraction)
  sectorsByKey: null,
  onResize: null,
  focusOn: null,
  fpGo: null,
  enterFP: null,
  exitFP: null,
  perfState: null,
  startLoop: null,
};
