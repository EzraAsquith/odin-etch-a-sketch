const container =  document.querySelector(".container");

function getGridSize() {
    let gridSize = prompt("Enter a size you would like the grid to be")
    if (gridSize > 100) {
        gridSize = prompt("Please enter a size smaller than 100, I don't want to kill your computer")
    }
    else {
        return gridSize
    }

}


let gridSize = 16
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    gridSize = prompt("Enter a size you would like the grid to be")
    if (gridSize > 100) {
        gridSize = prompt("Please enter a size smaller than 100, I don't want to kill your computer")
    }
    else {
        gridSize = gridSize
    }
})


for(let i = 0; i < gridSize; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    container.appendChild(rowDiv)
    for(let j = 0; j < gridSize; j++){
        const collumnDiv = document.createElement("div")
        collumnDiv.classList.add("collumn")
        collumnDiv.addEventListener("mouseenter", () => {
            collumnDiv.style.backgroundColor = "black"
        })
        rowDiv.appendChild(collumnDiv)
    }
}

