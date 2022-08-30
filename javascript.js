let dimension = 16;

const paintContainer = document.querySelector(".paint-container");

createGrid(dimension);

function changeGrid(){
    do {
        dimension = prompt("How many boxes do you want per row/column? (max 100)");
    } while (dimension > 100);
    deleteGrid(paintContainer);
    createGrid(dimension);
}

function createGrid(dimension){
    for (let i = 1; i <= dimension; i++) {
        for (let j = 1; j <= dimension; j++) {
        
            const div = document.createElement('div');
            div.classList.add("paint-box");
    
            div.style.gridRow = i;
            div.style.gridColumn = j;
    
            paintContainer.appendChild(div);
        }
    }

    const paintBoxes = document.querySelectorAll(".paint-box");

    paintBoxes.forEach( function (paintbox){
        paintbox.addEventListener('mouseover', function() {
            if (!this.classList.contains("painted")){
                input = document.querySelector("#colorpicker");
                console.log(input.value);
                this.style.backgroundColor = input.value;
            }
        })
    })

}

function deleteGrid(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function eraseGrid(){
    let paintBoxes = document.querySelectorAll(".paint-box");
    paintBoxes.forEach(function(paintbox){
        paintbox.classList.remove("painted");
    })
}