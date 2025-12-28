const mongoose = require("mongoose")

const profileSchema = mongoose.Schema({
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bio: { type: String, required: true, minlength: 10, maxlength: 350 },
    skills: { type: String, required: true },
    education: { type: String, required: true },
    resumeLink: { type: String, required: true, trim: true },
    portfolioLink: { type: String, required: true, trim: true },
    experience: { type: String, required: true }

}, { timeStamps: true })

module.exports = mongoose.model('Profile', profileSchema)