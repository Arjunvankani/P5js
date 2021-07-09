let loopers;

function setup() {
  createCanvas(1500, 720);
  
  loopers = [];
  for(let i = 0; i < 25; i++){
    loopers.push(new Looper(0, random(height)));
  }
  
  background(32);
  strokeWeight(4);
}

function draw() {
  background(32, 3);
  for(const looper of loopers){
    looper.step();
    looper.draw();
  }
}

class Looper {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.heading = 0;
    this.speed = random(1, 5);
    this.sinOffset = random(100);
    this.loopingSpeed = random(.025, .1) * (random(1) < .5 ? 1 : -1);
    this.c = random(255);
    this.looping = false;
    this.maybeDoneLooping = false;
  }
  
  step() {

    if(this.looping){
      this.heading += this.loopingSpeed + sin(this.sinOffset + frameCount * .1) * .05;
      this.constrainHeading();
      
      if(!this.maybeDoneLooping){
       if(abs(this.heading - PI) < .1){
         this.maybeDoneLooping = true;
       } 
      }
      
      if(this.maybeDoneLooping && (this.heading < TAU * .05 || this.heading > TAU * .95)){
        this.looping = false;
        this.maybeDoneLooping = false;
        this.loopingSpeed = random(.025, .1) * (random(1) < .5 ? 1 : -1);
      }
    } else {
      // not looping
      this.heading = randomGaussian() * .1 + sin(this.sinOffset + frameCount * .1) * .25;
      this.constrainHeading();
      
      if(this.x > width * .25 && random(1) < .01){
        this.looping = true;
      }
    }
    
    this.prevX = this.x;
    this.prevY = this.y;
    this.x += cos(this.heading) * this.speed;
    this.y += sin(this.heading) * this.speed;
    
    if(this.x < 0 || this.x > width || this.y < 0 || this.y >height){
      this.x = 0;
      this.y = random(height);
      this.prevX = this.x;
      this.prevY = this.y;
      this.heading = 0;
      this.c = color(random(255), random(255), random(255));
    }
    
  }
  
  constrainHeading(){
      if(this.heading < 0){
        this.heading += TAU;
      }
      this.heading = this.heading % TAU;
  }
  
  draw() {
    stroke(this.c);
    line(this.prevX, this.prevY, this.x, this.y);
  }
  
}