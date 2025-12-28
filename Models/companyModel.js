const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, minlength: 20, maxlength: 500 },
    website: { type: String, required: true, unique: true },
    location: { type: String, required: true, },
    industry: { type: String, required: true, },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true }

}, { timestamps: true })

module.exports = mongoose.model('Company', companySchema)