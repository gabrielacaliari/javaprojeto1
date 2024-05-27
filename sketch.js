function setup() {
  createCanvas(1500, 700);
  background("black");
}

function draw() {
  fill("purple");
  stroke("lightblue");
  if (mouseIsPressed) {
  circle(mouseX, mouseY, 50);
}
}
