class Planes {
    constructor({flight}) {
        this.flight = flight
        this.destination = undefined
        this.location = undefined
        this.passengers = []
    }
    boardPassengers(passenger) {
        this.passengers.push(passenger)
    }
    setDestination(destination) {
        this.destination = destination
    }
    setLocation(location) {
        this.location = location
    }
} 

module.exports = Planes