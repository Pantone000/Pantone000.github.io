function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBwRbtEH5oSHV1lscMuU84kUMJdT-i3GkY",
        authDomain: "proveuke6.firebaseapp.com",
        databaseURL: "https://proveuke6.firebaseio.com",
        projectId: "proveuke6",
        storageBucket: "proveuke6.appspot.com",
        messagingSenderId: "263677610238"
      };
    firebase.initializeApp(config);

    let divListe = document.getElementById("innlegg");
    let ref = firebase.database().ref ("innlegg");

    function visInnleggnr(snapshot) {
        let innleggnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
          <h4>  ${innleggnr}</h4>
          <ul>
          <li> ${info.medlemnr}
           <li> ${info.melding}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visInnleggnr);
}