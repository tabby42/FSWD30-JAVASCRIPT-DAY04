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
				if ( isFinite(calculator.result) && !isNaN(calculator.result) ) {
					calculator.lastExpr = calculator.input;
					calculator.input = calculator.result;
					display.innerHTML = calculator.result;
					calculator.showLast();
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
			calculator.lastExpr = "";
			display.innerHTML = "";
			last.innerHTML = "";
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
			calculator.input = calculator.input.toString().slice(0, -1);
			display.innerHTML = calculator.input;
		},
		square: function () {
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
		},
		squareRoot: function () {
			var temp = calculator.calcResult();
			if (temp !== "Error" && !isNaN(temp)) {
				calculator.result = Math.sqrt(temp);
				calculator.input = calculator.result;
				display.innerHTML = calculator.result;
			} else {
				calculator.input = "";
				calculator.result = 0;
				display.innerHTML = "Error";
			}
		},
		pi: function () {
			calculator.input += Math.PI.toFixed(7);
			display.innerHTML = calculator.input;
		},
		euler: function () {
			calculator.input += Math.E.toFixed(7);
			display.innerHTML = calculator.input;
		},
		showLast: function () {
			last.innerHTML = calculator.lastExpr;
		},
		percentage: function () {
			var temp = calculator.input;
			operator = "";
			var arr = [];
			var percent = 0;
			var foundOp = false;
			for (var i = temp.length - 1; i >= 0; i--) {
				if ( temp[i] === "+" || temp[i] === "+" 
					||  temp[i] === "*" || temp[i] === "*") {
					operator = temp[i];
					arr = temp.split(temp[i]);
					foundOp = true;
					break;
				}
			}
			if (!foundOp) {
				percent = temp / 100;
				calculator.result = percent;
				calculator.input = calculator.result;
				display.innerHTML = calculator.result;
			}
			switch (operator) {
				case "+":
					if (arr.length === 2) {
						percent = (arr[0] / 100) * arr[1];
						percent += Number(arr[0]);
						calculator.result = percent;
						calculator.input = calculator.result;
						display.innerHTML = calculator.result;
					} else {
						calculator.input = "";
						calculator.result = 0;
						display.innerHTML = "Error";
					}
					break;
				case "-":
					if (arr.length === 2) {
						percent = (arr[0] / 100) * arr[1];
						percent -= Number(arr[0]);
						calculator.result = percent;
						calculator.input = calculator.result;
						display.innerHTML = calculator.result;
					} else {
						calculator.input = "";
						calculator.result = 0;
						display.innerHTML = "Error";
					}
					break;
				case "*":
					if (arr.length === 2) {
						percent = (arr[0] / 100) * arr[1];
						percent *= Number(arr[0]);
						calculator.result = percent;
						calculator.input = calculator.result;
						display.innerHTML = calculator.result;
					} else {
						calculator.input = "";
						calculator.result = 0;
						display.innerHTML = "Error";
					}
					break;
				case "/":
					if (arr.length === 2) {
						percent = (arr[0] / 100) * arr[1];
						percent /= Number(arr[0]);
						calculator.result = percent;
						calculator.input = calculator.result;
						display.innerHTML = calculator.result;
					} else {
						calculator.input = "";
						calculator.result = 0;
						display.innerHTML = "Error";
					}
					break;
			}
		}
	} 

	//variable to store 'screen' of calculator
	var display = document.getElementById("in");
	var last = document.getElementById("lastExpression");
	//Event Handlers
	var simpleBtns = document.getElementsByClassName("btn");
	for (var i = 0; i < simpleBtns.length; i++) {
		simpleBtns[i].addEventListener("click", displayInput);
	}
	//equal sign
	document.getElementById("enter").addEventListener("click", calculator.calcResult);
	//clear button
	document.getElementById("clear").addEventListener("click", calculator.clear);
	//toogle sign
	document.getElementById("signed").addEventListener("click", calculator.sign);
	//backdpace
	document.getElementById("backspace").addEventListener("click", calculator.removeLast);
	//square
	document.getElementById("square").addEventListener("click", calculator.square);
	//PI
	document.getElementById("pi").addEventListener("click", calculator.pi);
	//e
	document.getElementById("euler").addEventListener("click", calculator.euler);
	//percent
	document.getElementById("percent").addEventListener("click", calculator.percentage);
	//square root
	document.getElementById("radix").addEventListener("click", calculator.squareRoot);


	function displayInput () {
		calculator.input += this.innerHTML;
		display.innerHTML = calculator.input;
	}

}());