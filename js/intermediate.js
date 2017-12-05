var conference = {
	availableSeats: 0,
	alreadyBooked: 0,
	remainingSeats: function () {
		return availableSeats - alreadyBooked;
	}
}

document.getElementById("btn-admin").addEventListener("click", processInput);

function processInput () {
	conference.availableSeats = document.getElementById("availSeats").value;
	conference.alreadyBooked = document.getElementById("booked").value;
	console.log(conference);
}