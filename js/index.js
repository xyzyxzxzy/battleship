import { SeaBattle } from './seaBattleShips.js';
import { GameBoardRenderer } from './gameBoardRenderer.js';

const n = 10;
const m = 10;

const seaBattle = new SeaBattle(n, m);
const gameBoard = seaBattle.placeShips();

const renderer = new GameBoardRenderer('gameContainer', gameBoard);
renderer.render();
