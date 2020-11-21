const request  = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f0d56526a61b5eb329fd49a4ba1bd652&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log(`${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
})