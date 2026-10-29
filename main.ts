radio.onReceivedNumber(function (receivedNumber) {
    while (Acknowledge == false) {
        basic.showNumber(receivedNumber)
    }
    basic.clearScreen()
    Acknowledge = false
})
input.onButtonPressed(Button.A, function () {
    Acknowledge = true
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Yes)
})
let Acknowledge = false
Acknowledge = false
radio.setGroup(78)
