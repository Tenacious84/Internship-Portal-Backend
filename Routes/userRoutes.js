const { registerUser, loginUser, getUsers, getUser } = require('../Controller/userController')
const express = require('express')
const router = express.Router()
const { protect } = require('../Middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/candidates', getUsers)
router.get('/candidate/:id', protect, getUser)








module.exports = router
