const jwt = require('jsonwebtoken')
const User = require('../Models/userModel')

const admin = async (req, res, next) => {
    try {
        const token = req.headers.authorization

        if (!token) return res.status(403).json('Not authorised token not found!')

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded

        if (req.user.role !== 'company') return res.status(403).json("NOT AUTHORISED!!")



        next()
    } catch (error) {
        res.status(400).json({
            message: "Could not authorise company.",
            error: error.message
        })
    }
}

module.exports = { admin }

