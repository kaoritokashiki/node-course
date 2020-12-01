const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=f0d56526a61b5eb329fd49a4ba1bd652&query='+ latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(
                undefined,
                body.current.weather_descriptions[0] + ". It is currently" + body.current.templature + "degress outerHeight. It feels like " +
                body.current.feelslike + " degrees out. The humidit is " + body.current.humidity + "%."
            )
        }
    })
}

module.exports = forecast
