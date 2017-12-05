//Basic 1
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

//Basic 2
function truncate ( string, numChar ) {
	var newString = string.substring(0, numChar - 1);
	return newString;
}

document.getElementById("truncate").innerHTML = truncate("I am a hero from World of Warcraft", 12);

//Basic 3
document.getElementById("table-create").addEventListener("click", createTable);
function createTable () {
	var rows = Number(prompt("Number of rows: "));
	var columns = Number(prompt("Number of columns: "));
	//console.log(rows, columns);
	var fragment = document.createDocumentFragment();
	var table = document.createElement("table");
	var tbody = document.createElement("tbody");
	for (var i = 0; i < columns; i++) {
		var column = document.createElement("tr");
		tbody.appendChild(column);
		//console.log(rows);
		for (var k = 0; k < rows; k++) {
			//console.log(k);
			column.innerHTML += "<td>Column " + k + "<br>Row " + i + "</td>";
		}
	}
	table.appendChild(tbody);
	fragment.appendChild(table);
	document.getElementById("table").appendChild(fragment);
}