
const User = require('../Models/userModel')
const SavedJob = require('../Models/savedJobModel')

const saveJob = async (req, res) => {
    const { jobId } = req.body
    const userId = req.user._id

    if (!jobId) {
        return res.status(400).json({ message: "Job ID is required" })
    }

    const job = await Job.findById(jobId)
    if (!job) {
        return res.status(404).json({ message: "Job not found" })
    }

    const user = await User.findById(userId)

    const alreadySaved = user.savedJobs.includes(jobId)
    if (alreadySaved) {
        return res.status(400).json({ message: "Job already saved" })
    }

    user.savedJobs.push(jobId)
    await user.save()

    res.status(201).json({ message: "Job saved successfully" })


}

const getSavedJobs = async (req, res) => {
    const user = await User.findById({ user: req.user._id }).populate("savedJobs")

    if (!user) res.status(404).json('User not found.')

    res.status(200).json(user.savedJobs)
}

const deleteSavedJob = async (req, res) => {
    const { jobId } = req.params
    const userId = req.user._id

    const user = await User.findById(userId)

    const isSaved = user.savedJobs.includes(jobId)
    if (!isSaved) {
        return res.status(400).json({ message: "Job not in saved list" })
    }

    user.savedJobs = user.savedJobs.filter(
        id => id.toString() !== jobId
    )

    await user.save()

    res.status(200).json({ message: "Job removed from saved jobs" })
}



module.exports = { saveJob, getSavedJobs, deleteSavedJob }