function setup() {

    const MAXFART = 12;

    let bird = document.getElementById("bird");
    let above = document.getElementById("above");
    let below = document.getElementById("below");

    document.addEventListener("keydown", girFartTilFuggel);

    bird.ypos = 150;
    bird.xpos = window.innerWidth / 2 - 50;
    bird.fart = 0;

    above.xpos = window.innerWidth;
    below.xpos = window.innerWidth;
    
    const GAP = 150;

    const SPENN = window.innerHeight - GAP;

    

    let poeng = 0;
    let divPoeng = document.getElementById ("poeng");

    let top;

    function giHoydeTilSoyler() {
        top = Math.floor(Math.random() * SPENN);
        above.style.height = top + "px";
        below.style.height = (window.innerHeight - 150 - top) +"px";
    }

    giHoydeTilSoyler();

    function girFartTilFuggel(event) {
        bird.fart = bird.fart + 10;
    }

    let timer = setInterval(flyttPaaTing, 40);

    function flyttPaaTing() {
        bird.ypos =  bird.ypos -  bird.fart;
        bird.fart =  bird.fart - 0.3;
        if ( bird.fart > MAXFART) {
            bird.fart = MAXFART;
        }
        if ( bird.fart < -MAXFART) {
            bird.fart = -MAXFART;
        }
        if ( bird.ypos < 0) {
            bird.ypos = 0; fart = 0;
        }
        if ( bird.ypos > window.innerHeight - 200) {
            bird.ypos = window.innerHeight - 200;
        }
        bird.style.top = bird.ypos + "px";

        above.xpos = above.xpos - 5;
        if (above.xpos < 0) {
            above.xpos = window.innerWidth;
            poeng = poeng + 1;
            visPoeng();
        }
        above.style.left = above.xpos + "px";

        below.xpos = below.xpos - 5;
        if (below.xpos < 0) {
            below.xpos = window.innerWidth;
        }
        below.style.left = below.xpos + "px";

        if (bird.xpos > window.innerHeight - GAP - 150 &&
            bird.xpos < window.innerHeight - GAP - 150  &&
            bird.ypos < 150
        ) {
            poeng = poeng * 0.5;
            visPoeng();
            clearInterval(timer);
            giHoydeTilSoyler();
        }

        if (bird.xpos > window.innerHeight - GAP - 150 &&
            bird.xpos < window.innerHeight - GAP - 150 &&
            bird.ypos > window.innerHeight - GAP - 150
        ) {
            poeng = poeng * 0.5;
            clearInterval(timer);
            visPoeng();
        }

        function visPoeng(){
            divPoeng.innerHTML = "poeng" + poeng.toFixed(2);
        }

    }

}