const jwt = require('jsonwebtoken')

const protect = async (req, res, next) => {
    try {

        const token = req.headers.authorization

        if (!token) {
            return res.status(403).json("Access Denied!")
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(403).json("Unauthorized to access this page!")
        }

        req.user = decoded
        next()

    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = { protect }