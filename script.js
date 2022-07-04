function alteraCor() {
  const localClassCor = document.getElementsByClassName('color');
  const possiveisCores = ['black', 'yellow', 'green', 'red'];
  for (let index = 0; index < 4; index += 1) {
    localClassCor[index].style.backgroundColor = possiveisCores[index];
  }
}
alteraCor();
