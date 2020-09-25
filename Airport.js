const fs = require('fs') //file system
const path = require('path') //node module

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
//CALLBACK FUNCTION
    getInfo(onInfo) {
        const airportName = this.name
        const locationOfFile = path.join(__dirname, 'airports.json')
        const callback = function (err, buffer) {
            const data = JSON.parse(String(buffer))
            const arrayOfAirports = Object.keys(data).map(key => {
                return data[key]
            })
            const info = arrayOfAirports.find(airport => airport.iata === airportName)
            onInfo(err, info)
        }
        fs.readFile(locationOfFile, callback)
    }
//ASYNC FUNCTION
    getInfoPromise() {
        const airportName = this.name
        return new Promise(function (resolve, reject) {
            fs.readFile(path.join(__dirname, 'airports.json'), (err, buffer) => {
                if (err) return reject(err)

                const data = JSON.parse(String(buffer))
                const arrayOfAirports = Object.keys(data).map(key => {
                    return data[key]
                })
                const info = arrayOfAirports.find(airport => airport.iata === airportName)

                resolve(info)
            })
        })
    }
}

module.exports = Airport
