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
        ARM = 1
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.servoWritePin(AnalogPin.P2, 200)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P2, 70)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P2, 90)
        pins.analogWritePin(AnalogPin.P1, 50)
    } else if (name == "A" && value == 0) {
        ARM = 0
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.showIcon(IconNames.Skull)
    } else if (name == "R" && value == -1 && ARM == 1) {
        pins.servoWritePin(AnalogPin.P2, 150)
    } else if (name == "R" && value == 1 && ARM == 1) {
        pins.servoWritePin(AnalogPin.P2, 30)
    } else {
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
let ARM = 0
radio.setGroup(107)
radio.setTransmitPower(7)
pins.servoWritePin(AnalogPin.P2, 90)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
	
})
