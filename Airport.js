class Airport {
    static airports = []
    name = ""
    apron = []
    constructor({name}) {
        this.name = name
        this.constructor.airports.push(this)
    }
    addPlane(plane){
        plane.setLocation(this.name)
        this.apron.push(plane)
    } 
    takeOff(plane) {
        const index = this.apron.indexOf(plane)
        this.apron.pop(plane)
        const destinationAirport = Airport.airports.find(airport => airport.name === plane.destination)
        destinationAirport.addPlane(plane)
    }
}

module.exports = Airport
