//@ts-check


function setup() {
    let inpBarn = document.getElementById("barn");
    let inpVoksne = document.getElementById("voksne");
    let btnbestill = document.getElementById("bestill");
    let divOversikt = document.getElementById("oversikt");

    btnbestill.addEventListener("click", finnPris);

    function finnPris(){
        let barn = inpBarn.value;
        let voksne = inpVoksne.value;
        let pris = barn*90 + voksne*120;
        divOversikt.innerHTML = `Prisen blir ${pris} kr`
    }
    
}