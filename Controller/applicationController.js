const Application = require('../Models/applicationModel')
const Profile = require('../Models/profileModel')


const createApplication = async (req, res) => {
    const { resume, message } = req.body


    if (!resume, message) return res.status(400).json('All fields are required!')

    const applicationExist = await Application.findOne({ jobId: req.params.id, user: req.user._id })

    if (applicationExist) return res.status(400).json('You have already applied for this job!')

    const application = await Application.create({ jobId: req.params.id, user: req.user, resume, message })
    const candidateProfile = await Profile.findOne({ user: req.user._id })


    res.status(200).json(application, candidateProfile)
}


const getAllApplications = async (req, res) => {
    const applications = await Application.find()

    if (!applications) return res.status(404).json("No applications submitted at this point...")

    res.status(200).json({ applications })
}

const getApplications = async (req, res) => {
    const applications = await Application.findById(req.params.id)

    if (!applications) return res.status(404).json("The application you are looking for was not found...")

    res.status(200).json(applications)
}

const getMyApplications = async (req, res) => {
    const myApplications = Application.find({ user: req.user._id })

    if (!myApplications) return res.status(404).json("No applications found!")

    res.status(200).json(myApplications)
}

module.exports = { createApplication, getApplications, getMyApplications, getAllApplications }