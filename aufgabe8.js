var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", function () {
        var sounds = [new Audio("../Aufgabe7/kick.mp3"), new Audio("../Aufgabe7/hihat.mp3"), new Audio("../Aufgabe7/snare.mp3"), new Audio("../Aufgabe7/hihat.mp3"), new Audio("../Aufgabe7/A.mp3"), new Audio("../Aufgabe7/C.mp3"), new Audio("../Aufgabe7/F.mp3"), new Audio("../Aufgabe7/G.mp3"), new Audio("../Aufgabe7/laugh1.mp3"), new Audio("../Aufgabe7/laugh2.mp3")];
        var beat = [sounds[5], sounds[8], sounds[4]];
        var index = 0;
        document.querySelector("#first").addEventListener("click", function () { playSample(sounds[0]); });
        document.querySelector("#second").addEventListener("click", function () { playSample(sounds[1]); });
        document.querySelector("#third").addEventListener("click", function () { playSample(sounds[2]); });
        document.querySelector("#fourth").addEventListener("click", function () { playSample(sounds[4]); });
        document.querySelector("#fifth").addEventListener("click", function () { playSample(sounds[5]); });
        document.querySelector("#sixth").addEventListener("click", function () { playSample(sounds[6]); });
        document.querySelector("#seventh").addEventListener("click", function () { playSample(sounds[7]); });
        document.querySelector("#eighth").addEventListener("click", function () { playSample(sounds[8]); });
        document.querySelector("#ninth").addEventListener("click", function () { playSample(sounds[9]); });
        function playSample(music) {
            if (music === void 0) { music = new Audio; }
            music.play();
        }
        document.querySelector("#playIcon").addEventListener("click", function () {
            var interval = setInterval(function () {
                sounds[index].play();
                index += 1;
                if (index > 3)
                    index = 0;
                document.querySelector("#pauseIcon").addEventListener("click", function () {
                    clearInterval(interval);
                });
            }, 250);
        });
        document.getElementById("playIcon").addEventListener("click", function () {
            this.classList.add("is_hidden");
            document.getElementById("pauseIcon").classList.remove("is_hidden");
        });
        document.getElementById("pauseIcon").addEventListener("click", function () {
            this.classList.add("is_hidden");
            document.getElementById("playIcon").classList.remove("is_hidden");
        });
        var trashIcon = document.getElementById("trashIcon");
        trashIcon.addEventListener("click", function () {
            clearInterval(interval);
            beat.length = 0;
            console.log(trashIcon);
            if (beat.length == 0) {
                document.getElementById("playIcon").classList.remove("hidden");
                document.getElementById("pauseIcon").classList.add("hidden");
            }
        });
        var randomIcon = document.getElementById("randomIcon");
        randomIcon.addEventListener("click", function () {
            beat.length = 0;
            console.log(beat);
            while (beat.length < 3) {
                var audioElement = sounds[Math.floor(Math.random() * sounds.length)];
                if (beat.indexOf(audioElement) === -1)
                    beat.push(audioElement);
                console.log(beat);
            }
        });
    });
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=aufgabe8.js.map