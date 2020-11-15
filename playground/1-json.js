const fs = require('fs')

const data = fs.readFileSync('1-json.json')
const dataJSON = data.toString()
const parsedData = JSON.parse(dataJSON)

parsedData.name = '333'

console.log(parsedData)

const userJSON = JSON.stringify(parsedData)
console.log(userJSON)
fs.writeFileSync('1-json.json', userJSON)



