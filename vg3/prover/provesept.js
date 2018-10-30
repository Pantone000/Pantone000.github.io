//@ts-check

class pasasjer {
    constructor(navn, alder, kjonn, vekt) {
        this.navn = navn;
        this.alder = alder;
        this.kjonn = kjonn;
        this.vekt = vekt;
    }
}

function setup() {
    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let slcKjonn = document.getElementById("kjonn");
    let inpVekt = document.getElementById("vekt");
    let btnLagre = document.getElementById("registrer");
    let divShow = document.getElementById("show");
    let btnVisliste = document.getElementById("visliste");

    btnLagre.addEventListener("click", lagrePasasjer);
    btnVisliste.addEventListener("click", vispasasjerer);

    let pasasjerer = [];

    function lagrePasasjer() {
        let navn = inpNavn.value;
        let alder = inpAlder.value;
        let kjonn = slcKjonn.value;
        let vekt = inpVekt.value;
        let d = new pasasjer(navn, alder, kjonn, vekt);
        pasasjerer.push(d);
        lagSkjemaPasajser();
    }

    function lagSkjemaPasajser() {
        divShow.innerHTML = "";
        for (let i = 0; i < pasasjerer.length; i++) {
            let d = pasasjerer[i];
            divShow.innerHTML += d.navn + " " + d.alder + " " + d.kjonn + " " + d.vekt + "<br>";
        }
    }

    function vispasasjerer() {
        if (divShow.style.display === "none") {
            divShow.style.display = "block";
        } else {
            divShow.style.display = "none";
        }
    }

    function toalvekt() {
        let i;
        let finnVekt = inpVekt.value;
        let antallPasasjerer = pasasjer.length
        for (i=0; i<antallPasasjerer; i+=1){
            if(pasasjer[i].vekt > 2500){
                alert("For mye vekt");
            }
        }
    }
}