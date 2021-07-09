function setup() {
  createCanvas(1400, 720, WEBGL);
}

function draw() {
  background(100);

  noStroke();
  fill(50);
 

  noFill();
  stroke(255);
  push();
  translate(100, height * 0.35, -200);
  sphere(200);
  pop();
}