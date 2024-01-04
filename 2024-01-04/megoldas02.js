// Név: Kapuvári Márton János
// Csoport: Team13
// HTML ismeret: 99.8%
// CSS ismeret: 99.8%
// JavaScript ismeret: 7.81%

let szam = Number(prompt("Add meg a hatványalapot!"));
let hatvany = Number(prompt("Add meg a kitevőt!"));

let eredmeny = Math.pow(szam, hatvany);
document.write(`A(z) ${szam} ${hatvany}. hatványa: <b>${eredmeny}</b>`);