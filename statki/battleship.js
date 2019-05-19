var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	
	ships: [
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],



	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);

    //We check if ship is struck we can see adequate communicate
    
			if (ship.hits[index] === "hit") {
				view.displayMessage("You shotted in this field yearlier");
				return true;
			} else if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("Get strike");

				if (this.isSunk(ship)) {
					view.displayMessage("You sunked my ships");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("Missed!");
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++)  {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
	    return true;
	},

	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
		console.log("Ships board: ");
		console.log(this.ships);
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // row
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		} else { // column
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
	
};


var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}

};

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
               view.displayMessage("You sunked my all ships, the " +
                        this.guesses + " times round.");
			}
		}
	}
}


// Funkcja pomocnicza przetwarzająca współrzędne wpisane 
// przez użytkownika.

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Write your letter and number.");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);
		
		if (isNaN(row) || isNaN(column)) {
			alert("It's not grid reference");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Get out of board");
		} else {
			return row + column;
		}
	}
	return null;
}


// Funkcje obsługi zdarzeń.

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value.toUpperCase();

	controller.processGuess(guess);

	guessInput.value = "";
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");

	//  IE9 

	e = e || window.event;

	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}


// Init after loaded page

window.onload = init;

function init() {
	// Fire button event
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	// Press enter event
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

	// Replace ships on the board.
	model.generateShipLocations();
}
