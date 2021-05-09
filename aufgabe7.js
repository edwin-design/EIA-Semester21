var Sound = [new Audio('Aufgabe7/A.mp3'), new Audio('Aufgabe7/C.mp3'), new Audio('Aufgabe7/F.mp3'), new Audio('Aufgabe7/G.mp3'), new Audio('Aufgabe7/hihat.mp3'), new Audio('Aufgabe7/kick.mp3'), new Audio('Aufgabe7/snare.mp3'), new Audio('Aufgabe7/laugh1.mp3'), new Audio('Aufgabe7/laugh2.mp3')];
window.addEventListener("load", function playSample() {
    document.querySelector("#first").addEventListener("click", function () { (Sound[0]).play(); });
    document.querySelector("#second").addEventListener("click", function () { (Sound[1]).play(); });
    document.querySelector("#third").addEventListener("click", function () { (Sound[2]).play(); });
    document.querySelector("#fourth").addEventListener("click", function () { (Sound[3]).play(); });
    document.querySelector("#fifth").addEventListener("click", function () { (Sound[4]).play(); });
    document.querySelector("#sixth").addEventListener("click", function () { (Sound[5]).play(); });
    document.querySelector("#seventh").addEventListener("click", function () { (Sound[6]).play(); });
    document.querySelector("#eighth").addEventListener("click", function () { (Sound[7]).play(); });
    document.querySelector("#ninth").addEventListener("click", function () { (Sound[8]).play(); });
    document.querySelector("#play").addEventListener("click", function playBeat() {
        setInterval(function () {
            Sound[3].play();
        }, 300);
        setInterval(function () {
            (Sound[2]).play();
        }, 700);
        setInterval(function () {
            (Sound[4]).play();
        }, 2400);
        setInterval(function () {
            (Sound[0]).play();
        }, 1000);
    });
});
//# sourceMappingURL=aufgabe7.js.map