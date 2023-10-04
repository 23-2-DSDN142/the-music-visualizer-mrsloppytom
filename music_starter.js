
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(230, 171, 53)

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

console.log(song.currentTime())

}
