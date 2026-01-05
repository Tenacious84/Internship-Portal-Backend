const { getProfile, createProfile, editProfile } = require('../Controller/profileController')
const { protect } = require('../Middleware/authMiddleware')
const express = require('express')
const router = express.Router()


router.get('/:id',protect, getProfile)
router.post('/createProfile', createProfile)
router.post('/editProfile', protect, editProfile)

module.exports = router
