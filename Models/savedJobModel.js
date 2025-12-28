const mongoose = require('mongoose')

const savedJobSchema = new mongoose.Schema({
    Job: { type: String, required: true }
})

module.exports = mongoose.model('SavedJob', savedJobSchema)