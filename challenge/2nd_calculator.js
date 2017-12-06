(function(){ 
	//Immediately-Invoked Function Expression (IIFE)
	//http://benalman.com/news/2010/11/immediately-invoked-function-expression/

	var calculator = {
		input: "",
		result: 0,
		lastExpr: "",
		calcResult: function () {
			//'this' doesn't work here, because apparently here it refers to the element 
			//to which the click event has been attached and not the calculator object
			try {
				calculator.result = eval(calculator.input);
				if ( isFinite(calculator.result) ) {
					calculator.input = calculator.result;
					display.innerHTML = calculator.result;
					return calculator.result;
				} else {
					calculator.input = "";
					calculator.result = 0;
					display.innerHTML = "Error";
					return "Error";
				}
				
			} catch (e) {
				console.log(e.message);
				calculator.input = "";
				calculator.result = 0;
				display.innerHTML = "Error";
			} 
		},
		clear: function () {
			calculator.lastExpr = calculator.input;
			calculator.input = "";
			display.innerHTML = "";
		},
		sign: function () {
			if (calculator.input.toString().charAt(0) == "-") {
				calculator.input = calculator.input.substring(1);
			} else {
				calculator.input = "-" + calculator.input;
			}
			display.innerHTML = calculator.input;
		},
		removeLast: function () {
			calculator.input = calculator.input.slice(0, -1);
			display.innerHTML = calculator.input;
		},
		square: function () {
			//problem: doesn't work properly ...
			var temp = calculator.calcResult();
			if (temp !== "Error" && !isNaN(temp)) {
				calculator.result = temp * temp;
				calculator.input = calculator.result;
				display.innerHTML = calculator.result;
			} else {
				calculator.input = "";
				calculator.result = 0;
				display.innerHTML = "Error";
			}
		}
	} 

	//variable to store 'screen' of calculator
	var display = document.getElementById("in");
	//Event Handlers
	var simpleBtns = document.getElementsByClassName("btn");
	for (var i = 0; i < simpleBtns.length; i++) {
		simpleBtns[i].addEventListener("click", displayInput);
	}
	document.getElementById("enter").addEventListener("click", calculator.calcResult);
	document.getElementById("clear").addEventListener("click", calculator.clear);
	document.getElementById("signed").addEventListener("click", calculator.sign);
	document.getElementById("backspace").addEventListener("click", calculator.removeLast);
	document.getElementById("square").addEventListener("click", calculator.square);
	//decimal point
	//PI
	//e
	//percent
	//square root
	//

	function displayInput () {
		calculator.input += this.innerHTML;
		display.innerHTML = calculator.input;
	}

}());