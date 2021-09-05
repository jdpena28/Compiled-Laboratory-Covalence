const cells = document.querySelectorAll('#board > .cell')
cells.forEach(cells => {
    cells.addEventListener('click', (event) => {
        event.target.textContent = 'X'
    })
});

