require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors")

mongoose.connect(process.env.DATABASES, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED")
})

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

console.log(process.env.PORT)

const port = process.env.PORT || 8000;

app.listen(port , () => console.log(`App is running on ${port}`))