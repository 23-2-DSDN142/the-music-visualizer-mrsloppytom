
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(230, 171, 53)

noStroke()
var vocalSize = map(vocal, 0, 100, 0, height/2 )



fill(235, 234, 209)
square(width/5, height/3, vocalSize)


var bassSize = map(bass, 0, 100, 0, height/3 )

fill(219, 139, 33)
square(width/5, height/3, bassSize)

var drumSize = map(drum, 0, 100, 0, height/4 )

fill(140, 17, 17)
square(width/5, height/3, drumSize)

fill(255, 255, 0);
 
// display "words"
textAlign(CENTER);
textSize(vocal);
text(words, width/2, height/3);


}

