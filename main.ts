input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(50)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4, index)
        basic.pause(50)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 4)
        basic.pause(50)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(0, 3 - index)
        basic.pause(50)
    }
    for (let index = 0; index <= 2; index++) {
        led.plot(1 + index, 1)
        basic.pause(50)
    }
    for (let index = 0; index <= 1; index++) {
        led.plot(3, 2 + index)
        basic.pause(50)
    }
    for (let index = 0; index <= 1; index++) {
        led.plot(2 - index, 3)
        basic.pause(50)
    }
    led.plot(1, 2)
    basic.pause(50)
    led.plot(2, 2)
    basic.pause(5000)
    basic.clearScreen()
})
