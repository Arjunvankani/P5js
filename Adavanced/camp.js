let fireSquareWidth;
let fireSquareHeight;
let fireWidth;
const squareLife = 100;

const fireSquares = [];

let redColor;
let yellowColor;

let stars;
let ground;
let logs;

function setup() {
  createCanvas(1500, 720);
  
  fireSquareWidth = width * .05;
  fireSquareHeight = height * .05;
  fireWidth = width * .1;
  
  redColor = color(255, 0, 0);
  yellowColor = color(255, 255, 0);
  
  stars = createGraphics(width, height);
  stars.background(32, 0, 64);
  for(let i = 0; i < 1000; i++){
    stars.stroke(255);
    stars.strokeWeight(2);
    stars.point(random(width), random(height));
  }
  
  ground = createGraphics(width, height * .25);
  ground.background(32);
  for(let i = 0; i < 1000; i++){
    ground.noStroke();
    ground.fill(0, random(50), 0);
    ground.square(random(ground.width), random(ground.height), 10);
  }
  
  logs = createGraphics(width, height * .15);
  logs.stroke(0);
  const lightBrownColor = color(160, 82, 45);
  const darkBrownColor = color(40, 20, 10);

  for(let logX = width * .35; logX <= width * .65; logX += width * .1) {
    logs.fill(lerpColor(lightBrownColor, darkBrownColor, random(1)));
    logs.rect(logX, logs.height * 0, width * .05, height * .05);
  }
  for(let logX = width * .3; logX <= width * .7; logX += width * .1) {
    logs.fill(lerpColor(lightBrownColor, darkBrownColor, random(1)));
    logs.rect(logX, logs.height * .33, width * .05, height * .05);
  }
  for(let logX = width * .25; logX <= width * .75; logX += width * .1) {
    logs.fill(lerpColor(lightBrownColor, darkBrownColor, random(1)));
    logs.rect(logX, logs.height * .66, width * .05, height * .05);
  }
}

function draw() {
  image(stars, 0, 0);
  image(ground, 0, height * .75);
  image(logs, 0, height * .67);

  if(random(1) < .75){
    const x = randomGaussian(width / 2, fireWidth);
    fireSquares.push(new FireSquare(x, height * .75));
  }
  
  for(let i = fireSquares.length - 1; i >= 0; i--) {
    const fireSquare = fireSquares[i];
    fireSquare.draw();
    
    if(fireSquare.y < fireSquareHeight || fireSquare.life < 0){
      fireSquares.splice(i, 1);
    }
  }
}

class FireSquare {
  constructor(x, y){
    this.x = x;
    this.y = y;
    
    this.speed = map(abs(width / 2 - this.x), 150, 0, 1, 3);
    this.color = lerpColor(redColor, yellowColor, random(1));
    this.life = squareLife;
    this.sinOffset = random(1000);
  }
  
  draw(){
    this.x += sin(this.sinOffset + frameCount * .05);
    this.y -= this.speed;
    this.life--;
    
    const alpha = map(this.life, 0, squareLife * .5, 0, 255);
    
    fill(red(this.color),
         green(this.color),
         blue(this.color),
         alpha);
    stroke(32, alpha);
    rect(this.x, this.y, fireSquareWidth, fireSquareHeight);
  }
}