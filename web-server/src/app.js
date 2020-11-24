const path = require('path')
const express = require('express')
const { resourceUsage } = require('process')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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
        helpText: 'help me'
    })
})


app.get('/weather', (req, res) => {
    res.send({
        forcast: 'Sunny',
        location: 'Tokyo'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})