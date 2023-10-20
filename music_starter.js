firstRun = true

//code for circles (they come in during section two)
let circleY = -480
var circleXArray = [-900, -700, -500, -300, -100, 100, 300, 500, 700, 900 ];

//code for trees 
let trees = [];

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
    
console.log(song.currentTime());
//////////////////////////////////////////////

//background colour changes in section one

  background(104, 142, 204); //blue

  if (song.currentTime() >82){
   background(199, 36, 24); //red
  }
  if (song.currentTime() >114){
    background(104, 142, 204); //blue
   }

///////////////////////////////////////////////

//loading in tree image sequence
  if(firstRun){
    trees.push(loadImage('tree_1.png'));
    trees.push(loadImage('tree_2.png'));
    trees.push(loadImage('tree_3.png'));

    firstRun = false;
    }
  
translate(width/2, height /2);

////////////////////////////////////////////////////////

//code for the lines that appear in the background behind the landscappe and drum

var bassSize = map(bass, 0, 100, 0, 500);
angleMode(DEGREES);
rectMode(CENTER);

noFill();
stroke(255, 202, 28); //yellow

if(song.currentTime() >82){ //when song hits 82 seconds, colour change
  stroke(1, 5, 13); //black
}
if(song.currentTime()> 114){ //once chorus starts, switch to red
  stroke(199, 36, 24);
}


for (var i = 0; i < 200; i++){
push();

rotate(tan(frameCount + i *5) * 1);

rect(0, 0, 2000 - i *10, bassSize*10, bassSize*4);

pop();
}

//I stacked two copies of the code on top of each other to create the look
//below is the duplicate
noFill();

for (var i = 0; i < 200; i++){
push();

rotate(tan(frameCount + i *5) * 1);
rotate(90);
rect(0, 0, 2000 - i *10, bassSize*10, bassSize*4);

pop();
}



////////////////////////////////////////////////////

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

/////////////////////////////////////////////////

//The two mountains and path

let mountC = 50;

if(song.currentTime() >82){ //when time is 82s, mountains become white
  push();
  mountC = 240;
  pop();
}
if(song.currentTime() >114){ //when time is 114s, mountains back to black
    push();
    mountC = 50;
    pop();
  }


 //right mountain 
fill(mountC);
noStroke();
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
  vertex(-800, -200);
  vertex(-700, -150);
  vertex(-600, -100);
  vertex(-500, -10);
  vertex(-400, -30);
  vertex(-300, 50);
  vertex(-200, 80);
endShape(CLOSE)

//pathway in center
let pathC= 240; //white

if(song.currentTime() > 82){ //when time 82s, path goes black
  push();
  pathC = 15, 13, 13;
  pop();
}
if(song.currentTime() >114){ //when time 114s, path back to white
  push();
  pathC = 240;
  pop();
}

fill(pathC);
quad(-100, 150,
  100, 150,
  5000, 2000,
  -5000, 2000);




/////////////////////////////////////////////
  

//image sequence: trees
var OtherFrame = int(map(vocal, 0, 100, 0, 3));
console.log(OtherFrame);
push();
scale(1);
image(trees[OtherFrame], -960, -540);
pop();


//when counter hits 27 seconds, white rings appears (vocals)
if(song.currentTime() > 25.6) {  
  
  var vocalSize = map(vocal, 0, 100, 0, height);

  noFill();
  strokeWeight(3);
  stroke(255);

  for (var i = 0; i < 200; i++){
  push();

  rotate(sin(frameCount + i *2) * 10);

  circle(0, 0, vocalSize/2* i );

  pop();
  }
}

//clears whole canvas to make room for next section
if(song.currentTime() > 146) {
  clear();
  background(104, 142, 204); //blue
}

//////////////////////////////////////////////////////////
//SECTION TWO:

