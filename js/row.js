function addRow(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  //Column 1
  var cellhead1 = document.createElement("TH");
  cell1 = row.insertCell(0);
  cellhead1.innerHTML = rowCount;
  cell1.appendChild(cellhead1);
  //Column 2
  var cell2 = row.insertCell(1);
  var element2 = document.createElement("input");
  element2.type = "text";
  cell2.appendChild(element2);
  //Column 3
  var cell3 = row.insertCell(2);
  var element3 = document.createElement("input");
  element3.type = "text";
  cell3.appendChild(element3);
  //Column 4

  var cell4 = row.insertCell(3);
  var element4 = document.createElement("input");
  element4.type = "button";
  var btnName = "button" + rowCount;
  element4.name = btnName;
  element4.setAttribute("value", "Delete"); // or element1.value = "button";
  element4.onclick = function () {
    removeRow(btnName);
  };
  cell4.appendChild(element4);
}
function removeRow(btnName) {
  try {
    var table = document.getElementById("dataTable");
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
      var row = table.rows[i];
      var rowObj = row.cells[3].childNodes[0];
      if (rowObj.name == btnName) {
        table.deleteRow(i);
        rowCount--;
      }
    }
  } catch (e) {
    alert(e);
  }
}
