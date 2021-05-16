namespace Aufgabe8 {
  window.addEventListener("load", function (): void {
    var sounds: HTMLAudioElement[] = [new Audio("../Aufgabe7/kick.mp3"), new Audio("../Aufgabe7/hihat.mp3"), new Audio("../Aufgabe7/snare.mp3"), new Audio("../Aufgabe7/hihat.mp3"), new Audio("../Aufgabe7/A.mp3"), new Audio("../Aufgabe7/C.mp3"), new Audio("../Aufgabe7/F.mp3"), new Audio("../Aufgabe7/G.mp3"), new Audio("../Aufgabe7/laugh1.mp3"), new Audio("../Aufgabe7/laugh2.mp3")];
    var index: number = 0;
    document.querySelector("#first").addEventListener("click", function (): void { playSample(sounds[0]); });
    document.querySelector("#second").addEventListener("click", function (): void { playSample(sounds[1]); });
    document.querySelector("#third").addEventListener("click", function (): void { playSample(sounds[2]); });
    document.querySelector("#fourth").addEventListener("click", function (): void { playSample(sounds[4]); });
    document.querySelector("#fifth").addEventListener("click", function (): void { playSample(sounds[5]); });
    document.querySelector("#sixth").addEventListener("click", function (): void { playSample(sounds[6]); });
    document.querySelector("#seventh").addEventListener("click", function (): void { playSample(sounds[7]); });
    document.querySelector("#eighth").addEventListener("click", function (): void { playSample(sounds[8]); });
    document.querySelector("#ninth").addEventListener("click", function (): void { playSample(sounds[9]); });
    function playSample(music: HTMLAudioElement= new Audio): void { 
      music.play();
      
     }
      
    document.querySelector("#playIcon").addEventListener("click", function (): void {
      var interval: number = setInterval(function (): void {
              sounds[index].play();
              index += 1;
              if (index > 3)
                  index = 0;
              document.querySelector("#pauseIcon").addEventListener("click", function (): void {
                clearInterval(interval);
              });
          },                             250);
      });

   
    
        
      
    document.getElementById("playIcon").addEventListener("click", function (): void {
        this.classList.add("is_hidden");
        document.getElementById("pauseIcon").classList.remove("is_hidden");
      });
      
    
    document.getElementById("pauseIcon").addEventListener("click", function (): void {
        this.classList.add("is_hidden");
        document.getElementById("playIcon").classList.remove("is_hidden");
      });

      document.getElementById("trashIcon").addEventListener("click", function(): void {
        sounds.length = 0;
      } );
      
  
   
  
    


    var remixBeat: number[] = [];
    var indexRemix: number = 0;
    var min: number = 0;
    var max: number = 9;
    
  
    for (let index: number = 0; index < sounds.length; index++) {
    
        var zufallsZahl: number = Math.round((Math.random() * (max - min)) + min);

        remixBeat.push(zufallsZahl);
      }
    function remixButton (remix: HTMLAudioElement= new Audio): void {
      remix.play();
      }
    
    document.getElementById("randomIcon").addEventListener("click", function (): void { 
      var intervalRemix: number = setInterval(function (): void {
        sounds[indexRemix].play();
        indexRemix += 1;
        if (indexRemix > 9)
        indexRemix = 0;
        
        
        
      }

       
     
    

    


      });

      

      
      
      



    }
      