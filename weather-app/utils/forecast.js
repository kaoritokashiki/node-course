const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=f0d56526a61b5eb329fd49a4ba1bd652&query='+ latitude + ',' + longitude + '&units=f'
    request({ url: url, json: true }, (error, response) => {
        if (error){
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined,response.body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast
