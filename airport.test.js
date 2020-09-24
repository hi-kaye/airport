const Airport = require('./Airport')
const Planes = require('./Planes')

describe('Airport', function () {
    test('Has a name', function () {
        const airport = new Airport({name: "LHR"})
        expect(airport.name).toEqual("LHR")
    })

    test('Has planes', function () {
        const airport = new Airport({name: "LGW"})
        const plane1 = new Planes({flight: "BA019"})
        const plane2 = new Planes({flight: "BA020"})
        airport.parkPlane(plane1)
        airport.parkPlane(plane2)
        expect(airport.apron.length).toBe(2)
    })
})