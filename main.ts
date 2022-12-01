input.onButtonPressed(Button.A, function () {
    blublublubulu(50)
})
input.onButtonPressed(Button.AB, function () {
    blublublubulu(1000)
})
input.onButtonPressed(Button.B, function () {
    blublublubulu(100)
})
function blublublubulu (int: number) {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(int)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4, index)
        basic.pause(int)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 4)
        basic.pause(int)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(0, 3 - index)
        basic.pause(int)
    }
    for (let index = 0; index <= 2; index++) {
        led.plot(1 + index, 1)
        basic.pause(int)
    }
    for (let index = 0; index <= 1; index++) {
        led.plot(3, 2 + index)
        basic.pause(int)
    }
    for (let index = 0; index <= 1; index++) {
        led.plot(2 - index, 3)
        basic.pause(int)
    }
    led.plot(1, 2)
    basic.pause(int)
    led.plot(2, 2)
    basic.pause(int * 100)
    basic.clearScreen()
}
