const Player = require('./player');
const Arena = require('./arena');

const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

const arena = new Arena(playerA, playerB);
const winner = arena.fight();

console.log(`The winner is ${winner === playerA ? 'Player A' : 'Player B'}!`);