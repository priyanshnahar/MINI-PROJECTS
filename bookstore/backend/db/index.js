const mongoose = require('mongoose')
const MONGO_DB_URL = "mongodb+srv://admin:8952807900@cluster0.sykdi2h.mongodb.net/?retryWrites=true&w=majority"


const connectToDB = async () => {
    mongoose.connect(MONGO_DB_URL, (err) => {
        if(err) throw err
        console.log("Connect to Mongodb database")
    })
}

module.exports = connectToDB;
