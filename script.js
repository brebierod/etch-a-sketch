body = document.querySelector("body");
body.style.height = "800px";
let rows = [];
let squares = [];
//Create 1 row
function makeRow() {
    const row = document.createElement("div");

    return row;
}

//Specify row height and width

//Iterate 16 rows

function makeRows(num) {
    for (let i = 0; i < num; i++) {
        const duplicate = document.createElement("div");
        duplicate.setAttribute("style", "width: 800px; height: auto; background-color: beige; display: flex; justify-content: space-between");
        duplicate.setAttribute("id", `${[i + 1]}`)
        rows.push(duplicate);
    }
    rows.forEach(function (item) {
        body.appendChild(item);
    });


};

function makeSquares(num) {

    addRows: for (let j = 0; j < num; j++) {
        const target = document.getElementById(`${j + 1}`);
        Squares: for (let i = 0; i < num; i++) {
            const square = document.createElement("div");
            square.setAttribute("style", "outline-color: lightblue; outline-style: solid; outline-width: 1px; width: auto; height: auto; background-color: black; opacity: 0");
            square.style.height = 800 / num + "px";
            square.style.width = 800 / num + "px";
            square.setAttribute("class", "square");
            square.addEventListener("mouseover", (e) => {
                square.style.opacity = +square.style.opacity + 0.1;
            })
            target.appendChild(square);
        };
    };

};



makeRows(55);
makeSquares(64);
//Create 1 square
//Iterate 16 squares per row
//Append to row 1 
//Repeat until all rows are filled
//Append to body