//Crear la clase "palabra." Debe tener un metodo interno que cree la palabra en si.


// Constructor para palabra
function Word() {
	
	// Attributes
	
	var wordList = ["charla", "animal", "monedero"];
	var currentWord;
	var palabraEl = document.getElementById('palabra');
      var playerInputEl = document.getElementById('playerInput');
	var guessIsRight = false;
	this.getWord = function() {
		currentWord = wordList[Math.floor(Math.random() * wordList.length)];
		console.log("currentWord La palabra elegida para adivinar es" + currentWord );
		currentWord = this.toArray(currentWord);
		this.dashToHtml(currentWord);
		//return currentWord;
		
		}



	this.toArray = function(a) {
		var a = a.split("");
		return a;
	}

	//write to HTML

	this.dashToHtml = function(currentWord)
	{
		//No permite acceder a palabraEl si no se declara aca
		palabraEl = document.getElementById('palabra');
		palabraEl.textContent = "";
		for(var i = 0; i<currentWord.length ; i++)
		{

			palabraEl.textContent += "-";
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

	   var guessIsRight = false;
	   console.log("Se verifica el estado de boolano guessIsRight. Su valor es " + guessIsRight);
		currentWordLetter = document.getElementById('playerInput').value;
		//newPlayer.checkIfUsedLetter(currentWordLetter));
		console.log("Se agarra la letra que ingreso el jugador. La letra es" + currentWordLetter);
		var placeholder = document.getElementById('palabra').innerHTML;

		placeholder = this.toArray(placeholder);
		for(var i = 0; i < currentWord.length; i++)
		{

			if (currentWordLetter == "" || currentWordLetter.length >1)
			{
				currentWordLetter = document.getElementById('playerInput').value;
				console.log(currentWordLetter);
				return;
			}
				if (currentWordLetter == currentWord[i])
				{
					
					placeholder[i] = currentWordLetter;
					guessIsRight = true;
					console.log("La letra esta incluida en la palabra");

				}

			
		}

		if (guessIsRight == true)
			{
			   newPlayer.setScore(20);
			   this.playerInputEl.value = "";
			   console.log("El jugador acerto la letra" + currentWordLetter + " en la palabra " + currentWord + "por lo que se suman puntos");
			   console.log("El valor de plaholder es" + placeholder + " y la palabra es " + currentWord );
			   if(placeholder.join("") == currentWord.join(""))
			   {
			   		console.log("ganaste,");
			   }

			}
			else 
			{
		       newPlayer.setLives();
                   hangMan.drawHangman();
		       this.playerInputEl.value = "";
		       console.log("El jugador no acerto la letra" + currentWordLetter + " en la palabra " + currentWord + "por lo que pierde vidas. Sus vidas totales al momento son " + newPlayer.getLives());
			}

		

		document.getElementById('palabra').innerHTML = placeholder.join("");
		console.log(placeholder, placeholder.innerHTML);
		//return placeholder;

	};




}


