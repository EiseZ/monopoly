import { end, playRound } from "./round";
import { initializeGame, players } from "./initialize";
import fs from "fs";

const numberOfRounds = 200;

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
  players.forEach((player) => {
    if (!player.failliet && player.money != undefined) {
      fs.writeFile(
        "winners.csv",
        `buyStreet, ${player.ai.buyStreet}\nbuyHouse, ${player.ai.buyHouse}\nbuyStation, ${player.ai.buyStation}\nauctionMaxPrice, ${player.ai.auctionMaxPrice}\n\n`,
        { flag: "a" },
        (_) => {}
      );
    }
  });
}

let i;
for (i = 0; i < 100000; i++) {
  main();
}
