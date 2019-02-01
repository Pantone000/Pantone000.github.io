//@ts-check
class Planet {
    constructor(navn, baneradius, periode, diameter, banefart, masse, farge) {
        this.navn = navn;
        this.baneradius = baneradius;
        this.periode = periode;
        this.diameter = diameter;
        this.banefart = banefart;
        this.masse = masse;
        this.farge = farge;
    }
}

function setup() {
    let btnTegn = document.getElementById("tegn");
    let selP1 = document.getElementById("planet1");
    let selP2 = document.getElementById("planet2");
    let selP3 = document.getElementById("planet3");
    let selP4 = document.getElementById("planet4");
    let divGrafikk = document.getElementById("grafikk");
    let inpFarge = document.getElementById("farge");
    let btnLagre = document.getElementById("lagre");
    let inpNavn = document.getElementById("navn");
    let inpBRadius = document.getElementById("baneradius");
    let inpPerioder = document.getElementById("periode");
    let inpDiameter = document.getElementById("diameter");
    let inpBFart = document.getElementById("banefart");
    let inpMasse = document.getElementById("masse");

    btnLagre.addEventListener("click", lagreData);
    btnTegn.addEventListener("click", visGrafisk);


    let planetListe = new Map();
    var planet = new Planet( "Merkur", 57.91, 0.24, 4879,   47.8 ,  0.33, "grey")
    planetListe.set("Merkur", planet);
    var planet = new Planet("Venus",  108.2, 0.615, 12104,  35.0 ,  4.87, "yellow")
    planetListe.set("Venus", planet);
    var planet = new Planet( "Tellus", 149.6, 1.00, 12742,  29.8 ,  5.97, "blue")
    planetListe.set("Tellus", planet);
    var planet = new Planet("Mars",   227.9, 1.88, 6779,   24.1 ,  0.642, "red")
    planetListe.set("Mars", planet);
    var planet = new Planet("Jupiter",778.5, 11.86, 139822, 13.0 ,  1898, "orange")
    planetListe.set("Jupiter", planet);

    visListe();

    function lagreData() {
        let navn = inpNavn.value;
        let bRadius = inpBRadius.value;
        let perioder = inpPerioder.value;
        let diameter = inpDiameter.value;
        let bFart = inpBFart.value;
        let masse = inpMasse.value;
        let farge = inpFarge.value
        let planet = new Planet(navn, bRadius, perioder, diameter, bFart, masse, farge);
        planetListe.set(navn, planet,);
        visListe();
    }

    function visGrafisk() {
        let p1 = selP1.value;
        let p2 = selP2.value;
        let p3 = selP3.value;
        let p4 = selP4.value;
        if (p1 === p2 && p3 === p4 && p2 === p3) {
            alert("Velg minst to planeter");
            return;
        }
        let liste = new Set([p1, p2, p3, p4]);
        divGrafikk.innerHTML = "";
        let max = 0;
        liste.forEach(navn => {
            let planet = planetListe.get(navn);
            if (planet.diameter > max) max = planet.diameter;
        })
        let nyListe = Array.from(liste).map(navn => planetListe.get(navn));
        let sortertListe = Array.from(nyListe).map(e => (e)).sort((a, b) => b.diameter - a.diameter);
        console.log(sortertListe);
        sortertListe.forEach(e => {
            lagRunning(e, max,);
        })

    }

    function lagRunning(planet, max) {
        let radius = Math.sqrt(200 * 200 * (+planet.diameter / max));
        let sirkel = document.createElement("div");
        sirkel.className = "sirkel";
        divGrafikk.appendChild(sirkel);
        sirkel.style.width = sirkel.style.height = radius + "px";
        sirkel.style.backgroundColor = planet.farge;
        sirkel.innerHTML = `${planet.navn} <br> ${planet.masse} * 10^24 kg <br> Banefart:${planet.banefart} km/s `;
    }

    function visListe() {
        let s = "";
        planetListe.forEach(planet => {
            s += `<option>${planet.navn}</option>`;
        })

        selP1.innerHTML = selP2.innerHTML = selP3.innerHTML = selP4.innerHTML = s;
    }
}