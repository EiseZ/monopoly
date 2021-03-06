"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const round_1 = require("./round");
const initialize_1 = require("./initialize");
const fs_1 = __importDefault(require("fs"));
const numberOfRounds = 200;
function main() {
    initialize_1.initializeGame();
    let i;
    for (i = 1; i <= numberOfRounds; i++) {
        if (!round_1.end) {
            console.log(`Ronde ${i}:`);
            round_1.playRound();
        }
        else {
            console.log("\n\n\n Er is een winnaar \n\n\n");
            break;
        }
    }
    initialize_1.players.forEach((player) => {
        if (!player.failliet && player.money != undefined) {
            fs_1.default.writeFile("winners.csv", `buyStreet, ${player.ai.buyStreet}\nbuyHouse, ${player.ai.buyHouse}\nbuyStation, ${player.ai.buyStation}\nauctionMaxPrice, ${player.ai.auctionMaxPrice}\n\n`, { flag: "a" }, (_) => { });
        }
    });
}
let i;
for (i = 0; i < 100000; i++) {
    main();
}
//# sourceMappingURL=index.js.map