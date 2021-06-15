let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
//grabs table and inserts cell by row auto filling by previous row length
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
//iterates and inserts adjacent cell to each row
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
    numRows--;
}
//Remove a column
function removeC() {
    let table = document.getElementById("grid");
    for (i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(table.rows[i].cells.length - 1);
        }
    numCols--;
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//fill in all squares by selected color
function fill(){
    let table = document.querySelectorAll("td").forEach(td=> td.style.backgroundColor = document.getElementById("selectedID").value);
}

//clear all color and return to white
function clearAll(){
    let table = document.querySelectorAll("td").forEach(td=> td.style.backgroundColor = "white");
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}

