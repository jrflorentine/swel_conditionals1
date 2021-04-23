radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Chessboard)
    }
})
radio.setGroup(1)
