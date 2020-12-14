const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { findByIdAndUpdate } = require('./models/user')
const e = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

    await user.save()


    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})


app.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const inValidOperation = updates.every((update) => allowedUpdates.includes((update)))

    if (!inValidOperation){
        return res.status(400).send({ error: 'Invalid updates!'})
    }


    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findByIdAndDelete({_id})

        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }

    // User.findById(_id).then((user) => {
    //     if(!user) {
    //         return res.status(404).send()
    //     }
    //     console.log(user)

    //     res.send(user)
    // }) .catch((e) => {
    //     res.status(500).send()
    // })
})


app.post('/tasks', async(req, res) => {
    const task = new Task(req.body)
    
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
    // task.save().then(() => {
    //     console.log(req.body);
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})


app.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.find({}).then((task) => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

app.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id;

    try {
        task = await Task.findById({_id})
        console.log('task', task)

        if(!task){
            res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.findById({_id}).then((task) => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })

})

app.patch('/tasks/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    inValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!inValidOperation){
        return res.status(400).send({ error: 'Invalid Value'})
    }

    const _id = req.params.id

    try {
        task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        console.log(e)
        return res.send(e)
        
    }




})




app.listen(port, () => {
    console.log('Server is up on port ' + port);
})