const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema( {
    name: String,
})

module.exports = mongoose.model('Cat', catSchema);