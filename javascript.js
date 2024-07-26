
//the container that all the small grids will go into 
const container = document.querySelector(".container");

let gridCount = 16;
let canvasSize = container.clientWidth;

console.log(canvasSize);

function createGrid() {
    let gridSize = canvasSize/gridCount

    console.log(gridSize);

    for(i=0; i<gridCount*gridCount; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = gridSize + 'px';
        grid.style.height = gridSize + 'px';
        container.appendChild(grid);
    }
}

createGrid();