//@ts-check

class Person {
    constructor(navn, alder, dager, pris, rabat) {
        this.navn = navn;
        this.alder = alder
        this.dager = dager;
        this.pris = pris;
        this.rabat = rabat;
    }
}

function setup() {

    let personListe = [];

    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let inpDager = document.getElementById("dager");
    let btnBestill = document.getElementById("bestill");
    let divOversikt = document.getElementById("oversikt");

    btnBestill.addEventListener("click", finnPris);


    function finnPris() {
        let dager = inpDager.value;
        let alder = inpAlder.value;
        let navn = inpNavn.value;
        let rabat = 0;
        let pris = 0;
        if (alder <= 12) {
            pris = dager * 100;
        } else {
            pris = dager * 200;
        }
        if (pris > 1000 && alder > 12) {
            rabat = pris - 1000;
            pris = 1000;
        }
        if (pris > 500 && alder <= 12) {
            rabat = pris - 500;
            pris = 500;
        }
        if (dager > 7 || dager < 1) {
            alert("Antall kan ikke være større enn 7");
            return;
        }
        if (alder < 1 || alder > 130) {
            alert("ugyldig alder");
            return;
        }
        let person = new Person(navn, alder, dager, pris, rabat);
        personListe[0] = person;
        visListe();
    }

    function visListe() {
        let innhold = "<ol>";
        for (let p of personListe) {
            innhold += `<li>Navn:${p.navn} Alder:${p.alder} Dager:${p.dager} Pris:${p.pris} rabat:${p.rabat} </li>`;
        }
        innhold += "</ol>";
        divOversikt.innerHTML = innhold;
    }
}

