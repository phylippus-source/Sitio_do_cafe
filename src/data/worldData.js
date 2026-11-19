// ============================================================================
// DADOS: paleta, dimensões da gleba, cômodos, quadras e pontos de teleporte
// ============================================================================

export const K={grass:7127358,grass2:6140468,grass3:8244555,tuft:4889387,soil:8146733,soilD:5978657,dirt:14464381,water:5031666,waterL:11135226,pond:3134150,sand:15586459,stone:12433064,stoneD:9406587,stoneL:14078146,rock:10263704,roof:14378031,roofD:11815714,cal:16315365,ocre:14919231,wood:11235903,woodD:7030055,woodL:14329704,conc:13488854,concD:10397100,steel:10858684,steelD:6318967,black:2435117,yellow:16234766,orange:16742932,red:14433069,blue:4097752,green:3252314,glass:10213873,white:16185593,pink:16099769,copper:13926203,ice:15397879,navy:1914214};
export const CASA_OCHRE=15253347;
export const CASA_WHITE=K.cal;
export const IRON_DARK=2764081;
export const MARBLE=15855850;
export const WOOD_TRIM=3104680;
export const GOLD_ACCENT=16054267;
export const TILE_WARM=13201994;
export const V={wood:{floorBoard:8014378,oak:9067058,walnut:8015660,ebony:5913124,darkWalnut:3810328},light:{white:16777215,warmGlow:16771494,cream:15722194,ivory:16052194,parchment:15916974,butter:16774064,wheat:15786160,tileGrey:13620698,linen:15127472},dark:{deviceBlack:1119001,slate:2764088,void:658452,navyBlack:1777194,charcoal:1711136,graphite:2237995},clay:{gold:13935178,terracotta:11884859,honey:14725706,ochreDark:13144634,copperBrown:12745274,sandGold:14861436,mustard:15321194},fabric:{burgundy:7024426,royalBlue:3108024,emerald:3119704,jade:3121242,brickRed:11024938,rust:12865594,indigo:3091018,wine:6954794},glass:{paleBlue:9419220,windowDeep:2771571,showerGlass:12575731,iceBlue:10474226},paint:{shutterGreen:3103290},animal:{pigPink:15305376,horn:7038043,grey:9077882},water:{trough:7062758},metal:{blueSteel:7109512},stone:{sandstone:14139532},flora:{violet:12614655,purple:9330608,cornflower:4886468,leafGreen:4173386,tomatoRed:14698029,pumpkin:16747038,fernGreen:4164646,sunflower:16765498,marigold:15249482,straw:15782487,cropGreenA:4173898,cropGreenB:3119684,cropGreenC:5751388,lilac:11895782,coral:14242639,sage:8107617,salmon:14248538,grass:6989903,lime:8115050},neon:{amber:16757575,cyan:3531007,yellow:16769354,violet:11560703,blue:2780415,mint:5111720,magenta:16734930}};

