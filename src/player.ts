export type ai = {
  buyStation:
    | "no"
    | "noneBought"
    | "1boughtOrLess"
    | "2boughtOrLess"
    | "3boughtOrLess";
  auctionMaxPrice:
    | "dontBuy"
    | "sameAsNormal"
    | "10PercentMore"
    | "20PercentMore"
    | "30PercentMore"
    | "40PercentMore"
    | "50PercentMore"
    | "60PercentMore"
    | "70PercentMore"
    | "80PercentMore"
    | "90PercentMore"
    | "double"
    | "triple"
    | "quadruple"
    | "buyAlways";
  buyStreet:
    | "no"
    | "ownNotMoreThen5"
    | "ownNotMoreThen10"
    | "ownNotMoreThen15"
    | "oneIsNotAlreadyOwned"
    | "always";
  buyHouse:
    | "no"
    | "always"
    | "upTo1"
    | "upTo2"
    | "upTo3"
    | "upTo4"
    | "ifLessThen20PercentOfMoney";
};

export default class Player {
  number: number;
  money: number;
  ai: ai;
  ownedNumbers: number[] = [];
  boardPos: number = 0;
  houses: number = 0;
  hotels: number = 0;
  stationAmount: number = 0;
  inPrison: boolean = false;
  prisonNonDoubleCount: number = 0;
  failliet: boolean = false;
  constructor(number: number, money: number, ai: ai) {
    this.number = number;
    this.money = money;
    this.ai = ai;
  }
}
