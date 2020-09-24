class Airport {
    constructor({name}) {
        this.name = name
        this.apron = []
    }
    parkPlane(plane){
        this.apron.push(plane)
    } 
}

module.exports = Airport
