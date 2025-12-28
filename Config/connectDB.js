const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log('MongoDB has been successfully connected!!😌')
    }
    catch (err) {

        console.log('Could not connect to MongoDB!😥')
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB