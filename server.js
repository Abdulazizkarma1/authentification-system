const express = require('express');
require('dotenv').config();
const connectToDB = require('./backend/database/db');


const app = express();

const PORT = process.env.PORT || 3000;

connectToDB();






app.listen(PORT, (req, res) => {
    console.log(`Server is running at port: ${PORT}`);
})