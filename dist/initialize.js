"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGame = exports.stations = exports.players = void 0;
const player_1 = __importDefault(require("./player"));
const startingMoney = 1500;
const player1ai = {
    buyStation: "no",
    auctionMaxPrice: "dontBuy",
    buyStreet: "no",
    buyHouse: "no",
};
const player2ai = {
    buyStation: "no",
    auctionMaxPrice: "dontBuy",
    buyStreet: "no",
    buyHouse: "no",
};
const player3ai = {
    buyStation: "no",
    auctionMaxPrice: "dontBuy",
    buyStreet: "no",
    buyHouse: "no",
};
const player4ai = {
    buyStation: "no",
    auctionMaxPrice: "dontBuy",
    buyStreet: "no",
    buyHouse: "no",
};
exports.players = [
    new player_1.default(1, startingMoney, player1ai),
    new player_1.default(2, startingMoney, player2ai),
    new player_1.default(3, startingMoney, player3ai),
    new player_1.default(4, startingMoney, player4ai),
];
exports.stations = [
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
function initializeGame() {
    console.log("Het spel is aan het laden...");
    let random = Math.floor(Math.random() * buyStationAiOptions.length);
    player1ai.buyStation = buyStationAiOptions[random];
    random = Math.floor(Math.random() * auctionMaxPriceAiOptions.length);
    player1ai.auctionMaxPrice = auctionMaxPriceAiOptions[random];
    random = Math.floor(Math.random() * buyStreetAiOptions.length);
    player1ai.buyStreet = buyStreetAiOptions[random];
    random = Math.floor(Math.random() * buyHouseAiOptions.length);
    player1ai.buyHouse = buyHouseAiOptions[random];
    random = Math.floor(Math.random() * buyStationAiOptions.length);
    player2ai.buyStation = buyStationAiOptions[random];
    random = Math.floor(Math.random() * auctionMaxPriceAiOptions.length);
    player2ai.auctionMaxPrice = auctionMaxPriceAiOptions[random];
    random = Math.floor(Math.random() * buyStreetAiOptions.length);
    player2ai.buyStreet = buyStreetAiOptions[random];
    random = Math.floor(Math.random() * buyHouseAiOptions.length);
    player2ai.buyHouse = buyHouseAiOptions[random];
    random = Math.floor(Math.random() * buyStationAiOptions.length);
    player3ai.buyStation = buyStationAiOptions[random];
    random = Math.floor(Math.random() * auctionMaxPriceAiOptions.length);
    player3ai.auctionMaxPrice = auctionMaxPriceAiOptions[random];
    random = Math.floor(Math.random() * buyStreetAiOptions.length);
    player3ai.buyStreet = buyStreetAiOptions[random];
    random = Math.floor(Math.random() * buyHouseAiOptions.length);
    player3ai.buyHouse = buyHouseAiOptions[random];
    random = Math.floor(Math.random() * buyStationAiOptions.length);
    player4ai.buyStation = buyStationAiOptions[random];
    random = Math.floor(Math.random() * auctionMaxPriceAiOptions.length);
    player4ai.auctionMaxPrice = auctionMaxPriceAiOptions[random];
    random = Math.floor(Math.random() * buyStreetAiOptions.length);
    player4ai.buyStreet = buyStreetAiOptions[random];
    random = Math.floor(Math.random() * buyHouseAiOptions.length);
    player4ai.buyHouse = buyHouseAiOptions[random];
}
exports.initializeGame = initializeGame;
//# sourceMappingURL=initialize.js.map