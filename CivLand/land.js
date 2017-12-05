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
    let ref = firebase.database().ref ("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);

}