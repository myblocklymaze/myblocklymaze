var mainCanvas;
var mainCtx;

var bgCanvas;
var bgCtx;

var bgWidth;
var bgHeight;

var bgImg;
var bgSrc = 'bg_ufsm.jpg';
var tilesImg;
var tilesSrc = 'tiles.png';
var pegmanImg;
var pegmanSrc = 'pegman.png';
var markerImg;
var markerSrc = 'marker.png';
var loadingStatus = [ false, false, false, false ];

var isGridActivated = true;
var gridColor = "red";

var squareSize = 50;

var levels = [];
var levelHeight;
var levelWidth;
var currentLevel;

var shapes = {
  '10010': [4, 0],  // Dead ends
  '10100': [3, 3],
  '11000': [0, 1],
  '10001': [0, 2],
  '11010': [4, 1],  // Vertical
  '10101': [3, 2],  // Horizontal
  '10011': [0, 0],  // Elbows
  '10110': [2, 0],
  '11100': [4, 2],
  '11001': [2, 3],
  '11011': [1, 1],  // Junctions
  '10111': [1, 0],
  '11110': [2, 1],
  '11101': [1, 2],
  '11111': [2, 2],  // Cross
  'null0': [4, 3],  // Empty
  'null1': [3, 0],
  'null2': [3, 1],
  'null3': [0, 3],
  'null4': [1, 3]
};

var matrices;

/*/ REMOVER DEPOIS \/

var matrices = [
// Level 1. HUSM
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 3, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
// Level 2. RU2
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 3, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
// Level 3. REITORIA
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
// Level 4. FATEC
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [2, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
// Level 5. ESCOLA DE MÚSICA
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
// Level 6. PLANETÁRIO
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 3, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
// Level 7. CENTRO DE CONVENÇÕES
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 3, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
// Level 8. HVU
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
// Level 9. ESTÁDIO
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
// Level 10. PAVILHÃO DO CE
 [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 3, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
];

// REMOVER DEPOIS /\*/

function initBGCanvas()
{
	var dpr = window.devicePixelRatio || 1;

	bgCanvas = document.getElementById( "bgCanvas" );

	bgCanvas.style.height = bgHeight + "px";
	bgCanvas.style.width = bgWidth + "px";
	
	bgCanvas.width = bgWidth * dpr;
	bgCanvas.height = bgHeight * dpr;
	
	bgCtx = bgCanvas.getContext( '2d' );
	bgCtx.scale( dpr, dpr );

	bgCtx.imageSmoothingEnabled = false;
}

function initMainCanvas()
{
	var dpr = window.devicePixelRatio || 1;

	mainCanvas = document.getElementById( "mainCanvas" );
	mainCanvas.addEventListener( "mouseup", clickChangeTile, true );

	mainCanvas.oncontextmenu = function(){ return false; };

	mainCanvas.style.height = bgHeight + "px";
	mainCanvas.style.width = bgWidth + "px";

	mainCanvas.width = bgWidth * dpr;
	mainCanvas.height = bgHeight * dpr;

	mainCtx = mainCanvas.getContext( '2d' );
	mainCtx.scale( dpr, dpr );
	
	mainCtx.imageSmoothingEnabled = false;
}

