// Animation for Trio Tain

let tileCount1, tileCount2;
let drips = [];
let pane = [];
let shade = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  tileCount1 = 4;
  tileCount2 = 4;
  frameRate(30);
  background(200, 20, 70);
  for (var j = 0; j < 200; j++) {
		drips[j] = new Drip(random(width), random(height), random(10));
	}
}

function draw() {
//   background(220);
 background(200, 20, 70, 1);
 grid();
  for (let i = 0; i < drips.length; i++) {
    drips[i].move();
    drips[i].edges();
		drips[i].show();
  }
  shade += 0.25;
  if (shade = 100){
    shade = 0;
  }
  
}

function grid(){
  for (let gridY = 0; gridY < tileCount2; gridY++) {
    for (let gridX = 0; gridX < tileCount1; gridX++) {
      let posX = (width / tileCount1) * gridX;
      let posY = (height / tileCount2) * gridY;
      //noFill();
      strokeWeight(7);
      fill(random(180, 360), random(100), random(100), 5)
      stroke(0);
      rect(posX, posY, width/tileCount1, height/tileCount2);
    }
  } 
}

class Drip {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
		this.x = this.x + random(-2, 2);
		this.y = this.y + random(5);
	}

  edges(){
    if (this.x < 0){
      this.x = width;
    } else if (this.x > width){
      this.x = 0;
    }

    if (this.y < 0){
      this.y = height;
    } else if (this.y > height){
      this.y = 0;
      
    }

  }

	show() {
		noStroke();
    // stroke(0, 50);
    fill(200, 10, 20, 40);
    // fill(255, 50);
		ellipse(this.x, this.y, this.r);
	}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
