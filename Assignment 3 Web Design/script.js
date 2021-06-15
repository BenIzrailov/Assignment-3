let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {
    var table = document.getElementById("grid");
    var table_row = table.insertRow(table.rows.length);
    if(numRows == 0){
    table_row.insertCell(-1);
    }
    if(numRows > 0){
    for(var i = 0;i<table.rows[0].cells.length;i++){
        table_row.insertCell(i);
    }
    }
    numRows++;
}

//Adds a column
function addC() {
    var table = document.getElementById("grid");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell(table.rows[i].cells.length);
    }
    numCols++;
}

//Removes a row
function removeR() {
    let table = document.getElementById("grid");
    table.deleteRow(table.rows.length - 1);
}
//Remove a column
function removeC() {
    let table = document.getElementById("grid");
    for (i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(table.rows[i].cells.length - 1);
        }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}