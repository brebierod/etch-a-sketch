//Establishing grid and size
body = document.getElementById("grid");
let aspectRatio = ""
function checkScreenSize() {
    if (window.innerWidth <= 500) {
        aspectRatio = +(window.innerWidth) - 24;
    } else if (window.innerWidth > 500 && window.innerWidth < 800) {
        aspectRatio = window.innerWidth - 50;
    } else if (window.innerWidth >= 800 ) {
        aspectRatio = 800;
    }
}
checkScreenSize();
body.style.height = aspectRatio + "px";
let rows = [];
let squares = [];



function makeRow() {
    const row = document.createElement("div");

    return row;
}

function makeRows(num) {
    for (let i = 0; i < num; i++) {
        const duplicate = document.createElement("div");
        duplicate.setAttribute("style", "height: auto; background-color: beige; display: flex; justify-content: space-between");
        duplicate.style.width = aspectRatio + "px";
        duplicate.setAttribute("id", `${[i + 1]}`)
        rows.push(duplicate);
    }
    rows.forEach(function (item) {
        body.appendChild(item);
    });


};

function makeSquares(num) {

    targetRows: for (let j = 0; j < num; j++) {
        const target = document.getElementById(`${j + 1}`);
        addSquares: for (let i = 0; i < num; i++) {
            let square = document.createElement("div");
            square.setAttribute("style", "outline-color: lightblue; outline-style: solid; outline-width: 1px; width: auto; height: auto; background-color: black; opacity: 0");
            square.style.height = aspectRatio / num + "px";
            square.style.width = aspectRatio / num + "px";
            square.setAttribute("class", "square");
            square.addEventListener("mouseover", (e) => {
                square.style.opacity = +square.style.opacity + 0.1;
            });
            //Throws error but works as intended
            target.appendChild(square);
        }
    }
}

function useEtchASketch(num) {
    makeRows(num);
    makeSquares(num);
}

function restartEtchASketch(num) {
    if (num >= 1 && num <= 100) {
        underGrid.removeChild(body);
        body = document.createElement("div");
        body.setAttribute("id", "grid");
        body.style.height = 400 + "px";
        underGrid.appendChild(body);
        underGrid.appendChild(restartBtn);
        rows = [];
        squares = [];
        useEtchASketch(num);
    }
    else if (num < 1 || num > 100) {
        alert(`Try again. You typed ${num}. Number must be between 1 and 100.`);
    }
}

//Restart button to choose new grid
let underGrid = document.querySelector("body");
underGrid.setAttribute("style", "display: flex; flex-direction: column; align-content: center")
let restartBtn = document.createElement("button");
restartBtn.setAttribute("style", "margin-top: 50px; padding: 12px 24px; text-align: center; color: darkred; width: 30%; align-self: center");
restartBtn.textContent = "RESTART";
restartBtn.addEventListener("click", (e) => {
    const pixels = prompt("What pixel height would you like your drawing to be? (1 - 100)");
    restartEtchASketch(pixels);
})
underGrid.appendChild(restartBtn);

console.log(aspectRatio);
useEtchASketch(100, 100);
