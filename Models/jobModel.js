const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true, minlength: 20, maxlength: 500, },
    jobType: { type: String, enum: ['full-time', 'internship'], default: 'full- time' },
    skills: { type: String, required: true },
    openings: { type: Number, min: 1 },
    remuneration: { type: Number, required: true, },
    location: { type: String, required: true, enum: ['remote', 'onsite'], default: 'onsite' },
    deadline: { type: Date, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Job', jobSchema)

