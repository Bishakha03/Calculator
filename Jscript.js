let currTxt = '';

addChar = (x) => {
  currTxt = currTxt + x
  document.querySelector('#screen').value = currTxt;
  scrollScreenRight()
  flag=0;
}

delChar = () => {
  currTxt = currTxt.slice(0,-1);
  document.querySelector('#screen').value = currTxt;

}

delAll = () => {
  currTxt='';
  document.querySelector('#screen').value = currTxt;
  scrollScreenRight()
}

calc = () => {
  currTxt=eval(currTxt);
  document.querySelector('#screen').value = currTxt;
}

function scrollScreenRight() {
  const screen = document.querySelector('#screen');
  screen.scrollLeft = screen.scrollWidth;
}