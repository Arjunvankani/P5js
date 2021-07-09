const plantBorder = 50;
const nodeBorder = 10;
const minBranchLength = 10;
const maxBranchLength = 25;
const minSizeMultiplier = .75;

let plant;
let plantX;
let plantY;

function setup() {
  createCanvas(1500, 720);
  plantX = width / 2;
  plantY = height * .9;
  plant = new Node(null, 50, random(200, 255), TAU * 0.75);
  strokeWeight(4);
}

function draw() {
  background(32);

  plant.draw();
  plant.maybeGrow();
  
  stroke(200, 0, 0);
  fill(128, 0, 0);
  quad(plantX - 50, plantY,
       plantX + 50, plantY,
       plantX + 25, plantY + 25,
       plantX - 25, plantY + 25);
}

function mousePressed() {
  const clickedNode = plant.getClickedNode(mouseX, mouseY);
  if (clickedNode) {
    clickedNode.prune();
  }
}

class Node {

  constructor(parent, parentSize, parentG, angle) {
    this.parent = parent;
    this.parentSize = parentSize;
    this.size = random(parentSize * minSizeMultiplier, parentSize);
    this.angle = angle;
    this.branchLength = random(minBranchLength, maxBranchLength);
    this.children = [];

    this.x = parent ? this.getX(parent.x) : plantX;
    this.y = parent ? this.getY(parent.y) : plantY;

    this.g = parentG + random(-25, 25);
    this.g = constrain(this.g, 128, 255);
  }

  getX(parentX) {
    return parentX + cos(this.angle) *
      (this.parentSize / 2 + this.branchLength + this.size / 2);
  }

  getY(parentY) {
    return parentY + sin(this.angle) *
      (this.parentSize / 2 + this.branchLength + this.size / 2);
  }

  grow() {
    const childAngle = this.angle + random(-PI / 3, PI / 3);
    const child = new Node(this, this.size, this.g, childAngle);

    if (child.size < 10) {
      return false;
    }

    if(child.x < plantBorder || child.x > width - plantBorder){
      return false;
    }
    
    if (child.y < plantBorder || child.y > plantY - 25) {
      return false;
    }

    if (plant.intersects(this, child.x, child.y, child.size)) {
      return false;
    }

    this.children.push(child);
    return true;
  }

  maybeGrow() {
    const grew = this.grow();

    if (!grew) {
      const randomChild = random(this.children);
      if (randomChild) {
        randomChild.maybeGrow();
      }
    }
  }

  prune() {
    // can't prune the first node
    if (this == plant) {
      return;
    }
    const index = this.parent.children.indexOf(this);
    this.parent.children.splice(index, 1);
  }

  getClickedNode(clickedX, clickedY) {
    if (dist(this.x, this.y, clickedX, clickedY) < this.size / 2) {
      return this;
    }

    for (const child of this.children) {
      const clickedChildNode = child.getClickedNode(clickedX, clickedY);
      if (clickedChildNode) {
        return clickedChildNode;
      }
    }

    return null;
  }

  intersects(parentNode, otherNodeX, otherNodeY, otherNodeSize) {
    if (this != parentNode &&
      dist(this.x, this.y, otherNodeX, otherNodeY) <
           this.size / 2 + otherNodeSize / 2 + nodeBorder) {
      return true;
    }

    for (const child of this.children) {
      if (child.intersects(parentNode, otherNodeX, otherNodeY, otherNodeSize)) {
        return true;
      }
    }

    return false;
  }

  draw() {
    
    // branches
    stroke(139, 69, 19);
    strokeWeight(10);
    for (const child of this.children) {
      line(this.x, this.y, child.x, child.y);
    }

    // circle
    fill(0, this.g, 0);
    stroke(0, this.g * .9, 0);
    strokeWeight(4);
    circle(this.x, this.y, this.size);

    // children
    for (const child of this.children) {
      child.draw();
    }
  }
}