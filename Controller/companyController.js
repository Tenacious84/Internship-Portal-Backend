const Company = require('../Models/companyModel')

const createCompany = async (req, res) => {
    const { name, description, website, location, industry, email } = req.body

    if (!name || !description || !website || !location || !industry || !email) {
        return res.status(400).json('All fields are required!')
    }

    const company = await Company.create({ name, description, website, location, industry, email })

    res.status(200).json({
        message: "Company Profile has been successfully created!",
        company
    })
}

const getCompanyProfile = async (req, res) => {
    const company = await Company.findById(req.params.id)

    if (!company) return res.status(404).json({ message: "Company not found!" })

    res.status(200).json(company)
}

const updateCompany = async (req, res) => {
    const company = await Company.findById(req.params.id)

    if (!company) return res.status(404).json("Company does not exist.")

    Object.assign(company, req.body)
    const updatedCompany = company.save()

    res.status(200).json(updatedCompany)
}

module.exports = { createCompany, getCompanyProfile, updateCompany }