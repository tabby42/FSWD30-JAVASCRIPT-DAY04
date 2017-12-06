var store = [];
var result = 0;

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
			store.push(numbers.one);
			printIn();
			break;
		case "two":
			store.push(numbers.two);
			printIn();
			break;
		case "plus":
			store.push(basicOperations.plus);
			printIn();
			break;
		case "enter":
			calcResult(store);
	}
}

var inScreen = document.getElementById("in");
// var outScreen = document.getElementById("out");

function printIn ( ) {
	var print = "";
	for (var i = 0; i < store.length; i++) {
		print += store[i] + " ";
	}
	inScreen.innerHTML = print;
}

function printOut ( ) {
	inScreen.innerHTML = result;
}

function calcResult( arr ) {
	var numbers = [];
	var operation = "";
	for (var i = 0; i < arr.length; i++) {
		if (!isNaN(arr[i])) {
			console.log("is number");
			numbers.push(arr[i]);
		} else {
			if (arr[i] === "+") {
				operation = basicOperations.plus;
			}
		}
	}
	switch (operation) {
		case "+":
			result = add(numbers);
			break;
	}
	//console.log(numbers, operation);
	store = [];
	store.push(result);
	printOut();
}

function add ( arr ) {
	var res = 0;
	for (var i = 0; i < arr.length; i++) {
		res += arr[i];
	}
	return res;
}





