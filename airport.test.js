const Airport = require('./Airport')
const Planes = require('./Planes')

describe('Airport', function () {
    test('Has a name', function () {
        const LHR = new Airport({name: "LHR"})
        expect(LHR.name).toBe("LHR")
    })

    test('Other airports', function () {
        expect(Airport.airports.length).toBe(1)
        const DPS = new Airport({name: "DPS"})
        expect(Airport.airports.length).toBe(2)
        console.log(Airport.airports)
    })

    test('Take off and landing at destination airport', function () {
        const plane3 = new Planes({flight: "BA017"})
        const [LHR, DPS] = Airport.airports
        LHR.addPlane(plane3)
        console.log(Airport.airports)
        expect(plane3.location).toBe("LHR")
        plane3.setDestination("DPS")
        LHR.takeOff(plane3)
        expect(LHR.apron.length).toBe(0)
        expect(DPS.apron.length).toBe(1)
    })


    test('Has planes', function () {
        const airport = new Airport({name: "LGW"})
        const plane1 = new Planes({flight: "BA019"})
        const plane2 = new Planes({flight: "BA020"})
        airport.addPlane(plane1)
        airport.addPlane(plane2)
        expect(airport.apron.length).toBe(2)
    })
})