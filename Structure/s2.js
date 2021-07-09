function setup() {
    createCanvas(1500, 720);
  }
  
  function draw() {
    background(0);
    noStroke();
    for (let i = 0; i < height; i += 20) {
      fill(129, 206, 15);
      rect(0, i, width, 10);
      fill(255);
      rect(i, 0, 10, height);
    }
  }