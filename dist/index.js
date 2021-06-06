"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const round_1 = require("./round");
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let numberOfRounds = 20;
let startingMoney = 1500;
function main() {
    initializeGame();
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
}
function initializeGame() {
    console.log("Hoeveel rondes mogen er maximaal gespeeld worden?");
    rl.question("Hoeveel rondes mogen er maximaal gespeeld worden?", (awnser) => {
        numberOfRounds = Number(awnser);
    });
    rl.question("Met hoeveel geld moeten de spelers starten?", (awnser) => {
        startingMoney = Number(awnser);
    });
    console.log("Het spel is aan het laden...");
}
main();
//# sourceMappingURL=index.js.map