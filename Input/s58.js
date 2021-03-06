function setup() {
  createCanvas(1500, 720);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(230);

  let r1 = map(mouseX, 0, width, 0, height);
  let r2 = height - r1;

  fill(237, 34, 93, r1);
  rect(width / 2 + r1 / 2, height / 2, r1, r1);

  fill(237, 34, 93, r2);
  rect(width / 2 - r2 / 2, height / 2, r2, r2);
}
