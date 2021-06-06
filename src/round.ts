import { board, buyHouses, fonds, kans, station, straat } from "./board";
import { players } from "./initialize";
import Player from "./player";

export let end = false;

export function playRound() {
  let i;
  for (i = 0; i < 4; i++) {
    if (!players[i].failliet) {
      console.log(`   Speler ${i + 1}'s beurt:`);
      movePlayer(players[i]);
    }
    let faillietCounter = 0;
    players.forEach((player) => {
      if (player.failliet) {
        faillietCounter++;
      }
    });
    if (faillietCounter >= 3) {
      end = true;
    }
  }
}

function movePlayer(player: Player) {
  if (player.inPrison) {
    console.log("      De speler zit in de gevangenis.");
    if (player.prisonNonDoubleCount === 3) {
      player.money -= 50;
      player.inPrison = false;
      player.prisonNonDoubleCount = 0;
      console.log(
        "      De speler heeft 50 euro betaalt om uit de gevangenis te komen."
      );
      console.log(`      Geld: ${player.money}`);
    } else {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      console.log(
        `      Speler gooit: ${dice1} en ${dice2}. Totaal: ${dice1 + dice2}`
      );
      if (dice1 === dice2) {
        console.log(`      Dat is dubbel, de speler is uit de gevangenis.`);
        player.inPrison = false;
        player.prisonNonDoubleCount = 0;
        console.log(`      Geld: ${player.money}`);
      } else {
        console.log(
          `      Dat is niet dubbel, de speler blijft in de gevangenis.`
        );
        player.prisonNonDoubleCount++;
        console.log(`      Geld: ${player.money}`);
      }
    }
    return;
  }
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  console.log(
    `      Speler gooit: ${dice1} en ${dice2}. Totaal: ${dice1 + dice2}`
  );
  player.boardPos = (player.boardPos + dice1 + dice2) % board.length;
  if (typeof board[player.boardPos] === "string") {
    switch (board[player.boardPos]) {
      case "start":
        console.log("      Vakje: Start, de speler krijgt 200 euro.");
        player.money += 200;
        break;
      case "fonds":
        console.log("      Vakje: Fonds");
        fonds(player);
        break;
      case "kans":
        console.log("      Vakje: Kans");
        kans(player);
        break;
      case "belasting-200":
        console.log("      Vakje: Belasting, -200 euro");
        player.money -= 200;
        break;
      case "belasting-100":
        console.log("      Vakje: Belasting, -100 euro");
        player.money -= 100;
        break;
      case "station-zuid":
        console.log("      Vakje: Station");
        station("zuid", player);
        break;
      case "station-west":
        console.log("      Vakje: Station");
        station("west", player);
        break;
      case "station-noord":
        console.log("      Vakje: Station");
        station("noord", player);
        break;
      case "station-oost":
        console.log("      Vakje: Station");
        station("oost", player);
        break;
      case "naar gevangenis":
        console.log(
          "      Vakje: Naar Gevangenis, de speler zit nu in de gevangenis."
        );
        player.inPrison = true;
        break;
      case "gevangenis":
        console.log("      Vakje: Gevangenis, er gebeurt niks.");
        break;
      case "parkeren":
        console.log("      Vakje: Vrij Parkeren, er gebeurt niks.");
        break;
    }
  } else {
    console.log(`      Vakje: Straat: ${board[player.boardPos].naam}`);
    straat(player);
  }

  buyHouses(player);

  console.log(`      Geld: ${player.money}`);

  if (player.money < 0) {
    failliet(player);
  }
}

function failliet(currentPlayer: Player) {
  let i;
  for (i = 0; i < 6; i++) {
    currentPlayer.ownedNumbers.forEach((number) => {
      if (currentPlayer.money < 0) {
        if (typeof board[number] === "object") {
          const street = board[number];
          if (street.tier === 0 && !street.geliquideerd) {
            console.log(
              `      De speler liquideerd ${street.naam} voor ${
                street.aankoopprijs / 2
              } euro.`
            );
            street.geliquideerd = true;
            currentPlayer.money += street.aankoopprijs / 2;
          } else if (street.tier > 0) {
            console.log(
              `      De speler verkocht een huis/hotel op ${street.naam} voor ${
                street.huisprijs / 2
              } euro.`
            );
            street.tier--;
            currentPlayer.money += street.huisprijs / 2;
          }
        }
      }
    });
  }

  if (currentPlayer.money < 0) {
    console.log("      De speler is falliet... :(");
    players.forEach((player) => {
      if (player.ownedNumbers.includes(currentPlayer.boardPos)) {
        console.log(
          "      Alle bezittingen van de speler gaan naar speler nummer " +
            player.number
        );
        currentPlayer.ownedNumbers.forEach((ownedNumber) => {
          player.ownedNumbers.push(ownedNumber);
        });
        currentPlayer.ownedNumbers = [];
      }
    });
    currentPlayer.failliet = true;
  }
}
