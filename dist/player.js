"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(number, money, ai) {
        this.ownedNumbers = [];
        this.boardPos = 0;
        this.houses = 0;
        this.hotels = 0;
        this.stationAmount = 0;
        this.inPrison = false;
        this.prisonNonDoubleCount = 0;
        this.failliet = false;
        this.number = number;
        this.money = money;
        this.ai = ai;
    }
}
exports.default = Player;
//# sourceMappingURL=player.js.map