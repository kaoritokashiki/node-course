const request  = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=f0d56526a61b5eb329fd49a4ba1bd652&query=37.8267,-122.4233&units=f'
// const url = 'http://api.weatherstack.com/current?access_key=f0d56526a61b5eb329fd49a4ba1bd652&query='

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2Fvcml0b2thc2hpa2kiLCJhIjoiY2tocjZiMTBtMGRiNTMwbnQ5eGZqbHI3MCJ9.hzH1wpsvLnKH-_tD17Svtg&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if ( error ){
//         console.log('Unable to connect to locatin services!');
//     } else if(response.body.features.length === 0){
//         console.log('Unable to find location');
        
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longtitude = response.body.features[0].center[0]
//         console.log(`lati: ${latitude} longti: ${longtitude}`);
//     }
// })
    // console.log(response.body.current);


geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

})