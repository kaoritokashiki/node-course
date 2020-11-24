const request  = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(process.argv)
const address = process.argv[2]

if(!address){
    console.log('Please provide an address');
} else {
    geocode(address, (error, { latitude, longitude, location} = {}) => {
    
        if (error){
            return console.log('Error', error)
        } else {
            forecast(latitude, longitude, (error, forcaseData) => {
                if(error){
                    return console.log(error)
                }
                console.log(location)
                console.log(forcaseData)
            })
        }
    })
}
