import Player, { ai } from "./player";

const player1ai: ai = {
  buyStation: "2boughtOrLess",
  auctionMaxPrice: "50PercentMore",
  buyStreet: "no",
  buyHouse: "no",
};

const player2ai: ai = {
  buyStation: "noneBought",
  auctionMaxPrice: "double",
  buyStreet: "oneIsNotAlreadyOwned",
  buyHouse: "upTo3",
};

const player3ai: ai = {
  buyStation: "1boughtOrLess",
  auctionMaxPrice: "triple",
  buyStreet: "oneIsNotAlreadyOwned",
  buyHouse: "always",
};

const player4ai: ai = {
  buyStation: "2boughtOrLess",
  auctionMaxPrice: "10PercentMore",
  buyStreet: "always",
  buyHouse: "always",
};

export const players: [Player, Player, Player, Player] = [
  new Player(1, 1500, player1ai),
  new Player(2, 1500, player2ai),
  new Player(3, 1500, player3ai),
  new Player(4, 1500, player4ai),
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
