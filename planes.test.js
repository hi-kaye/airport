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
        const destination = plane.destination = "Bali"
        expect(plane.destination).toEqual("Bali")
    })

    test('Has passengers', function () {
        const flight = new Planes({flight: "BA018"})
        const destination = flight.destination = "Bali"
        const passengerOne = new Passenger({name: "Yuki"})
        const passengerTwo = new Passenger({name: "Poppy"})
        flight.boardPassengers(passengerOne)
        flight.boardPassengers(passengerTwo)
        expect(flight.passengers.length).toBe(2)
        console.log(flight)
    })

    test('Has passengers and their bags', function () {
        const flight = new Planes({flight: "BA018"})
        const destination = flight.destination = "Bali"
        const passengerOne = new Passenger({name: "Yuki"})
        const bag1PassOne = new Bag(13)
        const bag2PassOne = new Bag (8)
        passengerOne.addBag(bag1PassOne)
        passengerOne.addBag(bag2PassOne)
        const passengerTwo = new Passenger({name: "Poppy"})
        const bagPassTwo = new Bag(10)
        passengerTwo.addBag(bagPassTwo)
        flight.boardPassengers(passengerOne)
        flight.boardPassengers(passengerTwo)
        expect(flight.passengers.length).toBe(2)
        console.log(flight)
    })
})