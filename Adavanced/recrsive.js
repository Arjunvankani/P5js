const lines = [];

function setup() {
  createCanvas(1500, 720);
  lines.push(new LineDrawer(25, height - 25, 0, 275));
  strokeWeight(2);
  background(32);
}

function draw() {
  for (const line of lines) {
    line.step();
  }
}

class LineDrawer {

  constructor(x, y, heading, length) {
    this.startX = x;
    this.startY = y;
    this.currentX = x;
    this.currentY = y;
    this.heading = heading;
    this.length = length;
    this.speed = random(1, 5);
    this.spawned25 = false;
    this.spawned50 = false;
    this.spawned75 = false;
    this.c = random(100, 255);
  }

  step() {

    if (this.length < 10) {
      return;
    }
    
    const currentLength = dist(this.startX, this.startY,
                               this.currentX, this.currentY);

    if (currentLength >= this.length) {
      return;
    }

    if (!this.spawned25 && currentLength >= this.length * .25) {
      lines.push(
        new LineDrawer(this.currentX, this.currentY,
          this.heading - PI / 4, this.length * .25));
      this.spawned25 = true;
    }

    if (!this.spawned50 && currentLength >= this.length * .5) {
      lines.push(
        new LineDrawer(this.currentX, this.currentY,
          this.heading - PI / 4, this.length * .5));
      this.spawned50 = true;
    }

    if (!this.spawned75 && currentLength >= this.length * .75) {
      lines.push(
        new LineDrawer(this.currentX, this.currentY,
          this.heading - PI / 4, this.length * .75));
      this.spawned75 = true;
    }


    const prevX = this.currentX;
    const prevY = this.currentY;
    this.currentX = this.currentX + cos(this.heading) * this.speed;
    this.currentY = this.currentY + sin(this.heading) * this.speed;

    stroke(this.c);
    line(prevX, prevY, this.currentX, this.currentY);
  }
}