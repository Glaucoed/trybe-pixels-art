/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

const localClassCor = document.getElementsByClassName('color');
// const

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
  if (selectionClass.style.backgroundColor === event.target.style.color) {
    event.target.style.backgroundColor = 'white';
  } else {
    event.target.style.backgroundColor = selectionClass.style.backgroundColor;
  }
}
