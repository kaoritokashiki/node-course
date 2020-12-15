const express = require('express')
const Task = require('../models/task')
const router = new express.Router()



router.post('/tasks', async(req, res) => {
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


router.get('/tasks', async (req, res) => {
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

router.get('/tasks/:id', async(req, res) => {
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

router.patch('/tasks/:id', async(req, res) => {
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

router.delete('/tasks/:id', async (req, res) => {

    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        console.log(task);
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
        
    } catch (e) {
        return res.status(500).send(e)
    }

})

module.exports = router