function initLevels()
{
  currentLevel = 1;

	levelHeight = Math.floor( bgHeight / squareSize );
  levelWidth = Math.floor( bgWidth / squareSize );

  var matrix = [];
  var row = [];
  for ( var i = 0; i < levelWidth; i++ )
  {
      row.push( 0 );
  }
  for ( var j = 0; j < levelHeight; j++ )
  {
      matrix.push( row.concat() );
  }

	var toolbar = document.getElementById( "toolbar" );

  var addLevelButton = document.getElementById( "addLevel" );
  addLevelButton.style.display = "inline-block";

  var removeLevelButton = document.getElementById( "removeLevel" );
  removeLevelButton.style.display = "inline-block";

  levels = [];
	levels.push( matrix );

  var pageButtons = toolbar.childNodes;
  while( addLevelButton.previousElementSibling != null )
  {
    toolbar.removeChild( addLevelButton.previousElementSibling );
  }

  var span = document.createElement( "SPAN" );
  var node = document.createElement( "A" );

  var textnode = document.createTextNode( currentLevel );
  node.appendChild( textnode );
  span.appendChild( node );

  toolbar.insertBefore( span, document.getElementById( "addLevel" ) );
  span.setAttribute( "class", "page" );
  span.onclick = function()
  {
      var pages = toolbar.childNodes;

      for( var p = 0; p < pages.length; p++ )
      {
        if( pages[ p ].className == "page selected" )
        {
          pages[ p ].classList.remove( "selected" );
        }
      }
      currentLevel = parseInt( this.firstChild.innerHTML, 10 );
      this.classList.add( "selected" );

      refreshMainCanvas();
      refreshTextArea();
  };
  toolbar.firstElementChild.classList.add( "selected" );

  refreshTextArea();
}

function normalize( x, y )
{
	var matrix = levels[ currentLevel - 1 ];
    if( x < 0 || x >= levelWidth || y < 0 || y >= levelHeight )
    {
      return '0';
    }
    return ( matrix[ y ][ x ] == 0 ) ? '0' : '1';
};

function areImagesLoaded()
{
  return loadingStatus.every( function( array )
  {
    return array;
  } );
}

function loadPage()
{
  tilesImg = document.getElementById( "tilesImg" );
	pegmanImg = document.getElementById( "pegmanImg" );
  markerImg = document.getElementById( "markerImg" );

  loadingStatus[ 1 ] = true;
  loadingStatus[ 2 ] = true;
  loadingStatus[ 3 ] = true;
}

function refreshMainCanvas()
{
	mainCtx.clearRect ( 0 , 0 , bgWidth , bgHeight );
  drawTiles();
  drawGrid();
}

function drawGrid()
{
  var i = 0;
	if( isGridActivated )
	{
    mainCtx.translate( 0.5, 0.5 );
		mainCtx.lineWidth = 1;
		mainCtx.strokeStyle = gridColor;
		mainCtx.beginPath();
		for( i = squareSize; i <= bgWidth; i += squareSize )
		{
			mainCtx.moveTo( i, 0 );
			mainCtx.lineTo( i, bgHeight );
		}
		for( i = squareSize; i <= bgHeight; i += squareSize )
		{
			mainCtx.moveTo( 0, i );
			mainCtx.lineTo( bgWidth, i );
		}
		mainCtx.stroke();
	}
	mainCtx.translate( -0.5, -0.5 );
}

function refreshTextArea()
{
	var matrix = levels[ currentLevel - 1 ];
	var t = "";
	for ( var i = 0; i < levelHeight; i++ )
	{
	    for ( var j = 0; j < levelWidth; j++ )
	    {
	        t += matrix[ i ][ j ];
	        if( j < levelWidth - 1 )
        	{
        		t += " ";
        	}
	    }
	    t += "<br>";
	}
	document.getElementById("log").innerHTML = t;
}

function clickChangeTile( event )
{
	var matrix = levels[ currentLevel - 1 ];

  var rect = mainCanvas.getBoundingClientRect();
  var x = Math.floor( ( event.clientX - rect.left ) / 50 );
  var y = Math.floor( ( event.clientY - rect.top ) / 50 );

  var right = 2;
	if( event.button === right )
	{
		matrix[ y ][ x ] -= 1;
    if( matrix[ y ][ x ] < 0 ) matrix[ y ][ x ] = 3;
	}
	else
	{
		matrix[ y ][ x ] += 1;
    if( matrix[ y ][ x ] > 3 ) matrix[ y ][ x ] = 0;
	}

    refreshTextArea();
    refreshMainCanvas();
}

