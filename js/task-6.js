
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    boxesContainer.innerHTML = '';
    let boxSize = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        boxSize += 10;
        box.style.display = 'inline-block';
        box.style.margin = '5px';
    }
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

function handleCreateClick() {
    const amount = parseInt(input.value);       
    if (!isNaN(amount) && amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
    }
}

function handleDestroyClick() {
    destroyBoxes();
}

createBtn.addEventListener('click', handleCreateClick);
destroyBtn.addEventListener('click', handleDestroyClick);