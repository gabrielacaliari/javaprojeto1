function setup() {
  createCanvas(1300, 700);
  background("black");
}

function draw() {
  fill("purple");
  stroke("lightblue");
  if (mouseIsPressed) {
  circle(mouseX, mouseY, 50);
}
}
