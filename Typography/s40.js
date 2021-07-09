let font,
  fontsize = 40;
  let snowflakes = []; // array to hold snowflake objects

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(1500, 720);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {

    
  


  background('black');

  // Align the text to the right
  // and run drawWords() in the left third of the canvas
  textAlign(RIGHT);
  drawWords(width * 0.25);

  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(CENTER);
  drawWords(width * 0.5);

  // Align the text to the left
  // and run drawWords() in the right third of the canvas
  textAlign(LEFT);
  drawWords(width * 0.75);

  let t = frameCount / 60; // update time

    // create a random number of snowflakes each frame
    for (let i = 0; i < random(5); i++) {
      snowflakes.push(new snowflake()); // append snowflake object
    }
  
    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
      flake.update(t); // update snowflake position
      flake.display(); // draw snowflake
    }
}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(40);
  text('A', x, 80);

  fill(65);
  text('R', x, 150);
    
  fill(190);
  text('J', x, 220);

  fill(255);    
  text('U', x, 290);

  fill(256);
  text('N', x, 380);/*

  fill('green');
  text('M', x, 80);

  fill('yellow');
  text('A', x, 150);
    
  fill('pink');
  text('I', x, 220);

  fill('purple');    
  text('T', x, 290);

  fill('cyan');
  text('R', x, 380);

  fill(256);
  text('Y', x, 470);*/
}

function snowflake() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);
  
    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));
  
    this.update = function(time) {
      // x position follows a circle
      let w = 0.6; // angular speed
      let angle = w * time + this.initialangle;
      this.posX = width / 2 + this.radius * sin(angle);
  
      // different size snowflakes fall at slightly different y speeds
      this.posY += pow(this.size, 0.5);
  
      // delete snowflake if past end of screen
      if (this.posY > height) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
      }
    };
  
    this.display = function() {
      ellipse(this.posX, this.posY, this.size);
    };
  }
