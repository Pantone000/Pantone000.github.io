// @ts-check
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

    let divListe = document.getElementById("bestilling");
    let ref = firebase.database().ref("bestilling");

    let vareliste = [];

    function visBestilling(snapshot) {
        let bestillingnr = snapshot.key;
        let info = snapshot.val();
        let vare = vareliste[info.varenr];
        divListe.innerHTML += `
            <div>
              <h4>Bestilling: ${bestillingnr}</h4>
              <ul>
               <li>vare: ${vare.varenavn}
               <li>antall: ${info.antall}
              </ul>
            </div>
          `;
    }

    setTimeout(() => {
        ref.on("child_added", visBestilling);
      }, 100);

    let ref2 = firebase.database().ref("vare");

  function hentvare(snapshot) {
    let vareid = snapshot.key;
    let info = snapshot.val();
    vareliste[vareid] = info;

  }
  ref2.on("child_added", hentvare);

  let inpAntall = document.getElementById("antall");
  let inpVarenr = document.getElementById("varenr");


  let btnLagreBestill = document.getElementById("bestill");
  btnLagreBestill.addEventListener("click", lagreBestill);

  function lagreBestill(e) {
    let antall = inpAntall.value;
    let varenr = inpVarenr.value;
    let ref = firebase.database().ref("bestilling/");
    ref.push({ varenr , antall });
  }
}  