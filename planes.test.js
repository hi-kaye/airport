const Passenger = require('./Passenger')
const Planes = require('./Planes')
const Bag = require('./Bag')

describe('Planes' , function () {
    test('Has a flight number', function () {
        const plane = new Planes({flight: "BA017"})
        expect(plane.flight).toEqual("BA017")
    })

    test('Has a destination', function () {
        const plane = new Planes({flight: "BA018"})
        plane.setDestination("LAX")
        expect(plane.destination).toEqual("LAX")
    })

    test('Has passengers', function () {
        const plane = new Planes({flight: "BA018"})
        plane.setDestination("LAX")
        const passengerOne = new Passenger({name: "Yuki"})
        const passengerTwo = new Passenger({name: "Poppy"})
        plane.boardPassengers(passengerOne)
        plane.boardPassengers(passengerTwo)
        expect(plane.passengers.length).toBe(2)
    })

    test('Has passengers and their bags', function () {
        const plane = new Planes({flight: "BA018"})
        plane.setDestination("LAX")
        const passengerOne = new Passenger({name: "Yuki"})
        const bag1PassOne = new Bag(13)
        const bag2PassOne = new Bag (8)
        passengerOne.addBag(bag1PassOne)
        passengerOne.addBag(bag2PassOne)
        const passengerTwo = new Passenger({name: "Poppy"})
        const bagPassTwo = new Bag(10)
        passengerTwo.addBag(bagPassTwo)
        plane.boardPassengers(passengerOne)
        plane.boardPassengers(passengerTwo)
        expect(plane.passengers.length).toBe(2)
    })
})