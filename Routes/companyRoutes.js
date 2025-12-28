const express = require('express')
const { getCompanyProfile, createCompany, updateCompany } = require('../Controller/companyController')
const router = express.Router()


router.get('/:id', getCompanyProfile)
router.post('/createprofile', createCompany)
router.put('/update', updateCompany)


module.exports = router