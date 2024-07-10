const Player = require('../player');

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player(100, 10, 20);
  });

  test('should initialize with correct attributes', () => {
    expect(player.health).toBe(100);
    expect(player.strength).toBe(10);
    expect(player.attack).toBe(20);
  });

  test('isAlive should return true when health > 0', () => {
    expect(player.isAlive()).toBe(true);
  });

  test('isAlive should return false when health = 0', () => {
    player.takeDamage(100);
    expect(player.isAlive()).toBe(false);
  });

  test('takeDamage should reduce health correctly', () => {
    player.takeDamage(30);
    expect(player.health).toBe(70);
  });

  test('takeDamage should not reduce health below 0', () => {
    player.takeDamage(150);
    expect(player.health).toBe(0);
  });

  test('rollDie should return a number between 1 and 6', () => {
    const roll = player.rollDie();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
  });

  test('attackDamage should be within the correct range', () => {
    const damage = player.attackDamage();
    expect(damage).toBeGreaterThanOrEqual(player.attack);
    expect(damage).toBeLessThanOrEqual(player.attack * 6);
  });

  test('defendDamage should be within the correct range', () => {
    const defense = player.defendDamage();
    expect(defense).toBeGreaterThanOrEqual(player.strength);
    expect(defense).toBeLessThanOrEqual(player.strength * 6);
  });
});