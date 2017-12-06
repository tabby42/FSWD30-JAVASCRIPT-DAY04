//var store = [];
var result = 0;
var opsClicked = false;
var numberOne = "";
var numOneReady = false;
var numberTwo = "";
var numTwoReady = false;
var ops = "";

var basicOperations = {
	plus: "+", 
	minus: "-", 
	divide: "/", 
	multiply: "*"
}

var numbers = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	zero: 0
}

document.addEventListener("click", processInput);
function processInput ( event ) {
	var elementId = event.target.getAttribute("id");
	switch ( elementId ) {
		case "one":
			if (!opsClicked && !numOneReady) {
				numberOne += numbers.one;
			} else {
				numberTwo += numbers.one;
			}
			inScreen.innerHTML += numbers.one;
			break;
		case "two":
			if (!opsClicked && !numOneReady) {
				numberOne += numbers.two;
			} else {
				numberTwo += numbers.two;
			}
			inScreen.innerHTML += numbers.two;
			break;
		case "three":
			if (!opsClicked && !numOneReady) {
				numberOne += numbers.three;
			} else {
				numberTwo += numbers.three;
			}
			inScreen.innerHTML += numbers.three;
			break;
		case "plus":
			ops = basicOperations.plus;
			opsClicked = true;
			inScreen.innerHTML += basicOperations.plus;
			break;
		case "minus":
			ops = basicOperations.minus;
			opsClicked = true;
			inScreen.innerHTML += basicOperations.minus;
			break;
		case "clear":
			clear();
			break;
		case "enter":
			opsClicked = false;
			calcResult(numberOne, numberTwo, ops);
			console.log(numberOne);
			console.log(numberTwo);
			console.log(ops);
	}
}

var inScreen = document.getElementById("in");

function printOut ( ) {
	inScreen.innerHTML = result;
}

function clear() {
	inScreen.innerHTML = "";
	result = 0;
	opsClicked = false;
 	numberOne = "";
 	numberTwo = "";
 	ops = "";
 	tooMany = false;
}

function calcResult( num1, num2, operation ) {
	switch (operation) {
		case "+":
			result = add(num1, num2);
			break;
		case "-":
			result = substract(num1, num2);
			break;
	}
	inScreen.innerHTML = result;
	numberOne = result;
	numberTwo = "";
	numOneReady = true;
	opsClicked = false;
}

function add ( num1, num2 ) {
	return Number(num1) + Number(num2);
}

function substract ( num1, num2 ) {
	return Number(num1) - Number(num2);
}





