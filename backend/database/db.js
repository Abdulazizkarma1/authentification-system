const mongoose = require('mongoose');


//connect database
const connectToDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_DB
        )
        console.log("MongoDB Connected successfully");

    }
    catch(err){
        console.error("MongoDB connection failed");
        process.exit(1);
    }
}

module.exports = connectToDB