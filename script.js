const container =  document.querySelector(".container");

for(let i = 0; i < 16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    container.appendChild(rowDiv)
    for(let j = 0; j < 16; j++){
        const collumnDiv = document.createElement("div")
        collumnDiv.classList.add("collumn")
        collumnDiv.addEventListener("mouseenter", () => {
            collumnDiv.style.backgroundColor = "black"
        })
        rowDiv.appendChild(collumnDiv)
    }
}

