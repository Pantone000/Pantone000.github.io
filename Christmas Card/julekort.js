function setup() {
    let divSky = document.getElementById ("sky");
    let divSanta = document.getElementById ("santa");    
    santa
    let stars = divSky.querySelectorAll("stars");
    stars.forEach(stjerne => {
        stjerne.style.left = Math.floor(math.random()*40)+"px";
        stjerne.style.top = Math.floor(math.random()*60)+"px";
    })
    divSanta.addEventListener("click", dropGifts);

    function dropGifts(e){
        let pakke = document.createElement (`div`);
        pakke.className = "pakke";
        pakke.style.left = e.screenX + "px";
        pakke.style.top = (e.screenY - 50)+"px";
        divSky.appendChild(pakke);
    }
}