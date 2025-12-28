const { request } = require('express')
const User = require('../Models/userModel')
const generateToken = require('../Utils/generateJWT')

const registerUser = async (req, res) => {
    const { password, email, name, phone } = req.body
    if (!name || !email || !phone || !password) return res.status(404).json('Please enter all fields.')

    const userExists = await User.findOne({ email })

    if (userExists) {
        return res.status(400).json(
            'User already exists, please login instead.'
        )
    }

    const user = await User.create({ password, email, name, phone })

    res.status(200).json('User has been successfully created.',
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id, user.role),
            role: user.role
        })
}

const loginUser = async (req, res) => {

    const { password, email } = req.body


    const user = await User.findOne({ email })
    if (!user) return res.status(403).json('User does not exist or invalid credentials. ')
    console.log(generateToken(user._id, user.role))
    if (user && (user.password === password)) {
        return res.status(200).json(
            {
                message: `Welcome ${user.name}!`,
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                token: generateToken(user._id, user.role),
                role: user.role
            })
    }


}
// create company authentication for this
const getUsers = async (req, res) => {

    const users = await User.find()
    console.log(users)

    res.status(200).json({
        message: users
    })
}

const getUser = async (req, res) => {
    console.log("PARAMS:", req.params)
    console.log("ID:", req.params.id)

    const user = await User.findById(req.params.id)
    console.log("USER:", user)

    if (!user) return res.status(404).json("User not found!")

    res.status(200).json({ user })

}

module.exports = { registerUser, loginUser, getUsers, getUser }