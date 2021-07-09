function setup() {
  createCanvas(400, 400);

  strokeWeight(32);
  strokeCap(SQUARE);
  noFill();
  
  noLoop();
}

function draw() {
  background(32);
  
  stroke(random(255), random(255), random(255));
  arc(200, 200, 64, 64, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 64, 64, PI, 0);
  
  stroke(random(255), random(255), random(255));
  arc(200, 200, 160, 160, PI / 6, PI * 5 / 6);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 160, 160, PI * 5 / 6, PI * 3 / 2);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 160, 160, PI * 3 / 2, PI / 6);
  
  stroke(random(255), random(255), random(255));
  arc(200, 200, 256, 256, 0, PI / 2);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 256, 256, PI / 2, PI);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 256, 256, PI, PI * 3 / 2);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 256, 256, PI * 3 / 2, 0);
  
  stroke(random(255), random(255), random(255));
  arc(200, 200, 352, 352, PI * 3 / 10, PI * 7 / 10);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 352, 352, PI * 7 / 10, PI * 11 / 10);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 352, 352, PI * 11 / 10, PI * 3 / 2);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 352, 352, PI * 3 / 2, PI * 19 / 10)
  stroke(random(255), random(255), random(255));
  arc(200, 200, 352, 352, PI * 19 / 10, PI * 3 / 10)
}