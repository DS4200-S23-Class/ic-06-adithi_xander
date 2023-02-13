function buttonClick() {
  const frame = document.getElementById('frame');
  frame.style.borderColor = "red";
}

function mouveOver() {
  const circle = document.getElementById('circ')
  circle.style.fill = "Orange";
}

function mouveOver() {
  const circle = document.getElementById('circ')
  circle.style.fill = "Yellow";
}

addEventListener('mouseover', mouseOver())
addEventListener('mouseout', mouseOut())