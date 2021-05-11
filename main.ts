let tal = 0
let resultat = 0
let base = 0
input.onGesture(Gesture.Shake, function () {
    tal = 0
    basic.showNumber(tal)
})
input.onButtonPressed(Button.A, function () {
    tal += 1
    tal = tal % 10
    basic.showNumber(tal)
})
input.onButtonPressed(Button.AB, function () {
    resultat = base * tal
    basic.showNumber(resultat)
    resultat = 0
})
input.onButtonPressed(Button.B, function () {
    base += 1
    basic.showNumber(base)
})
input.onGesture(Gesture.LogoDown, function () {
    base = 0
    basic.showNumber(base)
})
