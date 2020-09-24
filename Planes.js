class Planes {
    constructor({flight, destination}) {
        this.flight = flight
        this.destination = destination
        this.passengers = []
    }
    boardPassengers(passenger) {
        this.passengers.push(passenger)
    }
} 

module.exports = Planes