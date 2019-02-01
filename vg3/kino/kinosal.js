//@ts-check

function setup(){
    let clsStol = document.querySelector(".stol");

    clsStol.addEventListener("click", skiftFarge);

    function skiftFarge(e){
        let t = e.target;
        if (t.classList.contains("farge")){
            t.classList.toggle("on");
        }
    }
}