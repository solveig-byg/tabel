let tal = 0
let base = 0
input.onGesture(Gesture.Shake, function () {
    tal = 0
    basic.showNumber(tal)
})
input.onButtonPressed(Button.A, function () {
    tal += tal % 10
    basic.showNumber(tal)
})
input.onButtonPressed(Button.AB, function () {
    base = 0
    basic.showNumber(base)
})
input.onButtonPressed(Button.B, function () {
    base += 1
    basic.showNumber(base)
})
