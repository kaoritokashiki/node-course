// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error){
        console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID('5fd4c2c0aa4882c70b373e60') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(new ObjectID('5fd4c2c0aa4882c70b373e60'));
    //     console.log(new ObjectID('5fd4c2c0aa4882c70b373e60'));

    //     console.log(user);
    // })


    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count);
    // })

    db.collection('tasks').findOne({ _id: new ObjectID('5fd4bf120f2ddac3c3821473') }, (error, task) => {
        if(error){
            return console.log('Unable to fetch');
        }

        return console.log(task);
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log(error);
        }


        return console.log(tasks);
    } )



});

