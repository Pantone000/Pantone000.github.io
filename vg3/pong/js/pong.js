//@ts-check

class Ball {
    constructor(x, y, vx, vy, w = 26, h = 26) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.w = w;
        this.h = h;
        this.div = document.createElement("div");
        this.div.className = "ball";
    }
    //oppdaterer posisjon på nettsida
    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
    // oppdaterer x,y basert på farten til figuren
    flytt() {
        this.x += this.vx;
        this.y += this.vy;
    }
}

function setup() {

    let pos1 = { x: 10, y: 10 };
    let pos2 = { x: innerWidth - 10, y: 10 };


    let divBoard = document.getElementById("board");
    let divPoeng1 = document.getElementById("poeng1");
    let divPoeng2 = document.getElementById("poeng2");
    
    let poeng1 = 0;
    let poeng2 = 0;

    function move1() {
        document.getElementById("player1").style.top = pos1.y + "px";
    }

    function move2() {
        document.getElementById("player2").style.top = pos2.y + "px";
    }

    let keys = {};

    function down(e) {
        let k = e.key;
        keys[k] = 1;
    }

    function up(e) {
        let k = e.key;
        keys[k] = 0;
    }

    addEventListener("keydown", down);
    addEventListener("keyup", up);

    startSpillet();
    
    function startSpillet() {

        let baller = [];
        for (let i = 0; i < 1; i++) {
            let x = 100;
            let y = 80;
            let vx = 5;
            let vy = 5;
            let ball = new Ball(x, y, vx, vy);
            divBoard.appendChild(ball.div);
            baller.push(ball);

        }
        
        

        setInterval(animering, 20);

        // animerer ballen og beveger klossene, spillerene
        function animering() {
            for (let i = 0; i < baller.length; i++) {
                let ball = baller[i];
                ball.flytt();
                ball.render();
                
                if (ball.x > innerWidth - 150) {
                    if (pos2.y  > ball.y - ball.h && ball.y < pos2.y + 90) {
                        if (pos2.y < ball.y){
                        ball.vx = -5;
                        }
                    }
                }

                if (ball.x < 150) {
                    if (pos1.y > ball.y - ball.h && ball.y < pos1.y + 90) {
                        if (pos1.y < ball.y){
                            ball.vx = 5;
                        }
                    }
                }
                if (keys["w"]) {
                    pos1.y -= 15;
                    move1();
                }
                if (keys["s"]) {
                    pos1.y += 15;
                    move1();
                }
                if (keys["ArrowUp"]) {
                    pos2.y -= 15;
                    move2();
                }
                if (keys["ArrowDown"]) {
                    pos2.y += 15;
                    move2();
                }
                if (ball.x > innerWidth) {
                    ball.y = 200;
                    ball.x = 1000;
                    ball.vx = -Math.abs(ball.vx);
                    poeng1 += 1;
                    divPoeng1.innerHTML = "";
                    divPoeng1.innerHTML = poeng1;

                }
                if (ball.x < 0) {
                    ball.y = innerHeight - 200;
                    ball.x = innerWidth - 1000 ;
                    ball.vx = Math.abs(ball.vx);
                    poeng2 += 1;
                    divPoeng2.innerHTML = "";
                    divPoeng2.innerHTML = poeng2;
                }
                if (ball.y > innerHeight) {
                    ball.vy = -Math.abs(ball.vy);
                }
                if (ball.y < 0) {
                    ball.vy = Math.abs(ball.vy);
                }
                return poeng1;
            }

        }
    }
}