function clickAddLevel()
{
	var toolbar = document.getElementById( "toolbar" );

	var matrix = [];
	var row = [];
	for ( var i = 0; i < levelWidth; i++ )
	{
	    row.push( 0 );
	}
	for ( var j = 0; j < levelHeight; j++ )
  {
      matrix.push( row.concat() );
  }

  levels.push( matrix );
	var span = document.createElement( "SPAN" );
	var node = document.createElement( "A" );
	var textnode = document.createTextNode( levels.length );
	node.appendChild( textnode );
	span.appendChild( node );
	toolbar.insertBefore( span, document.getElementById( "addLevel" ) );
	span.setAttribute( "class", "page" );
	span.onclick = function()
	{
    	var pages = toolbar.childNodes;

    	for( var p = 0; p < pages.length; p++ )
    	{
    		if( pages[ p ].className == "page selected" )
    		{
    			pages[ p ].classList.remove( "selected" );
    		}
    	}
    	currentLevel = parseInt( this.firstChild.innerHTML, 10 );
    	this.classList.add( "selected" );

    	refreshMainCanvas();
    	refreshTextArea();
	};

	currentLevel = levels.length;

	var pages = toolbar.childNodes;
	for( var p = 0; p < pages.length; p++ )
	{
		if( pages[ p ].className == "page selected" )
		{
			pages[ p ].classList.remove( "selected" );
		}
	}

	span.classList.add( "selected" );
	refreshMainCanvas();
	refreshTextArea();
}

function clickRemoveLevel()
{
  if( levels.length > 1 )
  {
    var test = confirm( "Deseja excluir o último nível?" );

    if( test )
    {
      var toolbar = document.getElementById( "toolbar" );

      levels.pop();

      var lastPage = document.getElementById( "addLevel" ).previousSibling;

      if( lastPage.className == "page selected" )
      {
        lastPage.classList.remove( "selected" );
        toolbar.firstElementChild.classList.add( "selected" );
        currentLevel = 1;
      }

      toolbar.removeChild( lastPage );

      refreshMainCanvas();
      refreshTextArea();
    }
  }
  else
  {
    alert( "Você não pode excluir o primeiro nível." );
  }
}

function getDataURL( imageObject )
{
  imageObject.crossOrigin = 'Anonymous';
  var dpr = window.devicePixelRatio || 1;
  var temp = document.createElement( "CANVAS" );
  temp.style.width = imageObject.width;
  temp.style.height = imageObject.height;
  temp.width = imageObject.width * dpr;
  temp.height = imageObject.height * dpr;
  var tempCtx = temp.getContext( '2d' );
  tempCtx.scale( dpr, dpr );
  tempCtx.imageSmoothingEnabled = false;
  tempCtx.drawImage( imageObject, 0, 0, imageObject.width, imageObject.height );
  return temp.toDataURL( "image/png" );
}

function clickSave()
{
	var zip = new JSZip();

	var leveldata = JSON.stringify( levels );
	var bgData = bgCanvas.toDataURL( "image/png" );

  var mazeHTML = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
      '\t<meta charset="utf-8">\n' +
      '\t<meta name="google" value="notranslate">\n' +
      '\t<meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, user-scalable=no">\n' +
      '\t<title>Blockly Games : Maze</title>\n' +
      '\t<link rel="stylesheet" href="common/common.css">\n' +
      '\t<link rel="stylesheet" href="maze/style.css">\n' +
      '\t<script src="maze/js/jszip.min.js"></script>\n' +
      '\t<script src="common/boot.js"></script>\n' +
      '\t<script src="common/storage.js"></script>\n' +
    '</head>\n' +
    '<body>\n' +
      '\t<p id="levelData" style="display: none">' + leveldata + '</p>\n' +
    '</body>\n' +
    '</html>';

	zip.file( "maze.html", mazeHTML );

  var folder = zip.folder( "maze" );

	folder.file( "background.png", bgData.split('base64,')[ 1 ], { base64: true } );

	zip.generateAsync( { type: "blob" } ).then( function( content )
	{
	    saveAs( content, "customgame.zip" );
	});
}

