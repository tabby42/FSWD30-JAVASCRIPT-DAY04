var library = [
		{ title: 'When Breath Becomes Air', author: 'Paul Kalanithi', readingStatus: true }, 
		{ title: 'The Girls', author: 'Emma Cline ', readingStatus: true }, 
		{ title: 'The Nest', author: 'Cynthia', readingStatus: false }, 
		{ title: 'The Crown', author: 'Kiera Cass', readingStatus: true }, 
		{ title: 'Behind Closed Doors', author: 'B.A. Paris', readingStatus: false }, 
		{ title: 'It Ends with Us', author: 'Colleen Hoover', readingStatus: true }
];

function displayReadingStatus ( booklist, id ) {
	var list = "";
	for (var i = 0; i < booklist.length; i++) {
		list += "<li>" + booklist[i].title + " <em>by " + booklist[i].author + "</em><br><b>" 
		+ (booklist[i].readingStatus ? ("Already read " +  booklist[i].title ) : ("You still need to read " + booklist[i].title ))
		+ "</b></li>";
	}
	document.getElementById(id).innerHTML = list;
}

displayReadingStatus(library, "library");

function truncate ( string, numChar ) {
	var newString = string.substring(0, numChar - 1);
	return newString;
}

document.getElementById("truncate").innerHTML = truncate("I am a hero from World of Warcraft", 12);