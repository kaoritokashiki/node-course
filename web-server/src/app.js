const path = require('path')
const express = require('express')
// const { resourceUsage } = require('process')
// const { request } = require('express')
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()



const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(path.join(publicDirectoryPath)))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text.',
        name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) => {
    const address = req.query.address;

    if(!address){
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(address, ( error, { latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({ error });
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({ error });
            }
            res.send({
                forecast: forecastData,
                location,
                address
            })
        })
    })
})



app.get('/products', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Andrew Mead'
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        title: '404',
        errorMessage: 'My 404 page!',
        name: 'Andrew Mead'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})