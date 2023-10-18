firstRun = true

let circleY = -480
var circleXArray = [-900, -700, -500, -300, -100, 100, 300, 500, 700, 900 ];
let trees = [];

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(104, 142, 204)

  if (song.currentTime() >82){
   background(199, 36, 24)
  }
  if (song.currentTime() >114){
    background(104, 142, 204)
   }


//loading in tree image sequence
  if(firstRun){
    trees.push(loadImage('tree_1.png'));
    trees.push(loadImage('tree_2.png'));
    trees.push(loadImage('tree_3.png'));

    firstRun = false
    }
  

// display "words"
textAlign(CENTER);
textSize(vocal);
text(words, width/2, height/3);





// noFill()
// let vocWave = map(vocal, 0, 100, 20, 250);

// let waveHeight = vocWave;
// let waveFreq = 8;

// let vocYLoki = height/2;
// beginShape()
// for(let i=0; i< width; i++){
//   vertex(i, vocYLoki-waveHeight*sin(waveFreq * i))
//   }
// endShape()


//when counter hits 27 seconds, circle appears (vocals)
noStroke()
if(song.currentTime() > 26) {
  var vocalSize = map(vocal, 0, 100, 0, height/2 )
  fill(235, 234, 209)
  circle(width/2, height/2, vocalSize)
}




translate(width/2, height /2);




var bassSize = map(bass, 0, 100, 0, height/2)
angleMode(DEGREES)
rectMode(CENTER)

noFill()
stroke(41, 177, 214) //light blue

if(song.currentTime() >82){
  stroke(1, 5, 13)
}
if(song.currentTime()> 114){
  stroke(199, 36, 24)
}

for (var i = 0; i < 200; i++){
push()

rotate(tan(frameCount + i *5) * 1)
rotate(90)
rect(0, 0, 2000 - i *10, bassSize*10, bassSize*4)

pop()
}


//background lines that change colour - changes with bass
var bassSize = map(bass, 0, 100, 0, height/2)
angleMode(DEGREES)

stroke(41, 177, 214) //light blue

if(song.currentTime() >82 ){ //when song hits 82 seconds, colour change
  stroke(1, 5, 13)
}
if(song.currentTime()> 114){ //once chorus starts, switch to red
  stroke(199, 36, 24)
}

for (var i = 0; i < 200; i++){
push()

rotate(tan(frameCount + i *5) * 1)

rect(0, 0, 2000 - i *10, bassSize*10, bassSize*4)

pop()
}



//drum - spooky circle
var drumSize = map(drum, 0, 100, 0, height);
angleMode(DEGREES);

noFill();
stroke(255);

for (var i = 0; i < 200; i++){
push();

rotate(sin(frameCount + i *2) * 100);

rect(0, 0, 600 - i * 3, drumSize, drumSize*2);

pop();
}





// var otherSize = map(other, 0, 100, 0, height)
// angleMode(DEGREES)
// rectMode(CENTER)

// noFill()
// stroke(110, 235, 103)

// if(song.currentTime() < 114 && song.currentTime() > 146) {  
// rotate(other*4)
// }

// for (var i = 0; i < 200; i++){
// push()

// rotate(tan(frameCount + i *5) * 1)

// rect(0, 0, 2000 - i *10, otherSize*6, otherSize/2)

// pop()
// }


let mountC = 0

if(song.currentTime() >82){
  push();
  mountC = 240;
  pop();
}
if(song.currentTime() >114){
    push();
    mountC = 0;
    pop();
  }


  
fill(mountC);
noStroke()
beginShape();
  vertex(200, 100);
  vertex(300, -10);
  vertex(400, -20);
  vertex(500, -40);
  vertex(600, -80);
  vertex(700, -100);
  vertex(800, -150)
  vertex(900, -200);
  vertex(1000, -100)
  vertex(1100, 750);
  vertex(100, 150);
endShape(CLOSE);


//left mountain
beginShape();
  vertex(-100, 150);
  vertex(-2200, 1080);
  vertex(-2200, -200);
  vertex(-1000, -200);
  vertex(-800, -200)
  vertex(-700, -150)
  vertex(-600, -100)
  vertex(-500, -10)
  vertex(-400, -30)
  vertex(-300, 50)
  vertex(-200, 80);
endShape(CLOSE)

// if(song.currentTime()>5) {
//   push()
//   mountC = 240;
//   pop()
// }




//pathway in center

let pathC= 240

if(song.currentTime() > 82){
  push();
  pathC = 0;
  pop();
}
if(song.currentTime() >114){
  push();
  pathC = 240;
  pop();
}

fill(pathC);
quad(-100, 150,
  100, 150,
  1920, 750,
  -2200, 1080);


  

 



 //image sequence: trees
var OtherFrame = int(map(vocal, 0, 100, 0, 3));
console.log(OtherFrame);
push();
scale(1);
image(trees[OtherFrame], -960, -540);
pop();


//when counter hits 27 seconds, circle appears (vocals)
if(song.currentTime() > 25.6) {  
  
  var vocalSize = map(vocal, 0, 100, 0, height)
  angleMode(DEGREES)

  noFill()
  strokeWeight(3)
  stroke(255)

  for (var i = 0; i < 200; i++){
  push()

  rotate(sin(frameCount + i *2) * 10)

  circle(0, 0, vocalSize/2* i )

  pop()
  }
}

// if(song.currentTime()>10){
noStroke()
var otherSize = map(other, 0, 100, 0, height )
  fill(235, 234, 209);
  circle(circleXArray[0], circleY, otherSize/5);
  circle(circleXArray[1], circleY, otherSize/5);
  circle(circleXArray[2], circleY, otherSize/5);
  circle(circleXArray[3], circleY, otherSize/5);
  circle(circleXArray[4], circleY, otherSize/5);
  circle(circleXArray[5], circleY, otherSize/5);
  circle(circleXArray[6], circleY, otherSize/5);
  circle(circleXArray[7], circleY, otherSize/5);
  circle(circleXArray[8], circleY, otherSize/5);
  circle(circleXArray[9], circleY, otherSize/5);

  circleY = circleY +1
  if(circleY>480){
    circleY= -480
  }



//   let drumMap = map(drum, 0, 100, 5, 70);
// let lengthofLine = 300;
// let LineStart = 100;
// let lineEnd = LineStart + lengthofLine;
// stroke(drumMap, 80, 80);

// for(let i = 1; i<= drumMap; i++){
//   let lineStep = i*20;
//   circle(LineStart, lineStep, lineEnd, lineStep);
// }


console.log(song.currentTime())

if(song.currentTime() > 146) { 
  clear()
  background(104, 142, 204)
}

//SECTION TWO:

if(song.currentTime()>159 && song.currentTime()<162
|| song.currentTime()>165.2 && song.currentTime()<168.5
|| song.currentTime()>171.5 && song.currentTime()<174.5
|| song.currentTime()>181.5 && song.currentTime()<184.5  ){
  
  noFill()
  stroke(0)

  let vocWave = map(vocal, 0, 100, 20, 250);
  
  let waveHeight = 300;
  let waveFreq = vocWave*5;
  
  let vocYLoki = height-1080;
  beginShape()
  for(let i=-1080; i< width; i++){
    vertex(i, vocYLoki-waveHeight*sin(waveFreq * i))
    }
  endShape()
}

}


