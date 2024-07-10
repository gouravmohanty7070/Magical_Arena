class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive() {
        return this.health > 0;
    }

    takeDamage(damage) {
        this.health = Math.max(0, this.health - damage);
    }

    rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    attackDamage() {
        return this.attack * this.rollDie();
    }

    defendDamage() {
        return this.strength * this.rollDie();
    }
}

module.exports = Player;