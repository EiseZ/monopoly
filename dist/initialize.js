"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stations = exports.players = void 0;
const player_1 = __importDefault(require("./player"));
const player1ai = {
    buyStation: "2boughtOrLess",
    auctionMaxPrice: "50PercentMore",
    buyStreet: "no",
    buyHouse: "no",
};
const player2ai = {
    buyStation: "noneBought",
    auctionMaxPrice: "double",
    buyStreet: "oneIsNotAlreadyOwned",
    buyHouse: "upTo3",
};
const player3ai = {
    buyStation: "1boughtOrLess",
    auctionMaxPrice: "triple",
    buyStreet: "oneIsNotAlreadyOwned",
    buyHouse: "always",
};
const player4ai = {
    buyStation: "2boughtOrLess",
    auctionMaxPrice: "10PercentMore",
    buyStreet: "always",
    buyHouse: "always",
};
exports.players = [
    new player_1.default(1, 1500, player1ai),
    new player_1.default(2, 1500, player2ai),
    new player_1.default(3, 1500, player3ai),
    new player_1.default(4, 1500, player4ai),
];
exports.stations = [
    { dir: "noord", owner: null, aankoopprijs: 100 },
    { dir: "oost", owner: null, aankoopprijs: 100 },
    { dir: "zuid", owner: null, aankoopprijs: 100 },
    { dir: "west", owner: null, aankoopprijs: 100 },
];
//# sourceMappingURL=initialize.js.map