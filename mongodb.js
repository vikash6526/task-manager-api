//CRUD (create, read, update and delete) operation

// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient
// const objectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect database')
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'David',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert user data')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'jen',
    //     age: 34
    // }, {
    //     name: 'rachel',
    //     age: 35
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert user data')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('task').insertMany([{
    //     description: 'Clean house',
    //     completed: true
    // }, {
    //     description: 'Renew inspection',
    //     completed: false
    // }, {
    //     description: 'Pot plants',
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert task data')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5f38b51c580d63c67cd1aa4c") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch user data')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch data')
    //     }
    //     console.log(user)
    // })

    // db.collection('task').findOne({ _id: new ObjectID("5f38b62f05faf1fba4ed36d3") }, (error, result) => {
    //     if (error) {
    //         return console.log('No tak found!!')
    //     }

    //     console.log(result)
    // })

    // db.collection('task').find({ completed: true }).toArray((error, task) => {
    //     if (error) {
    //         return console.log('No tak found!!')
    //     }

    //     console.log(task)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f38b30a500b4cf630c40b19")
    // }, {
    //     $inc: {
    //         age: 3
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('task').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('task').deleteOne({
        description: "Pot plants"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})