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
    })

    test('Take off and landing at destination airport', function () {
        const plane3 = new Planes({flight: "BA017"})
        const [LHR, DPS] = Airport.airports
        LHR.addPlane(plane3)
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

    test("Airports have a city", (done) => {
        const HKG = new Airport({name: "HKG"})
        const onInfo = function(err, info){
            expect(info.city).toEqual("Hong Kong")
            done()
        }
        HKG.getInfo(onInfo)
        
        })
    test("Promise: Airports have a city", () => {
        const HKG = new Airport({name: "HKG"})
        return HKG.getInfoPromise()
            .then(info => {
                expect(info.city).toBe("Hong Kong")     
        }).catch(err => {
            expect(err).toBeFalsey()
        })
    })
    test("Async Await: Airports have a city", async () => {
        const HKG = new Airport({name: "HKG"})
        const info = await HKG.getInfoPromise()
        expect(info.city).toBe("Hong Kong")

    })
})

