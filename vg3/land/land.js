// @ts-check
class Land {
    constructor(navn, befolkning, hovedstad, bnp, areal, hbef) {
        this.navn = navn;
        this.befolkning = befolkning;
        this.hovedstad = hovedstad;
        this.bnp = bnp;
        this.areal = areal;
        this.hbef = hbef;
    }
}

/*const landListe = [
    new Land("Norge", 5.3, "Oslo", 2, 300, 0.6),
    new Land("Sverige", 9.3, "Stockholm", 2, 300, 0.6),
    new Land("Danmark", 5.5, "København", 2, 300, 0.6),
    new Land("Finland", 5.2, "Helsinki", 2, 300, 0.6),
    new Land("Island", 0.3, "Reykjavik", 2, 300, 0.6),
];*/

function setup() {
    let btnTegn = document.getElementById("tegn");
    let selL1 = document.getElementById("land1");
    let selL2 = document.getElementById("land2");
    let selL3 = document.getElementById("land3");
    let selL4 = document.getElementById("land4");
    let divMain = document.getElementById("main");
    let divGrafikk = document.getElementById("grafikk");
    let divOversikt = document.getElementById("oversikt");
    let btnLagre = document.getElementById("lagre");
    let inpNavn = document.getElementById("navn");
    let inpBefolkning = document.getElementById("befolkning");
    // ... flere linjer
    btnLagre.addEventListener("click", lagreData);
    btnTegn.addEventListener("click", visGrafisk);


    let landListe = new Map();
    var land = new Land("Norge", 5.3, "Oslo", 2, 300, 0.6)
    landListe.set("Norge", land);
    var land = new Land("Sverige", 8.3, "Stockholm", 2, 300, 1.6)
    landListe.set("Sverige", land);

    visListe();

    function lagreData() {
        let navn = inpNavn.value;
        let befolkning = inpBefolkning.value;
        //  .. flere linjer
        let land = new Land(navn, befolkning);
        landListe.set(navn, land);
        visListe();
    }

    function visGrafisk() {
        let l1 = selL1.value;
        let l2 = selL2.value;
        let l3 = selL3.value;
        let l4 = selL4.value;
        if (l1 === l2 && l3 === l4 && l2 === l3) {
            alert("Velg minst to land");
            return;
        }
        let liste = new Set([l1, l2, l3, l4]);
        divGrafikk.innerHTML = "";
        let max = 0;
        liste.forEach(navn => {
            let land = landListe.get(navn);
            if (land.befolkning > max) max = land.befolkning;
        })
        let nyListe = Array.from(liste).map(navn => landListe.get(navn));
        let sortertListe = Array.from(nyListe).map(e => (e)).sort((a, b) => b.befolkning - a.befolkning);
        console.log(sortertListe);
        sortertListe.forEach(e => {
            lagRunning(e, max);
        })

    }

    /**
     * Lager en running som tilsvarer bef. i et valgt land
     * @param {Land} land   Navn på et land som skal finnes i landListe
     * @param {number} max  maksimum bef for valgte land
     */
    function lagRunning(land, max) {
        let radius = Math.sqrt(200 * 200 * (+land.befolkning / max));
        let sirkel = document.createElement("div");
        sirkel.className = "sirkel";
        divGrafikk.appendChild(sirkel);
        sirkel.style.width = sirkel.style.height = radius + "px";

    }


    function visListe() {
        // let s = landListe.map(l => `<option>${l.navn}</option>`).join("");

        let s = "";
        landListe.forEach(land => {
            s += `<option>${land.navn}</option>`;
        })
        /*
        for (let l of landListe) {
            s += `<option>${l.navn}</option>`;
        }
        */
        selL1.innerHTML = selL2.innerHTML = selL3.innerHTML = selL4.innerHTML = s;
    }
}
