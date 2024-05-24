function setup() {
  createCanvas(1200, 800);
  background("black");
}

function draw() {
  fill("purple");
  stroke("lightblue");
  if (mouseIsPressed) {
  circle(mouseX, mouseY, 50);
}
}