export const ROOMS=[[`Cozinha de serviço`,-12,-68,-6,-59,`s`],[`Copa`,-12,-59,-6,-56,`s`],[`Capela`,-12,-56,-6,-48,`s`],[`Sala de jantar`,-6,-68,8,-62,`s`],[`Sala de visitas`,-6,-62,8,-56,`s`],[`Hall e escadaria`,-6,-56,8,-48,`s`],[`Despensa de catástrofe`,8,-68,14,-61,`s`],[`Banheiros coletivos`,8,-61,14,-56,`s`],[`Escritório`,8,-56,14,-48,`s`],[`Varanda e escadaria`,-12.4,-48,14.4,-41,`s`],[`Suíte A`,-12,-55.5,-6.5,-48,`a`],[`Suíte B`,-6.5,-55.5,-1,-48,`a`],[`Suíte C`,3,-55.5,8.5,-48,`a`],[`Suíte D`,8.5,-55.5,14,-48,`a`],[`Suíte E`,-12,-68,-3,-59,`a`],[`Suíte F`,5,-68,14,-59,`a`],[`Sala íntima`,-3,-68,5,-59,`a`],[`Corredor do sobrado`,-12,-59,14,-55.5,`a`],[`Escada`,-.1,-55.2,2.1,-48.2,`a`],[`Engenho 1850`,21,-43,43,-33,`s`],[`Pátio técnico`,21,-33,39,-13,`s`],[`Curral`,23,-10,39,9,`s`],[`Biodigestor`,22.5,10,40,16,`s`],[`Estufa`,21.5,30.6,33.5,40.6,`s`],[`Núcleo Sisteminha`,-44,31,5,62,`s`],[`Jazida de argila`,-48,56,-18,75,`s`],[`Quadras de rotação`,-36,-44,8,11,`s`],[`Bambuzal`,-44,-72,-16,-46,`s`],[`Silvicultura`,17,-74,43,-46,`s`],[`Estrada`,-50,25.5,43,30.5,`s`],[`Suíte cyberpunk do Mestre`,-11.4,-72.4,-4.4,-55.8,`u`],[`Suíte dos pais`,-4.4,-72.4,.1,-55.8,`u`],[`Quarto da irmã`,.1,-72.4,3.9,-55.8,`u`],[`Quarto da sobrinha`,3.9,-72.4,7.1,-55.8,`u`],[`Quarto do convidado`,7.1,-72.4,10.1,-55.8,`u`],[`Datacenter`,10.1,-72.4,16.1,-55.8,`u`],[`Laboratórios`,16.1,-72.4,20,-55.8,`u`],[`Sala limpa`,20,-72.4,23,-55.8,`u`],[`Suporte de vida e baterias`,23,-72.4,27.4,-55.8,`u`],[`Corredor do bunker`,-11.4,-55.8,27.4,-53.2,`u`],[`Estar, jantar e cozinha`,-11.4,-53.2,2.2,-38.6,`u`],[`Despensa 90 dias`,2.2,-53.2,5.8,-38.6,`u`],[`Cinema e jogos`,5.8,-53.2,12.4,-38.6,`u`],[`Hidroponia`,12.4,-53.2,20.4,-38.6,`u`],[`Oficina maker`,20.4,-53.2,27.4,-38.6,`u`],[`Sobrado`,-12.4,-68,14.4,-47,`a`]];
export function roomRect(e){let t=ROOMS.find(t=>t[0]===e);if(!t)throw Error(`cômodo desconhecido: `+e);return{x1:t[1],z1:t[2],x2:t[3],z2:t[4]}}

export const QUADRAS=[{n:`Q1`,x1:-36,x2:-16,z1:-44,z2:-19,k:0},{n:`Q2`,x1:-12,x2:8,z1:-44,z2:-19,k:1},{n:`Q3`,x1:-36,x2:-16,z1:-14,z2:11,k:2},{n:`Q4`,x1:-12,x2:8,z1:-14,z2:11,k:3}];
export const SPAWNS={ground:{x:1,z:-50.6,yaw:0,lvl:`s`},attic:{x:1,z:-57,yaw:0,lvl:`a`},under:{x:-9.8,z:-54.5,yaw:-Math.PI/2,lvl:`u`},under2:{x:-8.2,z:-56.6,yaw:0,lvl:`u`},gate:{x:-46,z:28,yaw:-Math.PI/2,lvl:`s`}};
export const BUNKER_SLAB_Y=-8.9;
export const BUNKER_FLOOR_Y=-8.700000000000001;
export const BUNKER_H=3.6;
export const CASA_GROUND_H=3.8;
export const CASA_UPPER_H=3.6;
export const GLEBA={x1:-50,x2:50,z1:-75,z2:75};
export const CREEK={x1:43,x2:48};
export const BUNKER={x1:-12,x2:28,z1:-73,z2:-38,wall:.6};
export const BUNKER_INNER={x1:-11.4,x2:27.4,z1:-72.4,z2:-38.6,corridorZ1:-55.8,corridorZ2:-53.2};
export const CASA_ORIGIN={x:1,y:0,z:-58};
export const BARN_ORIGIN={x:32,y:0,z:-38};
export const roomArea=([,e,t,n,r])=>(n-e)*(r-t);

export function bunkerAreas(){let e={};return ROOMS.filter(e=>e[5]===`u`).forEach(t=>{e[t[0]]=Math.round(roomArea(t)*10)/10}),e}
export function bunkerTotalArea(){return ROOMS.filter(e=>e[5]===`u`).reduce((e,t)=>e+roomArea(t),0)}

export const LEVEL_CODES=[`s`,`u`,`a`];
export const LABEL_KINDS=[`s`,`u`,`c`,`b`,`i`,`e`,`U`];
export const EPS=1e-9;
