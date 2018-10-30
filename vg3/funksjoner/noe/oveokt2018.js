//@ts-check

class deltaker {
    constructor(navn, alder, kjonn, loype) {
        this.navn = navn;
        this.alder = alder;
        this.kjonn = kjonn;
        this.loype = loype;
    }
}

function setup() {
    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let slcKjonn = document.getElementById("kjonn");
    let slcLoype = document.getElementById("loype");
    let btnLagre = document.getElementById("registrer");
    let divShow = document.getElementById("show")

    btnLagre.addEventListener("click", lagreDeltaker)

    let deltakere = [ ];

    function lagreDeltaker() {
        let navn = inpNavn.value;
        let alder = inpAlder.value;
        let kjonn = slcKjonn.value;
        let loype = slcLoype.value;
        let d = new deltaker(navn,alder,kjonn,loype);
        deltakere.push(d);
        lagSkjemaDeltakere();
    }

    function lagSkjemaDeltakere(){
        divShow.innerHTML = "";
        for (let i=0; i<deltaker.length; i++){
            let d = deltakere[i];
            divShow.innerHTML += d.navn + " " + d.alder + " " + d.kjonn + " " + d.loype + "<br>";
        }
    }
}