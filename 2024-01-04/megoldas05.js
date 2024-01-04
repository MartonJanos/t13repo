// Név: Kapuvári Márton János
// Csoport: Team13
// HTML ismeret: 99.8%
// CSS ismeret: 99.8%
// JavaScript ismeret: 7.81%

let osztando = Number(prompt("Adj meg egy osztandót!"));
let oszto = Number(prompt("Adj meg egy osztót! (Lehetőleg egy, az osztandónál kisebbet!)"));

if (osztando % oszto === 0) {
    document.write(`${oszto} <b>megvan maradék nélkül</b> ${osztando} számban, <b>${osztando/oszto}</b> hányadossal.`);
}

else if (osztando % oszto !== 0){
    document.write(`${oszto} <b>nincs meg maradék nélkül</b> ${osztando} számban. Az egész hányados <b>${Math.floor(osztando/oszto)}</b>, a maradék <b>${osztando % oszto}.</b>`)
}