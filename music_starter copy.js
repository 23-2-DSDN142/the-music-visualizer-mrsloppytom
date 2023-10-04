

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  angleMode(DEGREES)
  rectMode(CENTER)

  background(104, 142, 204)
  noFill()
  stroke(255)

  translate(width/2, height /2);

for (var i = 0; i < 200; i++){
  push()
  
  rotate(sin(frameCount + i *2) * 100)

  rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i)

  pop()
}


}
