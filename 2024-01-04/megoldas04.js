// Név: Kapuvári Márton János
// Csoport: Team13
// HTML ismeret: 99.8%
// CSS ismeret: 99.8%
// JavaScript ismeret: 7.81%

let eletkor = Number(prompt("Add meg az illető életkorát!"));

if (eletkor > 120) {
    document.write("A te embered (nagy valószínűséggel) már <b>alulról szagolja az ibolyát.</b>");
}

else if (eletkor < 0) {
    document.write("Ez az ember jelenleg még <b>valamelyik szülőjében tartózkodik.</b>");
}

else if (eletkor >= 0 && eletkor <= 6) {
    document.write(`A(z) ${eletkor} éves ember a <b>kisgyermekkorban</b> van.`);
}

else if (eletkor > 6 && eletkor <= 12) {
    document.write(`A(z) ${eletkor} éves ember a <b>gyermekkorát</b> éli.`);
}

else if (eletkor > 12 && eletkor <= 16) {
    document.write(`A(z) ${eletkor} éves ember már <b>kamaszkorba</b> lépett.`);
}

else if (eletkor > 16 && eletkor <= 20) {
    document.write(`A(z) ${eletkor} éves ember az <b>ifjúkorát</b> tölti éppen.`);
}

else if (eletkor > 20 && eletkor <= 30) {
    document.write(`A(z) ${eletkor} éves ember <b>fiatal felnőttkorú.</b>`);
}

else if (eletkor > 30 && eletkor <= 60) {
    document.write(`A(z) ${eletkor} éves ember <b>felnőttkorúnak</b> számít.`);
}

else if (eletkor > 60 && eletkor <= 120) {
    document.write(`A(z) ${eletkor} éves emberre az <b>aggkor</b> jellemző.`);
}

else {
    document.write("Hibás bemenet! Kérlek, csak számot írj be! (Tizedestörtet is lehet!)");
}