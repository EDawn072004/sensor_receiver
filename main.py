def on_received_number(receivedNumber):
    basic.show_string("R")
    serial.write_line("Acceleration")
    serial.write_value("z", receivedNumber)
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    if receivedString == "North":
        led.toggle(2, 0)
    elif receivedString == "East":
        led.toggle(4, 2)
    elif receivedString == "South":
        led.toggle(2, 4)
    elif receivedString == "West":
        led.toggle(0, 2)
    else:
        basic.show_leds("""
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            """)
radio.on_received_string(on_received_string)

radio.set_group(204)