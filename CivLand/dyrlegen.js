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

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref ("kunde");

    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
          <h4> Kunde nr. ${kundenr}</h4>
          <ul>
           <li>${info.fornavn} ${info.etternavn}
           <li> Mobil ${info.mobil}
           <li> epost ${info.epost}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder);

}