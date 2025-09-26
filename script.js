'use strict';

const container = document.querySelector('#container');

for (let i = 0; i < (16*16); i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.height = `${256/16}px`;
    grid.style.width = `${256/16}px`;

    container.appendChild(grid);
}