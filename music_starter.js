
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(110, 48, 51)


var bassSize = map(bass, 0, 100, 0, height/3 )

fill(255)
square(width/3, height/3, bassSize)
}