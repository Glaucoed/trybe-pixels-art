/* eslint-disable no-undef */

function alteraCor() {
  const localClassCor = document.getElementsByClassName('color');
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
  const localClassCor = document.getElementsByClassName('color')[0];
  localClassCor.classList.add('selected');
}
colorSelect();
