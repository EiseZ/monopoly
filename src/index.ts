import { end, playRound } from "./round";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numberOfRounds = 20;
let startingMoney = 1500;

function main() {
  initializeGame();
  let i;
  for (i = 1; i <= numberOfRounds; i++) {
    if (!end) {
      console.log(`Ronde ${i}:`);
      playRound();
    } else {
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
