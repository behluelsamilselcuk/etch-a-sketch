'use strict';

const container = document.querySelector('#container');
const changeGridBtn = document.querySelector('#changeGridBtn');
const containerLength = container.offsetWidth - 2;
const etchASketch = document.querySelector('#etch-a-sketch');

for (let i = 0; i < (16**2); i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = `${containerLength/16}px`;
        grid.style.width = `${containerLength/16}px`;

        container.appendChild(grid);
    }

function createGrid() {
    const gridsToDel = document.querySelectorAll('.grid');
    gridsToDel.forEach(grid => {
        grid.remove();
    });

    let numOfGrids = prompt('Wie viele Quadrate pro Seite willst du haben?\n(von 0 bis 100)', '');
    while (numOfGrids > 100 || numOfGrids < 0 || isNaN(numOfGrids)) {
        numOfGrids = prompt('Es muss eine Zahl von 0 bis 100 sein!', '');
    }
    while (numOfGrids === null || numOfGrids === '' || numOfGrids === undefined) {
        return
    }

    for (let i = 0; i < (numOfGrids**2); i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = `${containerLength/numOfGrids}px`;
        grid.style.width = `${containerLength/numOfGrids}px`;

        container.appendChild(grid);
    }
}

changeGridBtn.addEventListener('click', createGrid);

etchASketch.addEventListener('mouseover', (e) => {
    if((e.target).getAttribute('class') === 'grid') {
        e.target.style.backgroundColor = 'grey';
    }
})