const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema( {
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    age: String,
    species: String,
    breed: String,
    gender: String,
    color: String,
    phone: String,
    additional: String,
    sourceURL: String,
    AWSKey: String,

}, {
    timestamp: true,
})

module.exports = mongoose.model('Pet', petSchema);