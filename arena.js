class Arena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    fight() {
        let attacker = this.playerA.health <= this.playerB.health ? this.playerA : this.playerB;
        let defender = attacker === this.playerA ? this.playerB : this.playerA;

        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            this.round(attacker, defender);
            [attacker, defender] = [defender, attacker];
        }

        return this.playerA.isAlive() ? this.playerA : this.playerB;
    }

    round(attacker, defender) {
        const attackDamage = attacker.attackDamage();
        const defendDamage = defender.defendDamage();
        const netDamage = Math.max(0, attackDamage - defendDamage);

        defender.takeDamage(netDamage);

        console.log(`${attacker === this.playerA ? 'Player A' : 'Player B'} attacks!`);
        console.log(`Attack roll: ${attackDamage / attacker.attack}, Damage: ${attackDamage}`);
        console.log(`Defend roll: ${defendDamage / defender.strength}, Damage blocked: ${defendDamage}`);
        console.log(`Net damage: ${netDamage}`);
        console.log(`Player A health: ${this.playerA.health}, Player B health: ${this.playerB.health}\n`);
    }
}

module.exports = Arena;