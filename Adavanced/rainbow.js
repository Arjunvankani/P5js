function setup() {
  createCanvas(1500, 720);
  noStroke();
}

function draw() {
  // red
  fill(255, 0, 0);
  rect(0, 0, 1500, 100);

  // orange
  fill(255, 165, 0);
  rect(0, 100, 1500, 200);

  // yellow
  fill(255, 255, 0);
  rect(0, 200, 1500, 300);

  // green
  fill(0, 255, 0);
  rect(0, 300, 1500, 400);

  // blue
  fill(0, 0, 255);
  rect(0, 400, 1500, 500);

  // indigo
  fill(75, 0, 130);
  rect(0, 500, 1500, 600);

  // violet
  fill(148, 0, 211);
  rect(0, 600, 1500, 700);
}