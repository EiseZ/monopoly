import { end, playRound } from "./round";
import { initializeGame, players } from "./initialize";
import fs from "fs";
import { setFlagsFromString } from "node:v8";

const numberOfRounds = 50;

function main() {
  initializeGame();
  let i;
  for (i = 1; i <= numberOfRounds; i++) {
    if (!end) {
      console.log(`Ronde ${i}:`);
      playRound();
    } else {
      console.log("\n\n\n Er is een winnaar \n\n\n");
      players.forEach((player) => {
        if (!player.failliet && player.money != undefined) {
          fs.writeFile(
            "output",
            `De winnaar was speler ${player.number}.\n\n\n\n`,
            { flag: "a" },
            (_) => {}
          );
        } else if (player.money != undefined) {
          fs.writeFile(
            "output",
            `Er was een error, dit spel telt niet.\n\n\n\n`,
            { flag: "a" },
            (_) => {}
          );
        }
      });
      break;
    }
  }
  if (!end) {
    fs.writeFile(
      "output",
      `Er was geen winnaar na ${numberOfRounds} rondes.\n\n\n\n`,
      { flag: "a" },
      (_) => {}
    );
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

fs.writeFile("output", `Het spel begint:\n`, { flag: "a" }, (_) => {});
main();
