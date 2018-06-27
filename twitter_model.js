const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cs591summer')
const db = mongoose.connection
db.once('open', function () {
    console.log('Connection successful.')
})


const Schema = mongoose.Schema
const tweetSchema = new Schema({
    Tweet: String
})

module.exports = mongoose.model('tweets', tweetSchema)

