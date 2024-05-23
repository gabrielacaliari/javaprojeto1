function setup() {
  createCanvas(800, 500);
  background("violet");
}

function draw() {
  fill("purple");
  stroke("lightblue");
  if (mouseIsPressed) 
  circle(mouseX, mouseY, 30, 50);
}
