const express = require('express')
const router = express.Router()
const { getCompanyJobs, getJobs, createJob, updateJob, deleteJob } = require('../Controller/jobController')


router.get('/:id', getCompanyJobs)
router.get('/', getJobs)
router.post('/createJob', createJob)
router.put('/updateJob/:id', updateJob)
router.delete('/deleteJob/:id', deleteJob)

module.exports = router