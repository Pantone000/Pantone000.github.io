//@ts-check

function setup() {
    let display = document.getElementById("display");
    //gjør node list om til array
    let lukene = Array.from(document.querySelectorAll(".lukka"));
    // legger til eventlistner på hvert av elementene i arrayet
    lukene.forEach(l => {
        l.addEventListener("click", open);
    });

    let soundHappy = document.getElementById("happy");
    let soundSad = document.getElementById("sad");

    let videoJul = document.getElementById("film");

    soundHappy.src = "media/happy.mp3";
    soundSad.src = "media/failed.mp3";


    function open(e) {
        let today = new Date();
        let luke = e.target;
        let nr = Number(luke.innerHTML);
        /*
        if (nr > today.getDate()){
            spill(soundSad);
            return ;
        }*/
        if (nr === 24) {
            videoJul.src = "media/julafilmcut.mp4";
            videoJul.style.display = "block";
            videoJul.play();
            setTimeout(() =>{ videoJul.pause();
                videoJul.style.display = "none";
            }, 20000)
        }

        spill(soundHappy);


        display.style.backgroundImage = `url("media/bilde${nr}.png")`;
        display.style.left = "200px";
        setTimeout(() => {
            display.style.left = "-2000px";
        }, 2000);
    }
}


function spill(sound) {
    sound.load();
    sound.play();
    setTimeout(() => sound.pause(), 2000);
}