function loadBackgroundFile()
{
  var file = document.getElementById( "bgFile" );
  bgSrc = URL.createObjectURL( file.files[0] );

  bgImg = new Image();
  bgImg.onload = function()
  {
    loadingStatus[ 0 ] = true;
  };
  bgImg.src = bgSrc;
}

function loadTilesFile()
{
  var file = document.getElementById( "tilesFile" );
  tilesSrc = URL.createObjectURL( file.files[0] );

  tilesImg = new Image();
  tilesImg.onload = function()
  {
    loadingStatus[ 1 ] = true;
  };
  tilesImg.src = tilesSrc;
}

function loadPegmanFile()
{
  var file = document.getElementById( "pegmanFile" );
  pegmanSrc = URL.createObjectURL( file.files[0] );

  pegmanImg = new Image();
  pegmanImg.onload = function()
  {
    loadingStatus[ 2 ] = true;
  };
  pegmanImg.src = pegmanSrc;
}

function loadMarkerFile()
{
  var file = document.getElementById( "markerFile" );
  markerSrc = URL.createObjectURL( file.files[0] );

  markerImg = new Image();
  markerImg.onload = function()
  {
    loadingStatus[ 3 ] = true;
  };
  markerImg.src = markerSrc;
}

function drawBackground()
{
  bgHeight = bgImg.height;
  bgWidth = bgImg.width;

  initBGCanvas();

  bgCtx.drawImage( bgImg, 0, 0, bgWidth, bgHeight );
}

function drawTiles()
{
  var matrix = levels[ currentLevel - 1 ];

  for( var x = 0; x < levelWidth; x++ )
  {
    for( var y = 0; y < levelHeight; y++ )
    {
      var tileShape = normalize( x, y ) +
      normalize( x, y - 1 ) +  // North.
      normalize( x - 1, y ) +  // West.
      normalize( x, y + 1 ) +  // South.
      normalize( x + 1, y );   // East.

      if( tileShape == '10000' ) tileShape = '11111'; // Draw cross if there's no adjacent path;
      
      if( !shapes[tileShape] )
      {
        if ( tileShape == '00000' && Math.random() > 0.3 )
        {
          tileShape = 'null0';
        }
        else
        {
          tileShape = 'null' + Math.floor( 1 + Math.random() * 4 );
        }
      }

      var left = shapes[ tileShape ][ 0 ];
      var top = shapes[ tileShape ][ 1 ];

      mainCtx.drawImage( tilesImg, left * squareSize, top * squareSize, squareSize, squareSize, x * squareSize, y * squareSize, squareSize, squareSize );
      
      if( matrix[ y ][ x ] == 2 )
      {
        mainCtx.drawImage( pegmanImg, 0, 0, 50, 50, x * squareSize + 1.5, y * squareSize - 8, 50, 50 );
      }
      if( matrix[ y ][ x ] == 3 )
      {
        mainCtx.drawImage( markerImg, 0, 0, 20, 34, x * squareSize + 15, y * squareSize - 8, 20, 34 );
      }
    }
  }
}

function clickDraw()
{
  if( loadingStatus[ 0 ] )
  {
    var height = bgImg.height;
    var width = bgImg.width;

    if( width < 150 || width > 700 || height < 150 || height > 700 )
    {
      alert( 'Imagem deve ter entre 150 e 700 pixels de altura/largura.' );
    }
    else
    {
      drawBackground();
    }
  }
  if( loadingStatus[ 0 ] && loadingStatus[ 1 ] && loadingStatus[ 2 ] && loadingStatus[ 3 ] )
  {
    initLevels();
    initMainCanvas();

    drawTiles();

    drawGrid();
  }
}