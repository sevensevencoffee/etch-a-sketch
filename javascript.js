
//the container that all the small grids will go into 
const container = document.querySelector(".container");

let canvasSize = container.clientWidth;

console.log(canvasSize);




function createGrid() {
    
    container.innerHTML = '';
    const input = document.querySelector("#sizeEntry");

    let gridCount = input.value || 16;

    let gridSize = canvasSize/gridCount

    if(isNaN(gridCount) || gridCount <= 0 || gridCount > 100) {
        alert("Invalid grid size.");
        return;
    }

    for(i=0; i<gridCount*gridCount; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = gridSize + 'px';
        grid.style.height = gridSize + 'px';
        container.appendChild(grid);

        function draw(e){
            const color = document.querySelector("#colorPicker")
            e.target.style.backgroundColor = color.value;
            }
        
        grid.addEventListener("mousemove", draw)
    }
  
}

createGrid();

const changeBtn = document.querySelector("button");
changeBtn.addEventListener("click", createGrid);






