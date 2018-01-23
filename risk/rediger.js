function setup() {
    var config = {
        apiKey: "AIzaSyCE20eLzaxjWN5ZmTJGvHsldShjJfq-JcE",
        authDomain: "risk-b960b.firebaseapp.com",
        databaseURL: "https://risk-b960b.firebaseio.com",
        projectId: "risk-b960b",
        storageBucket: "risk-b960b.appspot.com",
        messagingSenderId: "347698071193"
    };
    firebase.initializeApp(config);

    let database = firebase.database();

    let inpLand = document.getElementById("land");
    let inpRegion = document.getElementById("region");

    let btnLagreLand = document.getElementById("lagreland");
    btnLagreLand.addEventListener("click", lagreLand);

    let inpKort = document.getElementById("kort");
    let inpAntallNye = document.getElementById("antallnye");

    let btnLagreKort = document.getElementById("lagrekort");
    btnLagreKort.addEventListener("click", lagreKort);

    let inpBruker = document.getElementById("bruker");
    let inpNavn = document.getElementById("navn");
    let inpFarge = document.getElementById("farge");
    let inpAlder = document.getElementById("alder");

    let btnLagreSpiller = document.getElementById("lagrespiller");
    btnLagreSpiller.addEventListener("click", lagreSpiller);

    function lagreLand(e) {
        let land = inpLand.value;
        let kortid = inpRegion.value;
        let ref = database.ref("land/" + land);
        ref.set({ kortid });
    }

    function lagreKort(e) {
        let kort = inpKort.value;
        let antallnye = inpAntallNye.value;
        let ref = database.ref("kort/" + kort);
        ref.set({ antallnye });


    }
    function lagreSpiller(e) {
        let bruker = inpBruker.value;
        let navn = inpNavn.value;
        let farge = inpFarge.value;
        let alder = inpAlder.value;
        let ref = database.ref("spiller/" + bruker);
        ref.set({ alder,farge,navn });
    }
}