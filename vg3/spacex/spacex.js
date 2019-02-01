//@ts-check

function setup(){
    let divSpacex = document.getElementById("spacex");
    let divInfo = document.getElementById("info");
    let divFuel = document.getElementById("fuel");
    let fuel = 64;
    let h = window.innerHeight - 200 - 120;
    let py = -200;
    let fart = 2;
    let teller = 0;
    const MILLI = 100;

    divFuel.style.height = fuel + "px";

    let ani = setInterval(animasjon, MILLI);

    document.addEventListener("keydown", startMotor);

    function startMotor(e){
        let k = e.key;
        switch(k){
            case " ":
                if (fuel > 0){
                fart = fart - 4;
                fuel -= 4;
                divFuel.style.height = fuel + "px";
                break;
            }
        }
    }

    function animasjon(){
        teller++;
        py = py + fart;
        fart = fart + 1;
        divSpacex.style.top = py + "px";
        if (py > h){
            clearInterval(ani);
            console.log(fart);
            if ( fart <= 8){
                let msg ="Du har landa";
                let poeng = fuel * 10 - teller;
                divInfo.innerHTML = ` ${msg}. Du har ${poeng} poeng. Din fart var ${fart}. Tid: ${teller}` ;
            } else {
                divInfo.innerHTML = `Du har krasja, Din fart var ${fart} `;
            }
        }
    }

}