var hr
var sec
var min

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
  
}

function draw() {
  background("black");
  translate (400,200) 
  hr = hour()
  min = minute()
  sec = second()
  scAngle=map(sec,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)
  minAngle=map(min,0,60,0,360)
  push();
  rotate (scAngle)
  stroke ("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push();
  rotate (hrAngle)
  stroke ("blue")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push();
  rotate (minAngle)
  stroke (57, 255, 20)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  noFill()
  point (0,0)
  stroke("red")
  strokeWeight(10)
  arc (0,0,250,250,0,scAngle)
  noFill()
  point(0,0)
  stroke("blue")
  strokeWeight(10)
  arc(0,0,350,350,0,hrAngle)
  noFill()
  point()
  stroke(57, 255, 20)
  strokeWeight(10)
  arc(0,0,300,300,0,minAngle)
  
  drawSprites();
}