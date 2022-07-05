/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

const localClassCor = document.getElementsByClassName('color');

function alteraCor() {
  const possiveisCores = ['black', 'yellow', 'green', 'red'];
  for (let index = 0; index < 4; index += 1) {
    localClassCor[index].style.backgroundColor = possiveisCores[index];
  }
}
alteraCor();
function createSquare() {
  pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    pixelSquare = document.createElement('div');

    pixelSquare.className = 'pixel';
    pixelSquare.style.backgroundColor = 'white';

    pixelBoard.appendChild(pixelSquare);
  }
}
createSquare();

function colorSelect() {
  localClassCor[0].classList.add('selected');
}
colorSelect();

for (let index = 0; index < localClassCor.length; index += 1) {
  localClassCor[index].addEventListener('click', atribuiClass);
}

function atribuiClass(event) {
  const selectionClass = document.querySelector('.selected');
  selectionClass.classList.remove('selected');
  event.target.classList.add('selected');
}

quadrados = document.getElementsByClassName('pixel');
for (let index = 0; index < quadrados.length; index += 1) {
  quadrados[index].addEventListener('click', adicionarCor);
}

function adicionarCor(event) {
  const selectionClass = document.querySelector('.selected');
  if (selectionClass.style.backgroundColor !== event.target.style.color) {
    event.target.style.backgroundColor = selectionClass.style.backgroundColor;
  }
}

function createButton(elemento, id) {
  buttonContainer = document.getElementById('button-container');
  button = document.createElement(elemento);
  buttonContainer.appendChild(button);
  button.id = id;
}
createButton('button', 'clear-board');
createButton('input', 'board-size');
createButton('button', 'generate-board');

function addText(id, text) {
  textAdd = document.getElementById(id);
  textAdd.innerText = text;
}
addText('clear-board', 'Limpar');
addText('generate-board', 'VQV');

function addAtributeTypeNumber(id) {
  atributoAdd = document.getElementById(id);
  atributoAdd.setAttribute('type', 'number');
  atributoAdd.setAttribute('min', '0');
  atributoAdd.setAttribute('value', '0');
}
addAtributeTypeNumber('board-size');
const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearButton);
function clearButton() {
  pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
const inputText = document.getElementById('board-size');
pixelBoard = document.getElementById('pixel-board');
const botaoVQV = document.getElementById('generate-board');
const localNewDiv = document.getElementsByTagName('body')[0];

botaoVQV.addEventListener('click', createInputSquare);
function createInputSquare() {
  const valorInput = inputText.value;
  const valueInput = parseInt(inputText.value) * parseInt(inputText.value);
  if (inputText.value <= 0) {
    alert('Board inválido!');
  } else {
    pixelBoard.remove();
    const newDiv = document.createElement('div');
    newDiv.id = 'pixel-board';
    newDiv.style.width = `${valorInput * 42}px`;
    localNewDiv.appendChild(newDiv);

    for (let index = 0; index < valueInput; index += 1) {
      const pixelSquare = document.createElement('div');
      pixelSquare.className = 'pixel';
      pixelSquare.style.backgroundColor = 'white';
      newDiv.appendChild(pixelSquare);
    }
    pixelBoard = newDiv;
  }
}
