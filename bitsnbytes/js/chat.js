function setup() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCs7xLq_MLj_2T_3NbB1unQ6CmNXMcSc0U",
    authDomain: "bitsnbytes-3265d.firebaseapp.com",
    databaseURL: "https://bitsnbytes-3265d.firebaseio.com",
    projectId: "bitsnbytes-3265d",
    storageBucket: "bitsnbytes-3265d.appspot.com",
    messagingSenderId: "138106778198"
  };
  firebase.initializeApp(config);

  let divListe = document.getElementById("innlegg");
  let ref = firebase.database().ref("innlegg");

  let brukerliste = [];

  function visInnleggnr(snapshot) {
    let innleggnr = snapshot.key;
    let info = snapshot.val();
    let bruker = brukerliste[info.brukernr];
    divListe.innerHTML += `
        <div>
        <h4> ${bruker.navn}</h4>
        <ul>
        
         <li> ${info.melding}
          </ul>
        </div>
      `;
  }

  setTimeout(() => {
    ref.on("child_added", visInnleggnr);
  }, 100);


  let ref2 = firebase.database().ref("bruker");

  function hentbrukere(snapshot) {
    let brukerid = snapshot.key;
    let info = snapshot.val();
    brukerliste[brukerid] = info;

  }
  ref2.on("child_added", hentbrukere);

  let inpMelding = document.getElementById("melding");
  let inpBruker = document.getElementById("brukernr");


  let btnLagreMelding = document.getElementById("lagremelding");
  btnLagreMelding.addEventListener("click", lagreMelding);

  function lagreMelding(e) {
    let melding = inpMelding.value;
    let brukernr = inpBruker.value;
    let ref = firebase.database().ref("innlegg/");
    ref.push({ brukernr, melding });


  }
}