body = document.getElementById("grid");
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
            });
            //Throws error but works as intended
            target.appendChild(square);
        }
    }

}

function addRestartButton() {
    let underGrid = document.querySelector("body");
    underGrid.setAttribute("style", "display: flex; flex-direction: column; align-content: center")
    let restartBtn = document.createElement("button");
    restartBtn.setAttribute("style", "margin-top: 50px; padding: 12px 24px; text-align: center; color: darkred; width: 25%; align-self: center");
    restartBtn.textContent = "RESTART";
    restartBtn.addEventListener("click", (e) => {

    })
    underGrid.appendChild(restartBtn);
}

function useEtchASketch(num1, num2) {
    makeRows(num1);
    makeSquares(num2);
    addRestartButton();
}


let height = prompt("What height would you like your drawing to be? (1 - 100)")
let width = height;

useEtchASketch(height, width);


//Create 1 square
//Iterate 16 squares per row
//Append to row 1 
//Repeat until all rows are filled
//Append to body