const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    role: { type: String, required: true, enum: ['candidate', 'company'], default: 'candidate' },
    phone: { type: String, required: true, unique: true, match: /^\+?[0-9]{8,15}$/ },
    savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SavedJob' }],
    password: { type: String, required: true, unique: true }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)