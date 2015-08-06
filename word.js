//Crear la clase "palabra." Debe tener un metodo interno que cree la palabra en si.
//TODO VERIFICAR PALABRAS CON ESPACIO.
//TODO: AL PERDER VIDAS EL JUEGO SABE QUE ALGO PASA PERO NO TIENE ACCION. NO HACE NADA.
//TODO: MOSTRAR LETRAS ELEGIDAS
//TODO: AGREGAR TECLADO
//TODO: VALIDACION: NUMEROS
//TODO: MOVER "-" MAS ABAJO. DAR ESTILO.
//PUNTOS

// Constructor para palabra
function Word() {
	
	// Attributes

	//var wordList = ["charla", "animal"];
	var currentWord;
	var palabraEl = document.getElementById('palabra');
      var playerInputEl = document.getElementById('playerInput');
	//var guessIsRight = false;
      var placeholder;

      this.getWord = function() {
		currentWord = wordList[Math.floor(Math.random() * wordList.length)];

		console.log("currentWord La palabra elegida para adivinar es" + currentWord );
            return currentWord;
		/*currentWord = this.toArray(currentWord);
		this.dashToHtml(currentWord);
		//return currentWord;*/
		
		};

      this.k = function(a) {
           currentWord = a;
           currentWord1= toArray(a);
           currentWord1 = dashToHtml(a);

            console.log("la palabra dentro k es + " + a);
      };

	var toArray = function(a) {
		var a = a.split("");
		return a;
	};

	//write to HTML

	var dashToHtml = function(currentWord)
	{
		//No permite acceder a palabraEl si no se declara aca
		var b = document.getElementById('palabra');
		b.textContent = "";


		for(var i = 0; i< currentWord.length ; i++){
                  b.textContent += "-";
		}

	};

// Para poder calcular los puntos y hacer un flag que indique si el jugador puso la letra correcta o no, se setea un flag a "false" y SOLO se verifica 
// si la letra esta incluida en la palabra. Si lo esta, el flag se setea a true. NOTA: Cuando se verifica si la letra estaba o no con un "if else" no se podia
// calcular puntos porque no habia forma se setear un flag y los puntos/vidas se ganaban/perdian por cada DASH EN EL MISMO TURNO que verificaba. De esta
// forma, recorre toda la palabra y con que encuentre una vez la letra, el flag indica que estaba. Luego fuera, se indica que si e flag es verdadero,
// quiere decir que adivino una letra y debe sumar puntos. Si el flag es falso, quiere decir que perdio porque el valor solo se cambia si gana.
	

	//despues de submitir en e segundo turno, el boton de submitir se deshabilita porque ya no hay mas vidas. puede ser porque lee guessIsRight o 
	//porque esta contando el input anterior.
	this.verifyWord = function() {

            flags.isGuessRight = false;
	     console.log("Se verifica el estado de boolano guessIsRight. Su valor es " + flags.isGuessRight);
            currentWordLetter = document.getElementById('playerInput').value;
		//newPlayer.checkIfUsedLetter(currentWordLetter));
		console.log("Se agarra la letra que ingreso el jugador. La letra es" + currentWordLetter);
		placeholder = document.getElementById('palabra').innerHTML;

		placeholder = toArray(placeholder);
		for(var i = 0; i < currentWord.length; i++)
		{
			if (currentWordLetter == "" || currentWordLetter.length >1)
			{
				currentWordLetter = document.getElementById('playerInput').value;
				console.log(currentWordLetter);
				return;
			}
			if (currentWordLetter == currentWord[i] ){
					placeholder[i] = currentWordLetter;
                              flags.isGuessRight = true;
                        //Validacion para ver si i ya paso la palabra. Si no, solo validaba una letra aunque estuviera repetida.




				}

                  if (i === currentWord.length-1 ) {
                        return flags.isGuessRight;
                  }
                  //  this.returnElement(placeholder);
                  console.log("La letra esta incluida en la palabra");

			
		}



      //esto se tiene que manejar desde GM. Hacer q la funcion anterior devuelva un booelano o un game state o gmaeflag(gameover como flag).
            //quizas devolver plaholer y currentword para que se haga la comparacion y se gane. O hacer esa validacion aca y devolver flag de "isGameover=true (gano)
	/*	if (guessIsRight == true)
			{
			 //v3  newPlayer.setScore(20);
			 //  this.playerInputEl.value = "";
			  console.log("El jugador acerto la letra" + currentWordLetter + " en la palabra " + currentWord + "por lo que se suman puntos");
			   console.log("El valor de plaholder es" + placeholder + " y la palabra es " + currentWord );*/
		/*	   if(placeholder.join("") == currentWord.join(""))
			   {
			   		//console.log("ganaste,");
                           b.gameOver();
			   }

			}
			else 
			{
                 //  b.newPlayer.setLives();
                   hangMan.drawHangman();
		     //  this.playerInputEl.value = "";
		     //  console.log("El jugador no acerto la letra" + currentWordLetter + " en la palabra " + currentWord + "por lo que pierde vidas. Sus vidas totales al momento son " + newPlayer.getLives());
			}
*/

		//document.getElementById('palabra').innerHTML = placeholder.join("");
		//console.log(placeholder, placeholder.innerHTML);
		//return placeholder;

	};

      //devuelve El placeholder que pide main para que se pueda escribir la palabra con "-" en la pagina y que ocupe la letra
      this.returnElement = function(){
            return placeholder;
      }



}


