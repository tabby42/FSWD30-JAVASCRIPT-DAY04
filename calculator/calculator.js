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

//TODOs:
//remove possible leading zero
//prevent entering a second operator
//backspace function -> remove last character from display,

document.addEventListener("click", processInput);
function processInput ( event ) {
	var elementId = event.target.getAttribute("id");
	switch ( elementId ) {
		case "one":
			numberClicked("one");
			break;
		case "two":
			numberClicked("two");
			break;
		case "three":
			numberClicked("three");
			break;
		case "four":
			numberClicked("four");
			break;
		case "five":
			numberClicked("five");
			break;
		case "six":
			numberClicked("six");
			break;
		case "seven":
			numberClicked("seven");
			break;
		case "eight":
			numberClicked("eight");
			break;
		case "nine":
			numberClicked("nine");
			break;
		case "zero":
			numberClicked("zero");
			break;
		case "plus":
			ops = basicOperations.plus;
			opsClicked = true;
			inScreen.innerHTML += basicOperations.plus;
			break;
		case "minus":
			ops = basicOperations.minus;
			opsClicked = true;
			//lockOps();
			inScreen.innerHTML += basicOperations.minus;
			break;
		case "multiply":
			ops = basicOperations.multiply;
			opsClicked = true;
			//lockOps();
			inScreen.innerHTML += basicOperations.multiply;
			break;
		case "divide":
			ops = basicOperations.divide;
			opsClicked = true;
			//lockOps();
			inScreen.innerHTML += basicOperations.divide;
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
	numOneReady = false;
	numberTwo = "";
	numTwoReady = false;
	ops = "";
}

function numberClicked ( prop ) {
	if (!opsClicked && !numOneReady) {
		numberOne += numbers[prop];
	} else {
		numberTwo += numbers[prop];
	}
	inScreen.innerHTML += numbers[prop];
}

function calcResult( num1, num2, operation ) {
	switch (operation) {
		case "+":
			result = add(num1, num2);
			break;
		case "-":
			result = substract(num1, num2);
			break;
		case "*":
			result = multiply(num1, num2);
			break;
		case "/":
			result = divide(num1, num2);
			break;
	}
	inScreen.innerHTML = result;
	numberOne = result;
	numberTwo = "";
	numOneReady = true;
	opsClicked = false;
}

function add ( num1, num2 ) {
	return parseFloat(num1) + parseFloat(num2);
}

function substract ( num1, num2 ) {
	return parseFloat(num1) - parseFloat(num2);
}

function multiply ( num1, num2 ) {
	return parseFloat(num1) * parseFloat(num2);
}

function divide ( num1, num2 ) {
	return parseFloat(num1) / parseFloat(num2);
}






