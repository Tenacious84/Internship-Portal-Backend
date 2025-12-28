const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    resume: { type: String, required: true, trim: true },
    message: { type: String, required: true, minlength: 20, maxlength: 500, },

}, { timestamps: true })

module.exports = mongoose.model('Application', applicationSchema)

