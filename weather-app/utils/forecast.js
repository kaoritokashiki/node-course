const request = require('request')

const forecast = (latitude, longtitude, callback) => {

    // const url = 'http://api.weatherstack.com/current?access_key=f0d56526a61b5eb329fd49a4ba1bd652&query=37.8267,-122.4233&units=f'
    // const aaa =    'http://api.weatherstack.com/current?access_key=f0d56526a61b5eb329fd49a4ba1bd652&query=-75.7088,44.1545&units=f'
    const url = 'http://api.weatherstack.com/current?access_key=f0d56526a61b5eb329fd49a4ba1bd652&query='+ latitude + ',' + longtitude + '&units=f'
    request({ url: url, json: true }, (error, response) => {
        console.log(url);
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
