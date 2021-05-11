let tal = 0
let resultat = 0
let base = 0
input.onGesture(Gesture.Shake, function () {
    tal = 0
    resultat = 0
})
input.onButtonPressed(Button.A, function () {
    tal += 1
    tal = tal % 10
    basic.showNumber(tal)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    resultat = base * tal
    basic.showNumber(resultat)
})
input.onButtonPressed(Button.B, function () {
    base += 1
    basic.showNumber(base)
})
input.onGesture(Gesture.LogoDown, function () {
    base = 0
    basic.showNumber(base)
})
