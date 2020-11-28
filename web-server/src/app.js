const path = require('path')
const express = require('express')
const { resourceUsage } = require('process')
const { request } = require('express')
const hbs = require('hbs');

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
        title: 'About',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        helpText: 'help me',
        name: 'Andrew Mead'
    })
})


app.get('/weather', (req, res) => {
    res.send({
        forcast: 'Sunny',
        location: 'Tokyo'
    })
})

app.get('/help/*', (req, res)=> {
    res.send('Help article not found')
})

app.get('*', (req, res)=>{
    res.send('My 404 page')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})