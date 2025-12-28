const Profile = require('../Models/profileModel')


// Needs to be protected
const createProfile = async (req, res) => {
    console.log(req.body)
    const { bio, skills, education, resumeLink, portfolioLink, experience } = req.body

    if (!bio || !skills || !education || !resumeLink || !portfolioLink || !experience) return res.status(400).json("All fields are required!")

    const myProfile = await Profile.create({  bio, skills, education, resumeLink, portfolioLink, experience })

// user: req.user.id, Use in line 11

    res.status(200).json({ message: 'Profile has been successfully created', profile: myProfile })

}

const getProfile = async (req, res) => {
    console.log("PARAMS:", req.params)
    console.log("ID:", req.params.id)

    const myProfile = await Profile.findById(req.params.id)
    console.log("Profile:", myProfile)

    if (!myProfile) return res.status(404).json("Profile not found!")

    res.status(200).json({ myProfile })

}

module.exports = { getProfile, createProfile }