const Arena = require('../arena');
const Player = require('../player');

describe('Arena', () => {
  let playerA;
  let playerB;
  let arena;

  beforeEach(() => {
    playerA = new Player(50, 5, 10);
    playerB = new Player(100, 10, 5);
    arena = new Arena(playerA, playerB);
  });

  test('should initialize with two players', () => {
    expect(arena.playerA).toBe(playerA);
    expect(arena.playerB).toBe(playerB);
  });

  test('fight should return a winner', () => {
    const winner = arena.fight();
    expect(winner).toBeInstanceOf(Player);
    expect(winner.isAlive()).toBe(true);
  });

  test('fight should continue until one player dies', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {}); // Suppress console.log
    const winner = arena.fight();
    const loser = winner === playerA ? playerB : playerA;
    expect(winner.isAlive()).toBe(true);
    expect(loser.isAlive()).toBe(false);
  });

  test('round should deal damage correctly', () => {
    jest.spyOn(playerA, 'rollDie').mockReturnValue(3);
    jest.spyOn(playerB, 'rollDie').mockReturnValue(2);

    const initialHealthB = playerB.health;
    arena.round(playerA, playerB);

    const expectedDamage = Math.max(0, (playerA.attack * 3) - (playerB.strength * 2));
    expect(playerB.health).toBe(initialHealthB - expectedDamage);
  });
});