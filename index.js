const express = require("express")
const app = express();
const port = process.env.PORT ||  4000
const mongoose = require("mongoose")
const http = require('http').Server(app)
const user = require('./models/contactUs');
require("dotenv").config()


mongoose.set('strictQuery',false)

const cors = require("cors")

app.use(cors());
app.use(express.json());
mongoose.connect(
   process.env.MONGO_URI
);

app.post('/contactUs', async (req, res) => {
    try {
        const Contact = await user.create(req.body)
        res.status(200).json(Contact)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


// getting data from mongoDb

app.get('/getAllQuery', async (req, res) => {
    try {
        const Data = await user.find({})
        res.status(200).json(Data)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


app.listen(port, () => {
    console.log("Port Running on the 4000")
})