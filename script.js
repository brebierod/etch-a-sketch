body = document.querySelector("body");
let rows = [];
let squares = [];
//Create 1 row
function makeRow() {
    const row = document.createElement("div");

    return row;
}

//Specify row height and width

//Iterate 16 rows

function makeRows() {
    for (let i = 0; i < 16; i++) {
        const duplicate = document.createElement("div");
        duplicate.setAttribute("style", "width: 800px; height: 50px; background-color: beige; display: flex; justify-content: space-between");
        duplicate.setAttribute("id", `${[i + 1]}`)
        rows.push(duplicate);
    }
    rows.forEach(function (item) {
        body.appendChild(item);
    });


};

function makeSquares() {
    
    addRows: for (let j = 0; j < 16; j++) {
        const target = document.getElementById(`${j + 1}`);
       Squares: for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.setAttribute("style", "outline-color: lightblue; outline-style: solid; outline-width: 1px; width: 6%; height: 46px; background-color: white");
       square.setAttribute("class", "square");
        target.appendChild(square);
    };
    };
};

makeRows();
makeSquares();
//Create 1 square
//Iterate 16 squares per row
//Append to row 1 
//Repeat until all rows are filled
//Append to body