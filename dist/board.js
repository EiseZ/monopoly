"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyHouses = exports.straat = exports.station = exports.kans = exports.fonds = exports.board = exports.streets = void 0;
const json = __importStar(require("./streets.json"));
const initialize_1 = require("./initialize");
exports.streets = json.streets;
exports.board = [
    "start",
    exports.streets[0],
    "fonds",
    exports.streets[1],
    "belasting-200",
    "station-zuid",
    exports.streets[2],
    "kans",
    exports.streets[3],
    exports.streets[4],
    "gevangenis",
    exports.streets[5],
    "stroom",
    exports.streets[6],
    exports.streets[7],
    "station-west",
    exports.streets[8],
    "fonds",
    exports.streets[9],
    exports.streets[10],
    "parkeren",
    exports.streets[11],
    "kans",
    exports.streets[12],
    exports.streets[13],
    "station-noord",
    exports.streets[14],
    exports.streets[15],
    "water",
    exports.streets[16],
    "naar gevangenis",
    exports.streets[17],
    exports.streets[18],
    "fonds",
    exports.streets[19],
    "station-oost",
    "kans",
    exports.streets[20],
    "belasting-100",
    exports.streets[21],
];
function fonds(currentPlayer) {
    const fondsKaart = Math.floor(Math.random() * 13) + 1;
    switch (fondsKaart) {
        case 1:
            console.log("      Kaart: Een vergissing van de bank in uw voordeel, u ontvangt 200 euro.");
            currentPlayer.money += 200;
            break;
        case 2:
            console.log("      Kaart: U erft 100 euro");
            currentPlayer.money += 100;
            break;
        case 3:
            console.log("      Kaart: Door verkoop van effecten ontvangt u 50 euro.");
            currentPlayer.money += 50;
            break;
        case 4:
            console.log("      Kaart: U ontvangt rente van 7% preferente aandelen, 25 euro.");
            currentPlayer.money += 25;
            break;
        case 5:
            console.log("      Kaart: U bent jarig en ontvangt van iedere speler 10 euro.");
            currentPlayer.money += 10;
            initialize_1.players.forEach((player) => {
                if (player != currentPlayer) {
                    player.money -= 10;
                }
            });
            break;
        case 6:
            console.log("      Kaart: U hebt de tweede prijs in een schoonheidswedstrijd gewonnen en ontvangt 10 euro.");
            currentPlayer.money += 10;
            break;
        case 7:
            console.log("      Kaart: Restitutie inkomstenbelasting, u ontvangt 20 euro.");
            currentPlayer.money += 20;
            break;
        case 8:
            console.log("      Kaart: Restitutie inkomstenbelasting, u ontvangt 100 euro.");
            currentPlayer.money += 100;
            break;
        case 9:
            console.log("      Kaart: Betaal ƒ 10 boete of neem een Kanskaart. (Random gekozen)");
            const random = Math.floor(Math.random() * 2);
            if (random === 0) {
                currentPlayer.money -= 10;
            }
            else {
                kans(currentPlayer);
            }
            break;
        case 10:
            console.log("      Kaart: Betaal uw doktersrekening, 50 euro.");
            currentPlayer.money -= 50;
            break;
        case 11:
            console.log("      Kaart: Betaal uw verzekeringspremie, 50 euro.");
            currentPlayer.money -= 50;
            break;
        case 12:
            console.log("      Kaart: Betaal het hospitaal, 100 euro.");
            currentPlayer.money -= 100;
            break;
        case 13:
            console.log("      Kaart: Ga terug naar Dorpsstraat.");
            currentPlayer.boardPos = 1;
            break;
    }
}
exports.fonds = fonds;
function kans(currentPlayer) {
    const kansKaart = Math.floor(Math.random() * 13) + 1;
    switch (kansKaart) {
        case 1:
            console.log("      Kaart: Uw bouwverzekering vervalt, u ontvangt 150 euro.");
            currentPlayer.money += 150;
            break;
        case 2:
            console.log("      Kaart: U hebt een kruiswoordpuzzel gewonnen en ontvangt 100 euro.");
            currentPlayer.money += 100;
            break;
        case 3:
            console.log("      Kaart: De bank betaalt u 50 euro dividend.");
            currentPlayer.money += 50;
            break;
        case 4:
            console.log("      Kaart: Boete voor te snel rijden 15 euro.");
            currentPlayer.money -= 15;
            break;
        case 5:
            console.log("      Kaart: Aangehouden wegens dronkenschap 20 euro boete.");
            currentPlayer.money -= 20;
            break;
        case 6:
            console.log("      Kaart: Betaal schoolgeld 150 euro.");
            currentPlayer.money -= 150;
            break;
        case 7:
            console.log("      Kaart: U wordt aangeslagen voor straatgeld. 40 euro per huis, 115 euro per hotel.");
            currentPlayer.money -=
                currentPlayer.houses * 40 + currentPlayer.hotels * 115;
            break;
        case 8:
            console.log("      Kaart: Repareer uw huizen. Betaal voor elk huis 25 euro, betaal voor elk hotel 100 euro.");
            currentPlayer.money -=
                currentPlayer.houses * 25 + currentPlayer.hotels * 100;
            break;
        case 9:
            console.log("      Kaart: Ga drie plaatsen terug.");
            currentPlayer.boardPos -= 3;
            break;
        case 10:
            console.log('      Kaart: Ga verder naar Barteljorisstraat. Indien u langs "Start" komt, ontvangt u 200.');
            if (currentPlayer.boardPos > 11) {
                currentPlayer.money += 200;
            }
            currentPlayer.boardPos = 11;
            break;
        case 11:
            console.log('      Kaart: Reis naar Station West. Indien u langs "Start" komt, ontvangt u 200.');
            if (currentPlayer.boardPos > 15) {
                currentPlayer.money += 200;
            }
            currentPlayer.boardPos = 15;
            break;
        case 12:
            console.log('      Kaart: Ga verder naar Herestraat. Indien u langs "Start" komt, ontvangt u 200.');
            if (currentPlayer.boardPos > 25) {
                currentPlayer.money += 200;
            }
            currentPlayer.boardPos = 25;
            break;
        case 13:
            console.log("      Kaart: Ga verder naar Kalverstraat.");
            currentPlayer.boardPos = 39;
            break;
    }
}
exports.kans = kans;
function station(dir, currentPlayer) {
    initialize_1.stations.forEach((station) => {
        if (station.dir === dir) {
            if (station.owner != null && station.owner != currentPlayer) {
                switch (station.owner.stationAmount) {
                    case 1:
                        console.log(`      Speler ${station.owner.number} bezit dit station, de speler betaalt 25 euro aan hem.`);
                        currentPlayer.money -= 25;
                        station.owner.money += 25;
                        break;
                    case 2:
                        console.log(`      Speler ${station.owner.number} bezit dit station, de speler betaalt 50 euro aan hem.`);
                        currentPlayer.money -= 50;
                        station.owner.money += 50;
                        break;
                    case 3:
                        console.log(`      Speler ${station.owner.number} bezit dit station, de speler betaalt 100 euro aan hem.`);
                        currentPlayer.money -= 100;
                        station.owner.money += 100;
                        break;
                    case 4:
                        console.log(`      Speler ${station.owner.number} bezit dit station, de speler betaalt 200 euro aan hem.`);
                        currentPlayer.money -= 200;
                        station.owner.money += 200;
                        break;
                }
            }
            else {
                if (station.owner == currentPlayer) {
                    console.log("      De speler is de eigenaar van dit station er gebeurt niks.");
                }
                let boughtStations = 0;
                initialize_1.stations.forEach((station) => {
                    if (station.owner != null) {
                        boughtStations++;
                    }
                });
                switch (currentPlayer.ai.buyStation) {
                    case "no":
                        switch (dir) {
                            case "noord":
                                auction(currentPlayer, 25, 100, dir);
                                break;
                            case "oost":
                                auction(currentPlayer, 35, 100, dir);
                                break;
                            case "zuid":
                                auction(currentPlayer, 5, 100, dir);
                                break;
                            case "west":
                                auction(currentPlayer, 15, 100, dir);
                                break;
                        }
                        break;
                    case "1boughtOrLess":
                        if (boughtStations <= 1) {
                            currentPlayer.money -= station.aankoopprijs;
                            station.owner = currentPlayer;
                            currentPlayer.stationAmount++;
                            console.log("      Speler kocht Station-" + dir);
                        }
                        else {
                            auction(currentPlayer, 15, 100, dir);
                        }
                        break;
                    case "2boughtOrLess":
                        if (boughtStations <= 2) {
                            currentPlayer.money -= station.aankoopprijs;
                            station.owner = currentPlayer;
                            currentPlayer.stationAmount++;
                            console.log("      Speler kocht Station-" + dir);
                        }
                        else {
                            auction(currentPlayer, 15, 100, dir);
                        }
                        break;
                    case "3boughtOrLess":
                        if (boughtStations <= 3) {
                            currentPlayer.money -= station.aankoopprijs;
                            station.owner = currentPlayer;
                            currentPlayer.stationAmount++;
                            console.log("      Speler kocht Station-" + dir);
                        }
                        else {
                            auction(currentPlayer, 15, 100, dir);
                        }
                        break;
                }
            }
        }
    });
}
exports.station = station;
function straat(currentPlayer) {
    const streetNumber = currentPlayer.boardPos;
    const street = exports.board[streetNumber];
    if (currentPlayer.ownedNumbers.includes(streetNumber)) {
        console.log("      De speler is de eigenaar van deze straat er gebeurt niks.");
        return;
    }
    else if (initialize_1.players[0].ownedNumbers.includes(streetNumber)) {
        console.log(`      Speler 1 is de eigenaar van deze straat, de speler betaalt ${street.huurprijzen[street.tier]} euro aan diegene.`);
        currentPlayer.money -= street.huurprijzen[street.tier];
        initialize_1.players[0].money += street.huurprijzen[street.tier];
    }
    else if (initialize_1.players[1].ownedNumbers.includes(streetNumber)) {
        console.log(`      Speler 2 is de eigenaar van deze straat, de speler betaalt ${street.huurprijzen[street.tier]} euro aan diegene.`);
        currentPlayer.money -= street.huurprijzen[street.tier];
        initialize_1.players[1].money += street.huurprijzen[street.tier];
    }
    else if (initialize_1.players[2].ownedNumbers.includes(streetNumber)) {
        console.log(`      Speler 3 is de eigenaar van deze straat, de speler betaalt ${street.huurprijzen[street.tier]} euro aan diegene.`);
        currentPlayer.money -= street.huurprijzen[street.tier];
        initialize_1.players[2].money += street.huurprijzen[street.tier];
    }
    else if (initialize_1.players[3].ownedNumbers.includes(streetNumber)) {
        console.log(`      Speler 4 is de eigenaar van deze straat, de speler betaalt ${street.huurprijzen[street.tier]} euro aan diegene.`);
        currentPlayer.money -= street.huurprijzen[street.tier];
        initialize_1.players[3].money += street.huurprijzen[street.tier];
    }
    else {
        if (currentPlayer.money < street.aankoopprijs) {
            console.log(`      De speler heeft niet genoeg geld om de straat te kopen, dus de straat gaat naar de veiling.`);
            return;
        }
        switch (currentPlayer.ai.buyStreet) {
            case "no":
                auction(currentPlayer, streetNumber, street.aankoopprijs);
                break;
            case "ownNotMoreThen10":
                if (currentPlayer.ownedNumbers.length <= 10) {
                    console.log(`      De speler kocht de straat ${street.naam} voor ${street.aankoopprijs} euro.`);
                    currentPlayer.money -= street.aankoopprijs;
                    currentPlayer.ownedNumbers.push(streetNumber);
                }
                else {
                    console.log(`      De speler kocht de straat ${street.naam} niet, dus de straat gaat naar de veiling.`);
                    auction(currentPlayer, streetNumber, street.aankoopprijs);
                }
                break;
            case "ownNotMoreThen15":
                if (currentPlayer.ownedNumbers.length <= 15) {
                    console.log(`      De speler kocht de straat ${street.naam} voor ${street.aankoopprijs} euro.`);
                    currentPlayer.money -= street.aankoopprijs;
                    currentPlayer.ownedNumbers.push(streetNumber);
                }
                else {
                    console.log(`      De speler kocht de straat ${street.naam} niet, dus de straat gaat naar de veiling.`);
                    auction(currentPlayer, streetNumber, street.aankoopprijs);
                }
                break;
            case "ownNotMoreThen5":
                if (currentPlayer.ownedNumbers.length <= 5) {
                    console.log(`      De speler kocht de straat ${street.naam} voor ${street.aankoopprijs} euro.`);
                    currentPlayer.money -= street.aankoopprijs;
                    currentPlayer.ownedNumbers.push(streetNumber);
                }
                else {
                    console.log(`      De speler kocht de straat ${street.naam} niet, dus de straat gaat naar de veiling.`);
                    auction(currentPlayer, streetNumber, street.aankoopprijs);
                }
                break;
            case "always":
                console.log(`      De speler kocht de straat ${street.naam} voor ${street.aankoopprijs} euro.`);
                currentPlayer.money -= street.aankoopprijs;
                currentPlayer.ownedNumbers.push(streetNumber);
                break;
            case "oneIsNotAlreadyOwned":
                let sameColorStreets = [];
                let sameColorStreetsBoardPos = [];
                let buy = true;
                exports.streets.forEach((streetElement) => {
                    if (streetElement.kleur === street.kleur) {
                        sameColorStreets.push(street);
                        exports.board.forEach((element, i) => {
                            if (element == streetElement) {
                                sameColorStreetsBoardPos.push(i);
                            }
                        });
                    }
                });
                initialize_1.players.forEach((player) => {
                    sameColorStreetsBoardPos.forEach((boardPos) => {
                        if (player.ownedNumbers.includes(boardPos)) {
                            buy = false;
                        }
                    });
                });
                if (buy) {
                    console.log(`      De speler kocht de straat ${street.naam} voor ${street.aankoopprijs} euro.`);
                    currentPlayer.money -= street.aankoopprijs;
                    currentPlayer.ownedNumbers.push(streetNumber);
                }
                else {
                    console.log(`      De speler kocht de straat ${street.naam} niet, dus de straat gaat naar de veiling.`);
                    auction(currentPlayer, streetNumber, street.aankoopprijs);
                }
                break;
        }
    }
}
exports.straat = straat;
function auction(playerSelling, buildingNumber, originalPrice, dir) {
    let biddingPrice = 50;
    let playersInAuction = [0, 1, 2, 3];
    playersInAuction = playersInAuction.filter(function (value) {
        return value != playerSelling.number - 1;
    });
    initialize_1.players.forEach((player) => {
        if (player.failliet) {
            playersInAuction = playersInAuction.filter(function (value) {
                return value != player.number - 1;
            });
        }
    });
    console.log(`      Bieden start met ${biddingPrice} euro:`);
    while (playersInAuction.length > 1) {
        initialize_1.players.forEach((subject, i) => {
            if (playersInAuction.includes(i) && subject != playerSelling) {
                switch (subject.ai.auctionMaxPrice) {
                    case "dontBuy":
                        console.log(`         Speler ${i + 1} stopt met bieden.`);
                        playersInAuction = playersInAuction.filter(function (value) {
                            return value != i;
                        });
                        break;
                    case "sameAsNormal":
                        if (biddingPrice <= originalPrice) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "10PercentMore":
                        if (biddingPrice <= originalPrice * 1.1) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "20PercentMore":
                        if (biddingPrice <= originalPrice * 1.2) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "30PercentMore":
                        if (biddingPrice <= originalPrice * 1.3) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "40PercentMore":
                        if (biddingPrice <= originalPrice * 1.4) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "50PercentMore":
                        if (biddingPrice <= originalPrice * 1.5) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "60PercentMore":
                        if (biddingPrice <= originalPrice * 1.6) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "70PercentMore":
                        if (biddingPrice <= originalPrice * 1.7) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "80PercentMore":
                        if (biddingPrice <= originalPrice * 1.8) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "90PercentMore":
                        if (biddingPrice <= originalPrice * 1.9) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "double":
                        if (biddingPrice <= originalPrice * 2) {
                            biddingPrice += 10;
                            console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "triple":
                        if (biddingPrice <= originalPrice * 3) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "quadruple":
                        if (biddingPrice <= originalPrice * 4) {
                            if (playersInAuction.length > 1) {
                                biddingPrice += 10;
                                console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                            }
                            else {
                                console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                            }
                        }
                        else {
                            console.log(`         Speler ${i + 1} stopt met bieden.`);
                            playersInAuction = playersInAuction.filter(function (value) {
                                return value != i;
                            });
                        }
                        break;
                    case "buyAlways":
                        if (playersInAuction.length > 1) {
                            biddingPrice += 10;
                            console.log(`         Speler ${i + 1} bied ${biddingPrice}.`);
                        }
                        else {
                            console.log(`         Speler ${i + 1} wint de veiling voor ${biddingPrice}.`);
                        }
                        break;
                }
            }
        });
        let gavePrice;
        if (playersInAuction.length === 1 && !gavePrice) {
            const winner = initialize_1.players[playersInAuction[0]];
            winner.money -= biddingPrice;
            winner.ownedNumbers.push(buildingNumber);
            gavePrice = false;
            if (typeof exports.board[buildingNumber] === "string" &&
                exports.board[buildingNumber].includes("station")) {
                winner.stationAmount++;
                initialize_1.stations.forEach((station) => {
                    if (station.dir === dir) {
                        station.owner = winner;
                    }
                });
            }
        }
    }
}
function buyHouses(currentPlayer) {
    currentPlayer.ownedNumbers.forEach((number) => {
        if (typeof exports.board[number] === "object") {
            const street = exports.board[number];
            if (exports.board[number].geliquideerd &&
                currentPlayer.money - exports.board[number].huisprijs > 0) {
                console.log(`      De speler koopt ${street.naam} terug van liquidatie voor ${street.aankoopprijs / 2} euro.`);
                currentPlayer.money -= exports.board[number].aankoopprijs;
                exports.board[number].geliquideerd = false;
            }
        }
    });
    switch (currentPlayer.ai.buyHouse) {
        case "no":
            break;
        case "always":
            currentPlayer.ownedNumbers.forEach((number) => {
                if (typeof exports.board[number] === "object") {
                    if (exports.board[number].geliquideerd &&
                        currentPlayer.money - exports.board[number].huisprijs > 0) {
                        console.log(`      De speler koopt ${exports.board[number].naam} terug van liquidatie voor ${exports.board[number].aankoopprijs / 2} euro.`);
                        currentPlayer.money -= exports.board[number].aankoopprijs;
                        exports.board[number].geliquideerd = false;
                    }
                    else if (currentPlayer.money - exports.board[number].huisprijs > 0 &&
                        exports.board[number].tier < 5 &&
                        !exports.board[number].geliquideerd) {
                        console.log(`      De speler kocht een huis op de straat: ${exports.board[number].naam} voor ${exports.board[number].huisprijs} euro. Er staan nu ${exports.board[number].tier + 1} huizen op die straat.`);
                        exports.board[number].tier++;
                        currentPlayer.money - exports.board[number].huisprijs;
                    }
                }
            });
            break;
        case "upTo1":
            currentPlayer.ownedNumbers.forEach((number) => {
                if (typeof exports.board[number] === "object") {
                    if (exports.board[number].geliquideerd &&
                        currentPlayer.money - exports.board[number].huisprijs > 0) {
                        console.log(`      De speler koopt ${exports.board[number].naam} terug van liquidatie voor ${exports.board[number].aankoopprijs / 2} euro.`);
                        currentPlayer.money -= exports.board[number].aankoopprijs;
                        exports.board[number].geliquideerd = false;
                    }
                    else if (currentPlayer.money - exports.board[number].huisprijs > 0 &&
                        exports.board[number].tier < 1 &&
                        !exports.board[number].geliquideerd) {
                        console.log(`      De speler kocht een huis op de straat: ${exports.board[number].naam} voor ${exports.board[number].huisprijs} euro. Er staan nu ${exports.board[number].tier + 1} huizen op die straat.`);
                        exports.board[number].tier++;
                        currentPlayer.money - exports.board[number].huisprijs;
                    }
                }
            });
            break;
        case "upTo2":
            currentPlayer.ownedNumbers.forEach((number) => {
                if (typeof exports.board[number] === "object") {
                    if (exports.board[number].geliquideerd &&
                        currentPlayer.money - exports.board[number].huisprijs > 0) {
                        console.log(`      De speler koopt ${exports.board[number].naam} terug van liquidatie voor ${exports.board[number].aankoopprijs / 2} euro.`);
                        currentPlayer.money -= exports.board[number].aankoopprijs;
                        exports.board[number].geliquideerd = false;
                    }
                    else if (currentPlayer.money - exports.board[number].huisprijs > 0 &&
                        exports.board[number].tier < 2 &&
                        !exports.board[number].geliquideerd) {
                        console.log(`      De speler kocht een huis op de straat: ${exports.board[number].naam} voor ${exports.board[number].huisprijs} euro. Er staan nu ${exports.board[number].tier + 1} huizen op die straat.`);
                        exports.board[number].tier++;
                        currentPlayer.money - exports.board[number].huisprijs;
                    }
                }
            });
            break;
        case "upTo3":
            currentPlayer.ownedNumbers.forEach((number) => {
                if (typeof exports.board[number] === "object") {
                    if (exports.board[number].geliquideerd &&
                        currentPlayer.money - exports.board[number].huisprijs > 0) {
                        console.log(`      De speler koopt ${exports.board[number].naam} terug van liquidatie voor ${exports.board[number].aankoopprijs / 2} euro.`);
                        currentPlayer.money -= exports.board[number].aankoopprijs;
                        exports.board[number].geliquideerd = false;
                    }
                    else if (currentPlayer.money - exports.board[number].huisprijs > 0 &&
                        exports.board[number].tier < 3 &&
                        !exports.board[number].geliquideerd) {
                        console.log(`      De speler kocht een huis op de straat: ${exports.board[number].naam} voor ${exports.board[number].huisprijs} euro. Er staan nu ${exports.board[number].tier + 1} huizen op die straat.`);
                        exports.board[number].tier++;
                        currentPlayer.money - exports.board[number].huisprijs;
                    }
                }
            });
            break;
        case "upTo4":
            currentPlayer.ownedNumbers.forEach((number) => {
                if (typeof exports.board[number] === "object") {
                    if (exports.board[number].geliquideerd &&
                        currentPlayer.money - exports.board[number].huisprijs > 0) {
                        console.log(`      De speler koopt ${exports.board[number].naam} terug van liquidatie voor ${exports.board[number].aankoopprijs / 2} euro.`);
                        currentPlayer.money -= exports.board[number].aankoopprijs;
                        exports.board[number].geliquideerd = false;
                    }
                    else if (currentPlayer.money - exports.board[number].huisprijs > 0 &&
                        exports.board[number].tier < 4 &&
                        !exports.board[number].geliquideerd) {
                        console.log(`      De speler kocht een huis op de straat: ${exports.board[number].naam} voor ${exports.board[number].huisprijs} euro. Er staan nu ${exports.board[number].tier + 1} huizen op die straat.`);
                        exports.board[number].tier++;
                        currentPlayer.money - exports.board[number].huisprijs;
                    }
                }
            });
            break;
        case "ifLessThen20PercentOfMoney":
            currentPlayer.ownedNumbers.forEach((number) => {
                if (typeof exports.board[number] === "object") {
                    if (exports.board[number].geliquideerd &&
                        currentPlayer.money * 0.2 > exports.board[number].huisprijs &&
                        currentPlayer.money - exports.board[number].huisprijs > 0) {
                        console.log(`      De speler koopt ${exports.board[number].naam} terug van liquidatie voor ${exports.board[number].aankoopprijs / 2} euro.`);
                        currentPlayer.money -= exports.board[number].aankoopprijs;
                        exports.board[number].geliquideerd = false;
                    }
                    else if (currentPlayer.money - exports.board[number].huisprijs > 0 &&
                        currentPlayer.money * 0.2 > exports.board[number].huisprijs &&
                        !exports.board[number].geliquideerd) {
                        console.log(`      De speler kocht een huis op de straat: ${exports.board[number].naam} voor ${exports.board[number].huisprijs} euro. Er staan nu ${exports.board[number].tier + 1} huizen op die straat.`);
                        exports.board[number].tier++;
                        currentPlayer.money - exports.board[number].huisprijs;
                    }
                }
            });
            break;
    }
}
exports.buyHouses = buyHouses;
//# sourceMappingURL=board.js.map