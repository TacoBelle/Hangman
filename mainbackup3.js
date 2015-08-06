$(document).ready(function() {





      (function() {

         //   document.querySelector('#categorias').addEventListener("click", currentWord, false);

      var State = {
            CurrentGame: "CurrentGame",
            ResetValues: "ResetValues",
            GameStarting: "GameStarting"
         //   isGameNew: true,
      };

      var GameManager = {};

      var b = GameManager;
            b.newPlayer = new Player();
            b.setupNewGame = function(a){
               //   b.newPlayer = new Player();
                  b.resetValues(a);
            };
            b.getElements = function(){
                 return {
                        btnSubmitEl : document.getElementById('btnSubmit'),
                        playerInputEl:document.getElementById('playerInput'),
                        palabraEl: document.getElementById('palabra'),
                        btngetWord:document.getElementById('btnGetWord'),
                        scoreEl: document.getElementById('score')

                   }
            };
            //b.isGameNew;
            b.resetValues = function(a) {
                if (!flags.isGameOver) {
                      a.btnSubmitEl.disabled = false;
                }

                  a.playerInputEl.value = "";
                  a.scoreEl.textContent = "" + b.newPlayer.getScore() + "";

            };

            b.isLetterRepeated = function(a){
                  if (b.newPlayer.checkIfUsedLetter(a)){
                        return true;
                  } else {
                        return false;
                  }
            };
            b.checkPlayerLives = function(a) {
                  if (b.newPlayer.getLives() === 0){
                        console.log("El jugador no tiene vidas. Sus vidas son" + b.newPlayer.getLives());
                       // a.btnSubmitEl.disabled = true;
                        console.log("el juego ha terminado");

                  } else {
                        a.textContent = b.newPlayer.getScore();
                        console.log("el jugador tiene vidas, por lo que suma puntos. Sus vidas son " + b.newPlayer.getLives() + "y sus puntos son" + b.newPlayer.getScore());
                  }
            };

            b.setState = function(a) {
                  GameManager.state = State[a];
            };
           b.setCurrentWord = function(a) {
                  var wordToGuess = new Word();
              GameManager.state = State.CurrentGame;
                 // wordToGuess.getWord();
                  wordToGuess.k(a);
                  return wordToGuess;
            };
            //se le esta pasando string pero hay que pasarle el objeto palabra
            b.globalPlaceHolder = function(a) {
                       a.verifyWord();

            };

            b.handleScore = function() {
                  b.newPlayer.setScore(20);
            }

            b.gameOver = function() {
                  if (flags.isGuessRight){
                        console.log("ganaste");
                  } else {
                        console.log("perdiste");
                        b.resetValues();
                  }

            };

            /*b.getPlaceHolder = function(a) {
                 return a.returnElement();
            }*/

            //escribir la palabra que tiene el placehoder

            b.showWord = function(a,c) {
                  a.palabraEl.innerHTML = c.join("");
            };

      var c = function() {
            GameManager.state = State.GameStarting;
            var currentWord; //Se declara global dentro de funcion para poder pasar a word. Hacer privada!!
            var elements = b.getElements(); //Se guardan todos los elementos del obj con prop para que se pasen a otra funcion
            b.setupNewGame(elements);

            //Si el juego ya esta comenzado, verificar estos puntos.
            elements.btnSubmitEl.onclick = function() {
                        if (GameManager.state === "CurrentGame"){
                        //Si la letra no se uso
                              if (b.isLetterRepeated(elements.playerInputEl.value) === false) {
                        //verificar las vidas del jugador
                                    b.checkPlayerLives(elements.scoreEl);
                        // Verificar la palabra
                                   b.globalPlaceHolder(currentWord);
                                    console.log(currentWord);
                                    var placeholder = currentWord.returnElement();


                                    if (flags.isGuessRight){
                                          //verificar si la palabra esta completa
                                          b.handleScore();
                                          b.showWord(elements,placeholder);
                                    } else {
                                          //dibujar ahorcado
                                          if (b.newPlayer.getLives() === 0) {
                                                b.gameOver();
                                          }
                                                b.resetValues(elements);
                                                b.newPlayer.setLives();
                                                hangMan.drawHangman();
                                                console.log("Reseteando valores");


                                    }


                                  //2  b.globalPlaceHolder(currentWord);
                              } else {
                                    console.log("La letra ya se uso");
                                    console.log("Debe pedir una palabra primero");
                                    return;
                              }
                  }

            };
            document.querySelector('#categorias').addEventListener("click", getPick, false);
           //la palabra no se esta pasando en globalPlaceholder. Fijarse como pasar currentword aca y que se pueda ver lgobal
            function getPick(e) {
                        var a = e.toElement.id;
                        for (var key in categoryList.subjects)
                        {
                              if(key === a){
                                    a = categoryList.subjects[key];
                                    var a = a[Math.floor(Math.random() * a.length)];
                                    console.log(b);
                                    b.setCurrentWord(a);
                                    return a;
                              }
                        }
                };

            /*
            elements.btngetWord.onclick= function() {
                 currentWord = b.setCurrentWord();
                  //2 currentWord = b.setCurrentWord();
                  console.log(currentWord);
            }*/
            console.log("Elementos dentro de b sin return" + b.getElements());
            console.dir(b.getElements());
      };

            var  categoryList = {};
            categoryList.subjects = {
                  sub1:["gato", "perro"],
                  sub2 :["Buenos Aires", "La Plata"],
                  sub3 : ["Inception", "Freddy"]
            };





      c();

      })();

});