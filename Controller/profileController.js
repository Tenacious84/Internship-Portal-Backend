const Profile = require('../Models/profileModel')


// Needs to be protected
const createProfile = async (req, res) => {
    console.log(req.body)
    const { bio, skills, education, resumeLink, portfolioLink, experience } = req.body

    if (!bio || !skills || !education || !resumeLink || !portfolioLink || !experience) return res.status(400).json("All fields are required!")

    const myProfile = await Profile.create({ bio, skills, education, resumeLink, portfolioLink, experience })

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

const editProfile = async (req, res) => {
    const profile = await Profile.findById({ user: req.user._id })
    if (!profile) return res.status.json('Profile not found...')

    Object.assign(profile, req.body)
    const updatedProfile = await profile.save()

    res.status(200).json(updatedProfile)
}

module.exports = { getProfile, createProfile, editProfile }