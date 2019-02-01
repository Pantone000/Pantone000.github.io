//@ts-check


class Person {
    constructor(navn, alder, adresse) {
        this.navn = navn;
        this.alder = alder
        this.adresse = adresse;
    }
}


function setup() {

    let personListe = [];

    let inpNavn = document.getElementById("navn");
    let inpAdresse = document.getElementById("adresse");
    let inpAlder = document.getElementById("alder");
    let btnLagre = document.getElementById("lagre");
    let divOversikt = document.getElementById("oversikt");

    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let navn = inpNavn.value;
        let alder = inpAlder.value;
        let adresse = inpAdresse.value;
        let person = new Person(navn, alder, adresse)
        personListe.push(person);
        visListe();
    }

    function visListe() {
        let innhold = "<ol>";
        for (let p of personListe) {
            innhold += `<li>Navn:${p.navn} Alder:${p.alder} Adresse:${p.adresse} </li>`;
        }
        innhold = "</ol>";
        divOversikt.innerHTML = innhold;
    }
}