//sine wave that represents vocals turns off and on
if(song.currentTime()>159 && song.currentTime()<162
|| song.currentTime()>165.2 && song.currentTime()<168.5
|| song.currentTime()>171.5 && song.currentTime()<174.5
|| song.currentTime()>181.2 && song.currentTime()<184.5  ){
  
  background(0);
  noFill();
  stroke(255);

  let vocWave = map(vocal, 0, 100, 20, 250);
  
  let waveHeight = 300;
  let waveFreq = vocWave*5;
  
  let vocYLoki = height-1080;
  beginShape();
  for(let i=-1080; i< width; i++){
    vertex(i, vocYLoki-waveHeight*sin(waveFreq * i));
    }
  endShape();
}

//sine wave that represents instruments turns off and on
if(song.currentTime()>146 && song.currentTime()<159
|| song.currentTime()>162 && song.currentTime()<165.2
|| song.currentTime()>168.5 && song.currentTime()<171.5
|| song.currentTime()>174.5 && song.currentTime()<181.2
|| song.currentTime()>184.5 && song.currentTime()<188 ){
  
  background(255);

//'OTHER' SHAPE IN CENTER
  var otherSize = map(other, 0, 100, 0, height);
  angleMode(DEGREES);
  rectMode(CENTER);
  
  noFill();
  stroke(255, 202, 28); //bright yellow
  
  for (var i = 1; i < 100; i++){
    push();
    
    rotate(tan(frameCount + i *5) * 1);
    
    rect(0, 0, 1000 - i *10, otherSize/20, otherSize/2);
    
    pop();
  }
  
  //BASS SHAPE (right)
  noFill();
  stroke(199, 36, 24); //red
  strokeWeight(3);

  rotate(90);
  translate(-500, 0);
  

  let bassWave = map(bass, 0, 100, 20, 250);
  
  let basswaveHeight = 300;
  let basswaveFreq = bassWave*10;
  let bassYLoki = height-1080;
  
  for(let i=-600; i< width; i++){
    vertex(i, (bassYLoki-basswaveHeight*sin(basswaveFreq * i))-480);
    }
  endShape();



//DRUM SHAPE (left)
let drumWave = map(drum, 0, 100, 20, 250);

let drumwaveHeight = 300;
let drumwaveFreq = drumWave*5;
let drumYLoki = height-1080;

stroke(0)
for(let i=-600; i< width; i++){
  circle(i, (drumYLoki-drumwaveHeight*sin(drumwaveFreq * i/10))+480, 40);
  }

//circles on top of bass wave
var otherSize = map(other, 0, 100, 0, height );
  fill(240);
  noStroke();

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

}


/////////////////////////////////////////////////

// FINAL SECTION: UPSIDE DOWN VERSION OF EARLIER SECTION


if (song.currentTime()>188  ){
  
  background(199, 36, 24); //red

  if (song.currentTime()>191  ){
    background(104, 142, 204); // when time hits 191s, BG turns blue

  rotate(90);
  }
  if (song.currentTime()>193  ){
    background(199, 36, 24); //when time hits 193s, BG turns red
    rotate(90);
  }

  if (song.currentTime()>194.5  ){
    background(104, 142, 204); //when time hits 194.5s, BG turns blue
    rotate(90);
  }
  if (song.currentTime()>196  ){
    background(199, 36, 24); // when time hits 196s, BG turns red
    rotate(90);    //restored to original rotation
  }



  //drum - spooky circle
  var drumSize = map(drum, 0, 100, 0, height);

  noFill();
  stroke(255, 202, 28);

  for (var i = 0; i < 200; i++){
  push();
  rotate(sin(frameCount + i *2) * 100);
  rect(0, 0, 600 - i * 3, drumSize, drumSize*2);
  pop();

  }

  //UPSIDE DOWN LANDSCAPE
  angleMode(DEGREES)
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

  //path in the middle
  fill(pathC); 
  quad(-100, 150,
    100, 150,
    5000, 2000,
    -5000, 2000);


//vocal circle
 var vocalSize = map(vocal, 0, 100, 0, height)
  angleMode(DEGREES)

  noFill()
  strokeWeight(3)
  stroke(20)

  for (var i = 0; i < 200; i++){
  push()

  rotate(sin(frameCount + i *2) * 10)

  circle(0, 0, vocalSize/2* i )

  pop()
  }

} 

}