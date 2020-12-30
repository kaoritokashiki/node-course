const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.get('/test', (req, res) => {
    res.send('From a new File')
})


router.post('/users', async (req, res) => {
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


router.get('/users', async (req, res) => {

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

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const inValidOperation = updates.every((update) => allowedUpdates.includes((update)))

    if (!inValidOperation){
        return res.status(400).send({ error: 'Invalid updates!'})
    }


    try {
        const user = await User.findById(req.params.id)

        user.name = 'Something else'
        updates.forEach((update) => user[update] = req.body[update])

        await user.save()

        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        console.log(user)

        if (!user){
            return res.status(404).send()
        }
        res.send(user)
        
    } catch (error) {
        res.status(500).send()
    }
})

router.get('/users/:id', async (req, res) => {
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


module.exports = router