$(document).ready(function() {

//NOTA: CONSULTADO CON http://www.adobe.com/devnet/archive/html5/articles/hangman-part-2.html
//INCOMPLETO

	var btnSubmitEl = document.getElementById('btnSubmit');
	var playerInputEl = document.getElementById('playerInput');
	var palabraEl = document.getElementById('palabra');
	var btngetWord = document.getElementById('btnGetWord');
	var scoreEl = document.getElementById('score');
	var isGameNew;

///SACAR. SOLO PARA PROBAR.

//usar boton disabled.
btnSubmitEl.onclick = function() {
	console.log("Se esta verificando si la letra esta en la palabra");
	
	//Si la letra ya se uso, la funcion deja de ejecutarse. 
	if (!newPlayer.checkIfUsedLetter(playerInputEl.value))
	{
		return;
	}
        
	var globalPlaceholder = wordToGuess.verifyWord();

	console.log(newPlayer.getLives());
	console.log("Se esta verificando si el jugador tiene vidas");
	if (newPlayer.getLives() === 0)
	{	
		console.log("El jugador no tiene vidas. Sus vidas son" + newPlayer.getLives());
		btnSubmitEl.disabled = true;
		console.log("el juego ha terminado");

	} else 
	{	

		scoreEl.textContent = newPlayer.getScore();
		console.log("el jugador tiene vidas, por lo que suma puntos. Sus vidas son " + newPlayer.getLives() + "y sus puntos son" + newPlayer.getScore());
	}

//dar boolean true debajo de btngetword y pasarla a submit.
	

};


btngetWord.onclick = function()
{
	console.log("Se resetea el estado del juego");
	resetGameState();
 	wordToGuess = new Word();
 	console.log("Se crea una nueva palabra objeto");
	wordToGuess.getWord();
	console.log("Se crea una nueva palabra");
	console.log("las vidas del jugador al generar la palabra es de " + newPlayer.getLives())
}


function resetGameState() {

	btnSubmitEl.disabled = false;

	playerInputEl.value = ""; 
	console.log("Se seteo el input del jugador a vacio quedando " + playerInputEl.value);
	newPlayer = new Player();
	console.log("Se crea un nuevo jugador");
	//newPlayer.setScore(
	scoreEl.textContent = "" + newPlayer.getScore() + "";
	console.log("Se verifican los puntos del jugador al resetear. Sus puntos son " + newPlayer.getScore());
	console.log("Se verifican las vidas del jugador al resetear. Sus vidas son " + newPlayer.getLives());



}

function showErrorDiv(error) {
      var errorEl = document.getElementsByClassName('error');
      if (errorEl.style.display === "none")
      {
            errorEl.style.display = "block";
            errorEl.textContent = error;
      }

}





});