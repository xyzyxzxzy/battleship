import { BattleshipManager } from './battleshipManager.js';
import { GameBoardRenderer } from './gameBoardRenderer.js';

const n = 10;
const m = 10;

const seaBattle = new BattleshipManager(n, m);
const gameBoard = seaBattle.placeShips();

const renderer = new GameBoardRenderer('gameContainer', gameBoard);
renderer.render();
