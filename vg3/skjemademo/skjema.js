// @ts-check

function setup() {

  let outMelding = document.querySelector("#melding");
  let inpNavn = document.getElementById("navn");
  let inpAlder = document.getElementById("alder");
  let inpMobil = document.getElementById("mobil");
  let inpEpost = document.getElementById("epost");
  let inpAdresse = document.getElementById("adresse");
  let btnLagre = document.getElementById("lagre");

  btnLagre.addEventListener("click", lagreNavn);

  function lagreNavn(e) {
      let navn = inpNavn.value;
      let alder = inpAlder.value;
      let mobil = inpMobil.value;
      let epost = inpEpost.value;
      let adresse = inpAdresse.value;
      outMelding.innerHTML = `Du heter ${navn} og er ${alder} år, og har epost adressen ${epost}.
                             Adressen din er ${adresse} og mobilnummere ditt er ${mobil}.`;
  }
}


