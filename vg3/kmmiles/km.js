//@ts-check

function setup() {
    let outMiles = document.getElementById("miles");
    let inpKm = document.getElementById("km");
    let btnLagre = document.getElementById("gjorom");

    btnLagre.addEventListener("click", lagreKm);

    function lagreKm(e) {
        let km = inpKm.valueAsNumber;
        let miles = km*0.62;
        outMiles.innerHTML = miles.toFixed(2) ;
    }
}