let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {
    var table = document.getElementById("grid");
    var row = table.insertRow(table.rows.length);
    if(numRows == 0){
    row.insertCell(-1);
    }
    if(numRows > 0){
    for(var i = 0;i<table.rows[0].cells.length;i++){
        row.insertCell(i);
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
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
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