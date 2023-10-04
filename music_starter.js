
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(104, 142, 204)

// noStroke()
// var vocalSize = map(vocal, 0, 100, 0, height/2 )

// fill(235, 234, 209)
// square(width/5, height/3, vocalSize)

// var bassSize = map(bass, 0, 100, 0, height/3 )

// fill(219, 139, 33)
// square(width/5, height/3, bassSize)

// var drumSize = map(drum, 0, 100, 0, height/4 )

// fill(140, 17, 17)
// square(width/5, height/3, drumSize)

// fill(255, 255, 0);
 
// display "words"
textAlign(CENTER);
textSize(vocal);
text(words, width/2, height/3);



// strokeWeight(9)

// let drumMap = map(drum, 0, 100, 5, 70);
// let lengthofLine = 300;
// let LineStart = 100;
// let lineEnd = LineStart + lengthofLine;
// stroke(drumMap, 80, 80);

// for(let i = 1; i<= drumMap; i++){
//   let lineStep = i*20;
//   circle(LineStart, lineStep, lineEnd, lineStep);
// }

noFill()
let vocWave = map(vocal, 0, 100, 20, 250);

let waveHeight = vocWave;
let waveFreq = 8;

let vocYLoki = height/2;
beginShape()
for(let i=0; i< width; i++){
  vertex(i, vocYLoki-waveHeight*sin(waveFreq * i))

}
endShape()








if(song.currentTime() > 26) {                  //when counter hits 27 seconds, circle appears (vocals)
  noStroke()
  var vocalSize = map(vocal, 0, 100, 0, height/2 )
  fill(235, 234, 209)
  circle(width/2, height/2, vocalSize)
}

noStroke()
  var drumSize = map(drum, 0, 100, 0, height )
  fill(235, 234, 209)
  circle(100, 100, drumSize)

  circle(1820, 100, drumSize)

  circle(1820, 980, drumSize)

  circle(100, 980, drumSize)

// fill(63, 153, 171)
// rect(0, 630, 1920, 450)

// fill(63, 153, 171)
// rect(0, 0, 1920, 450)


// quad(600, 0,
//    1300, 0,
//     1000, 450,
//      960, 450)




var drumSize = map(drum, 0, 100, 0, height)
angleMode(DEGREES)
rectMode(CENTER)

background(104, 142, 204)
noFill()
stroke(255)

translate(width/2, height /2);

for (var i = 0; i < 200; i++){
push()

rotate(sin(frameCount + i *2) * 100)

rect(0, 0, 600 - i * 3, drumSize, drumSize*2)

pop()
}


















console.log(song.currentTime())

}
