document.getElementById('year').innerText = new Date().getFullYear();

const noteBox = document.getElementById('noteBox');
const minionContainer = document.getElementById('minionContainer');

noteBox.addEventListener('mouseenter', () => {
    minionContainer.classList.add('isSmiling');
});

noteBox.addEventListener('mouseleave', () => {
    minionContainer.classList.remove('isSmiling');
});