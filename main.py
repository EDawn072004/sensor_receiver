def on_received_number(receivedNumber):
    basic.show_string("R")
    serial.write_line("Acceleration")
    serial.write_value("z", receivedNumber)
radio.on_received_number(on_received_number)

radio.set_group(204)