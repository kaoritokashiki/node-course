const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
const Task = require('./models/task')
const { findByIdAndUpdate, findByIdAndDelete } = require('./models/user')
const e = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)






app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

const bcript = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcript.hash(password, 8)

    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcript.compare('red12345!', hashedPassword)
    console.log(isMatch);
}

myFunction()