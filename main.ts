radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("z", receivedNumber)
})
basic.showString("R")
radio.setGroup(204)
serial.writeLine("Acceleration")
