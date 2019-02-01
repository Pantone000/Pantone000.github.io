//@ts-check

class bil{
    constructor(w,h,x,y){
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;

    }
}

function setup() {
    let divMain = document.getElementById("main");
    let bil = document.createElement("div");
    bil.className = "bil";
    divMain.appendChild(bil);

    document.addEventListener("keydown", styrBil);

    function styrBil(e) {
        switch (e.key) {
            case "a":
                driveLeft();
                break;
            case "w":
                driveUp();
                break;
            case "d":
                driveRight();
                break;
            case "s":
                driveDown();
                break;
        }
    }

    function driveLeft() {
        let carDriving = [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-30px)' }
        ];
        bil.animate(
            carDriving,
            carTiming
        )
    }

    function driveUp() {
        let carDriving = [
            { transform: 'translateX(0px)' },
            { transform: ' translatey(-30px)' }
        ];
        bil.animate(
            carDriving,
            carTiming
        )
    }
    function driveRight() {
        let carDriving = [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(30px)' }
        ];
        bil.animate(
            carDriving,
            carTiming
        )
    }
    function driveDown() {
        let carDriving = [
            { transform: 'translateX(0px)' },
            { transform: ' translatey(30px)' }
        ];
        bil.animate(
            carDriving,
            carTiming
        )
    }

    let carTiming = {
        fill: "forwards",
        duration: 300,
        iterations: 1
    }

}