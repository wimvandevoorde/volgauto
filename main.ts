let oud = radio.receivedPacket(RadioPacketProperty.SignalStrength)
basic.forever(function () {
    radio.setGroup(100)
    radio.setTransmitPower(7)
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < oud) {
    	
    }
})
