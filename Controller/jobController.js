const Job = require('../Models/jobModel')
const Company = require('../Models/companyModel')


const createJob = async (req, res) => {
    const { title, description, jobType, skills, openings, remuneration, location, deadline } = req.body

    if (!title || !description || !jobType || !skills || !openings || !remuneration || !location || !deadline) {
        return res.status(400).json('All fields are required!')

    }
    const job = await Job.create({ title, description, jobType, skills, openings, remuneration, location, deadline })

    res.status(200).json({
        message: 'Job has been successfully created!',
        job: job
    })

}

const getCompanyJobs = async (req, res) => {
    const companyJobs = await Company.findById({ company: req.params.id }).populate('jobs', 'company')

    if (!companyJobs) return res.status(404).json('No jobs found for this company.')
    res.status(200).json(companyJobs)
}

const getJobs = async (req, res) => {
    const jobs = await Job.find()
    res.status.json(jobs)
}
const updateJob = async (req, res) => {
    const job = await Job.findById(req.params.id)

    if (!job) return res.status(404).json('Job not found!')

    Object.assign(job, req.body)
    const updatedJob = job.save()

    res.status(200).json(updatedJob)
}


const deleteJob = async (req, res) => {
    const job = await Job.findById(req.params.id)

    if (!job) return res.status(404).json('Job not found!')

    job.deleteOne()
    res.status(200).json(`Job:${job}, has been successfully deleted...`)
}

module.exports = { createJob, updateJob, deleteJob, getCompanyJobs, getJobs }