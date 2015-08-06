function Player() {
	

	var score = 0;
	var lives = 3;
	var usedLetters = [];

	this.name = function () {
		var name = prompt("Insert your name");
		return name;
	};

	this.setScore = function(num)
	{
		//score debe ser definido para que se pueda sumar a si mismo
		score += num;
	}


	this.getScore = function()
	{
		return score;
	}

	this.setLives = function() {
				lives--;	
	}

	this.getLives = function() {
		return lives;
	}

	this.checkIfUsedLetter = function (letter) {
		if (usedLetters.length === 0 )
			{
				usedLetters.push(letter);
				return false;
			}

		for (var i = 0; i< usedLetters.length; i++)
		{
			

			if(usedLetters[i] === letter)
			{
				console.log("esta letra ya ha sido usada");
                       // showErrorDiv("Esta letra ya ha sido usada");
				return true;
			}
			else 
			{
				usedLetters.push(letter);
				return false; //si no pongo return, se sigue ejectuando porque .push agrega la letra por lo que .length sera mayor
			}


		}
		console.log("Las letras que se han usado hasta ahora son " + usedLetters);
		
	}
	

}

//var newPlayer = new Player();
//console.log("se creo un nuevo jugador. Sus vidas son: " + newPlayer.getLives() + "y sus puntos son: " + newPlayer.getScore());
//console.log(newPlayer.name())