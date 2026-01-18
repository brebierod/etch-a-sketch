body = document.querySelector("body");
let rows = [];
//Create 1 row
function makeRow() {
    const row = document.createElement("div");
   
    return row;
}

//Specify row height and width

//Iterate 16 rows

function makeRows(type) {
    for (let i = 0; i < 16; i++) {
        const duplicate = document.createElement("div");
        duplicate.setAttribute("style", "outline: 1px, lightblue, solid; width: 800px; height: 50px; background-color: beige");
        rows.push(duplicate)
        body.appendChild(rows[i]);
    }
};
//Create 1 square
//Iterate 16 squares per row
//Append to row 1 
//Repeat until all rows are filled
//Append to body