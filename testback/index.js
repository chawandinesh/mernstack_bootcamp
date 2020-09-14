const express = require("express");

const app = express();

const port = 3000;


app.get('/', (req,res) => {
    return res.send("Home page")
})

app.get('/login', (req,res) => {
    return res.send("You are visiting login route")
})


app.get('/signup', (req,res) => {
    return res.send("You are visiting signup route")
})

app.listen(port , () => {
    console.log("server is running at 3000")
})

