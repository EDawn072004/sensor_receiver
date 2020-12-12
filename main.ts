radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("R")
    serial.writeLine("Acceleration")
    serial.writeValue("z", receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "North") {
        led.toggle(2, 0)
    } else if (receivedString == "East") {
        led.toggle(4, 2)
    } else if (receivedString == "South") {
        led.toggle(2, 4)
    } else if (receivedString == "West") {
        led.toggle(0, 2)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
    }
})
radio.setGroup(204)
