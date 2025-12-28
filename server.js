const express = require('express')
const dontenv = require('dotenv')
const connectDB = require('./Config/connectDB')
const userRoutes = require('./Routes/userRoutes')
const profileRoutes = require('./Routes/profileRoutes')
const companyRoutes = require('./Routes/companyRoutes')
const jobRoutes = require('./Routes/jobRoutes')
const applicationRoutes = require('./Routes/applicationRoutes')




dontenv.config()
connectDB()
const app = express()


app.use(express.json())
app.use('/api/user', userRoutes)
app.use('/api/candidate/profile', profileRoutes)
app.use('/api/company/profile', companyRoutes)
app.use('/api/job', jobRoutes)
app.use('/api/application', applicationRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))