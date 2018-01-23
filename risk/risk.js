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

  let database = firebase.database ();

  let land = database.ref ("land");
  land.on("child_added" , visland)

  let kort = database.ref ("kort");
  kort.on("child_added" , visland)
}

function visland (snapshot) {
    let land = snapshot.key;
    let divMain = document. getElementById("land");
    divMain.innerHTML += `<div class="box">${land}</div>`
}

function visKort (snapshot) {
    let kort = snapshot.key;
    let divMain = document. getElementById("kort");
    divMain.innerHTML += `<div>${kort}</div>`
}

function visSpiller (snapshot) {
    let spiller = snapshot.key;
    let divMain = document. getElementById("spiller");
    divMain.innerHTML += `<div>
    <br>Navn ${spiller.navn}
    <br>Farge ${spiller.farge}
    <br>Alder ${spiller.alder}
    ${spiller}
    </div>`
}