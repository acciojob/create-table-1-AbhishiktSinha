const table = document.querySelector("table");
const tbody = table.querySelector("tbody");

function insert_Row() {
    //Write your code here
	const firstRow = table.querySelector("tr");
	const newRow = createNewRow();

	tbody.insertBefore(newRow, firstRow);
  
}

function createNewRow() {
	const tr = document.createElement("tr");
	tr.innerHTML = '<td>New Cell 1</td><td>New Cell 2</td>';
	

	return tr;
}
