const mongoose = require("mongoose")


const MONGO_URI= 'mongodb+srv://satyamsingh0327:GlRy2WOM8MMFHDeT@cluster0.c7tmkpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connectDatabase =async  () => {

    mongoose.connect( MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
