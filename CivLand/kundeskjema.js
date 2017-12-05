function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBZSRcIyCsrI0Cg8vgR5wBIdsUkNf6hZpM",
        authDomain: "civcountries-4de24.firebaseapp.com",
        databaseURL: "https://civcountries-4de24.firebaseio.com",
        projectId: "civcountries-4de24",
        storageBucket: "civcountries-4de24.appspot.com",
        messagingSenderId: "886161130928"
    };
    firebase.initializeApp(config);
    let spanKunder = document.getElementById("kundevelger")
    let divDyr = document.getElementById("dyr");

    let ref = firebase.database().ref("kunde");

    ref.once("value").
        then(function (snapshot) {
            let kundene = snapshot.val();
            if (kundene) {
                let dropBox = makeDrop(kundene);
                spanKunder.innerHTML = dropBox;

                let dropKunde = document.getElementById("kundenr");
                dropKunde.addEventListener("click", visDyr);
            }
        });
    function visDyr(e) {
        let valgt = +document.getElementById("kundenr").value;
        let ref = firebase.database().ref("dyr").orderByChild("kundenr").equalTo(valgt);
        ref.once("value").then(function (snapshot) {
            let dyrene = snapshot.val();
            if (dyrene) {
                let dyrnr = Object.keys(dyrene);
                let dyrliste = `<ol>` +
                    dyrnr.map(e => `<li>${dyrene[e].navn} ${dyrene[e].art}</li>`).join("")
                    + `</ol>`;
                divDyr.innerHTML = dyrliste;
            }
        });
    }
    function makeDrop(kunder) {
        let box = `<select id="kundenr">`;
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option value="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }


}