var table = document.getElementById("tab_1");
var tr1 = table.insertRow(0);
var tr2 = table.insertRow(1);
var tr3 = table.insertRow(2);
var tr4 = table.insertRow(3);
var tr5 = table.insertRow(4);
var rows = table.rows;

var td1 = tr1.insertCell(0);
td1.innerHTML = "row 1"
var td2 = tr2.insertCell(0);
td2.innerHTML = "row 2"
var td3 = tr3.insertCell(0);
td3.innerHTML = "row 3"
var td4 = tr4.insertCell(0);
td4.innerHTML = "row 4"
var td5 = tr5.insertCell(0);
td5.innerHTML = "row 5"

function rows_alter(a) {
	for (var i = 0; i < table.rows.length; i++) {
		if (i % 2 == 0) {
			rows[i].style.display = a;
		}
	}
}

var button_odd = document.getElementById('odd');
button_odd.addEventListener("click", function() {
	rows_alter("none");
});
var button_even = document.getElementById('even');
button_even.addEventListener("click", function() {
	rows_alter("table-row");
});