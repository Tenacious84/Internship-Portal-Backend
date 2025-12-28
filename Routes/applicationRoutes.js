const express = require('express')
const { createApplication, getApplications, getMyApplications, getAllApplications } = require('../Controller/applicationController')
const router = express()
const { protect } = require('../Middleware/authMiddleware')
const { admin } = require('../Middleware/adminMiddleware')

router.post('/createApplication', protect, createApplication)
router.get('/:id', admin, getApplications)
router.get('/all', admin, getAllApplications)
router.get('/', protect, getMyApplications)

module.exports = router