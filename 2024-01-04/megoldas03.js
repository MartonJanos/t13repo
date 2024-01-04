// Név: Kapuvári Márton János
// Csoport: Team13
// HTML ismeret: 99.8%
// CSS ismeret: 99.8%
// JavaScript ismeret: 7.81%

let maxErt = Number(prompt("Adj meg egy maximális értéket!"));

let paros = 2 * (Math.round(Math.random() * (maxErt / 2)));
document.write(`<b>${paros}</b> egy 0 és ${maxErt} közé eső páros szám.`);