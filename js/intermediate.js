var conference = {
	availableSeats: 0,
	alreadyBooked: 0
}

function remainingSeats() {
	return conference.availableSeats - conference.alreadyBooked;
}

if (document.getElementById("btn-admin")) {
	document.getElementById("btn-admin").addEventListener("click", processInput);
}
if (document.getElementById("btn-user")) {
	document.getElementById("btn-user").addEventListener("click", bookSeats);
}

function processInput () {
	conference.availableSeats = document.getElementById("availSeats").value;
	conference.alreadyBooked = document.getElementById("booked").value;
    localStorage.setItem("conference", JSON.stringify(conference));
    document.getElementById("confirm").innerHTML = "Your data has been saved!";
    document.getElementById("availSeats").value = "";
    document.getElementById("booked").value = "";
}

function bookSeats () {
	conference = JSON.parse(localStorage.getItem("conference"));
	//console.log(conference);
	var input = Number(document.getElementById("booking").value);
	if (remainingSeats() >= input) {
		conference.alreadyBooked = Number(conference.alreadyBooked) + input;
    	localStorage.setItem("conference", JSON.stringify(conference));
		document.getElementById("msg").innerHTML =
		"You have successfully registered " + input + " seats!";
	} else {
		document.getElementById("msg").innerHTML =
		"Sorry, we don't have enough seats left!";
	}
	document.getElementById("booking").value = "";
}