const height = 16;
const width = 16;



const paintContainer = document.querySelector(".paint-container");

for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
    
        const div = document.createElement('div');
        div.classList.add("paint-box");

        div.style.gridRow = i;
        div.style.gridColumn = j;

        paintContainer.appendChild(div);
    }
}

const paintBoxes = document.querySelectorAll(".paint-box");
