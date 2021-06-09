import Player, { ai } from "./player";

const startingMoney = 1500;

const player1ai: ai = {
  buyStation: "no",
  auctionMaxPrice: "dontBuy",
  buyStreet: "no",
  buyHouse: "no",
};

const player2ai: ai = {
  buyStation: "no",
  auctionMaxPrice: "dontBuy",
  buyStreet: "no",
  buyHouse: "no",
};

const player3ai: ai = {
  buyStation: "no",
  auctionMaxPrice: "dontBuy",
  buyStreet: "no",
  buyHouse: "no",
};

const player4ai: ai = {
  buyStation: "no",
  auctionMaxPrice: "dontBuy",
  buyStreet: "no",
  buyHouse: "no",
};

export const players: [Player, Player, Player, Player] = [
  new Player(1, startingMoney, player1ai),
  new Player(2, startingMoney, player2ai),
  new Player(3, startingMoney, player3ai),
  new Player(4, startingMoney, player4ai),
];

export const stations: {
  dir: "noord" | "oost" | "zuid" | "west";
  owner: null | Player;
  aankoopprijs: number;
}[] = [
  { dir: "noord", owner: null, aankoopprijs: 100 },
  { dir: "oost", owner: null, aankoopprijs: 100 },
  { dir: "zuid", owner: null, aankoopprijs: 100 },
  { dir: "west", owner: null, aankoopprijs: 100 },
];

const buyStationAiOptions = [
  "no",
  "noneBought",
  "1boughtOrLess",
  "2boughtOrLess",
  "3boughtOrLess",
];

const auctionMaxPriceAiOptions = [
  "dontBuy",
  "sameAsNormal",
  "10PercentMore",
  "20PercentMore",
  "30PercentMore",
  "40PercentMore",
  "50PercentMore",
  "60PercentMore",
  "70PercentMore",
  "80PercentMore",
  "90PercentMore",
  "double",
  "triple",
  "quadruple",
  "buyAlways",
];

const buyStreetAiOptions = [
  "no",
  "ownNotMoreThen5",
  "ownNotMoreThen10",
  "ownNotMoreThen15",
  "oneIsNotAlreadyOwned",
  "always",
];

const buyHouseAiOptions = [
  "no",
  "always",
  "upTo1",
  "upTo2",
  "upTo3",
  "upTo4",
  "ifLessThen20PercentOfMoney",
];

export function initializeGame() {
  console.log("Het spel is aan het laden...");
  let random = Math.floor(Math.random() * buyStationAiOptions.length);
  // @ts-ignore
  player1ai.buyStation = buyStationAiOptions[random];
  random = Math.floor(Math.random() * auctionMaxPriceAiOptions.length);
  // @ts-ignore
  player1ai.auctionMaxPrice = auctionMaxPriceAiOptions[random];
  random = Math.floor(Math.random() * buyStreetAiOptions.length);
  // @ts-ignore
  player1ai.buyStreet = buyStreetAiOptions[random];
  random = Math.floor(Math.random() * buyHouseAiOptions.length);
  // @ts-ignore
  player1ai.buyHouse = buyHouseAiOptions[random];

  random = Math.floor(Math.random() * buyStationAiOptions.length);
  // @ts-ignore
  player2ai.buyStation = buyStationAiOptions[random];
  random = Math.floor(Math.random() * auctionMaxPriceAiOptions.length);
  // @ts-ignore
  player2ai.auctionMaxPrice = auctionMaxPriceAiOptions[random];
  random = Math.floor(Math.random() * buyStreetAiOptions.length);
  // @ts-ignore
  player2ai.buyStreet = buyStreetAiOptions[random];
  random = Math.floor(Math.random() * buyHouseAiOptions.length);
  // @ts-ignore
  player2ai.buyHouse = buyHouseAiOptions[random];

  random = Math.floor(Math.random() * buyStationAiOptions.length);
  // @ts-ignore
  player3ai.buyStation = buyStationAiOptions[random];
  random = Math.floor(Math.random() * auctionMaxPriceAiOptions.length);
  // @ts-ignore
  player3ai.auctionMaxPrice = auctionMaxPriceAiOptions[random];
  random = Math.floor(Math.random() * buyStreetAiOptions.length);
  // @ts-ignore
  player3ai.buyStreet = buyStreetAiOptions[random];
  random = Math.floor(Math.random() * buyHouseAiOptions.length);
  // @ts-ignore
  player3ai.buyHouse = buyHouseAiOptions[random];

  random = Math.floor(Math.random() * buyStationAiOptions.length);
  // @ts-ignore
  player4ai.buyStation = buyStationAiOptions[random];
  random = Math.floor(Math.random() * auctionMaxPriceAiOptions.length);
  // @ts-ignore
  player4ai.auctionMaxPrice = auctionMaxPriceAiOptions[random];
  random = Math.floor(Math.random() * buyStreetAiOptions.length);
  // @ts-ignore
  player4ai.buyStreet = buyStreetAiOptions[random];
  random = Math.floor(Math.random() * buyHouseAiOptions.length);
  // @ts-ignore
  player4ai.buyHouse = buyHouseAiOptions[random];
}
