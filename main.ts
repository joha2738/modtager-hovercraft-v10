/**
 * PIN1 == Fremdrift (Gul, IN1/IN2)
 * 
 * PIN0 == Opdrift    (Grøn, IN3/IN4)
 * 
 * PIN2 == Servo (Blå)
 */
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.onReceivedValue(function (name, value) {
    if (name == "A" && value == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 90)
        pins.analogWritePin(AnalogPin.P1, 50)
    } else if (name == "A" && value == 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.showIcon(IconNames.Skull)
    } else {
    	
    }
})
radio.setGroup(107)
radio.setTransmitPower(7)
pins.servoWritePin(AnalogPin.P2, 90)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
	
})
