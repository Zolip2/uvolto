var nulla = new Audio('sound/0.mp3')
var egy = new Audio('sound/1.mp3')
var kettő = new Audio('sound/2.mp3')
var három = new Audio('sound/3.mp3')
var négy = new Audio('sound/4.mp3')
let szám =
$('#button').click(function() {
    let szám = Math.floor(Math.random() * 5)
    console.log(szám)
    if (szám == 0) {
        nulla.play()
    } else if (szám == 1) {
        egy.play()
    } else if (szám == 2) {
        kettő.play()
    } else if (szám == 3) {
        három.play()
    } else if (szám == 4) {
        négy.play()
    }
})