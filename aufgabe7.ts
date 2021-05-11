const Sound:HTMLAudioElement []= [new Audio ('Aufgabe7/A.mp3'), new Audio ('Aufgabe7/C.mp3'), new Audio ('Aufgabe7/F.mp3'), new Audio ('Aufgabe7/G.mp3'), new Audio ('Aufgabe7/hihat.mp3'), new Audio ('Aufgabe7/kick.mp3'), new Audio ('Aufgabe7/snare.mp3'), new Audio ('Aufgabe7/laugh1.mp3'), new Audio ('Aufgabe7/laugh2.mp3')]
    


window.addEventListener("load", function playSample(): void{
    document.querySelector("#first").addEventListener("click", function(): void{ (Sound[0]).play() } )
    document.querySelector("#second").addEventListener("click", function(): void{ (Sound[1]).play() } )
    document.querySelector("#third").addEventListener("click", function(): void{ (Sound[2]).play();} )
    document.querySelector("#fourth").addEventListener("click", function(): void{ (Sound[3]).play();} )
    document.querySelector("#fifth").addEventListener("click", function(): void{ (Sound[4]).play();} )
    document.querySelector("#sixth").addEventListener("click", function(): void{ (Sound[5]).play();} )
    document.querySelector("#seventh").addEventListener("click", function(): void{ (Sound[6]).play();} )
    document.querySelector("#eighth").addEventListener("click", function(): void{ (Sound[7]).play();} )
    document.querySelector("#ninth").addEventListener("click", function(): void{ (Sound[8]).play();} )
    document.querySelector("#play").addEventListener("click", function playBeat(): void{

  setInterval(function(): void{

    Sound[3].play() }, 300);

  setInterval(function(): void{

    (Sound[2]).play()}, 700)

    setInterval(function(): void{

        (Sound[4]).play()}, 2400)
    
      

  setInterval(function(): void{

     (Sound[0]).play()}, 1000)


})})