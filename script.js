var table = document.getElementById("tab_1");
for (var i = 0; i < 10; i++) { //insert 5 rows and create cells, then add the content
	table.insertRow(i).insertCell(0).innerHTML = "row " + (i + 1);
}
var rows = table.rows;
var counter = 0;
function change_display (a) {
	for (var i = 0; i < rows.length; i++) {
		if (i % 2 === 0) {
			rows[i].style.display = a;
		}
	}
}
function hide_rows() {
	button[0].innerHTML = "SHOW ODD ROWS";
	button[0].style.background = "red";
	change_display ("none");
}
function show_rows() {
	button[0].innerHTML = "HIDE ODD ROWS";
	button[0].style.background = "#76C4E7";
	change_display ("table-row");
	
}
function rows_alter() {
	if (counter % 2 === 0) {
		hide_rows();
	} else {
		show_rows();
	}
	counter++;
}
var button = document.getElementsByClassName('button');
button[0].addEventListener("click", rows_alter);
