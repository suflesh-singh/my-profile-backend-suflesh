const express = require("express")
const app = express();
const port = 4000
const mongoose = require("mongoose")
const http = require('http').Server(app)
const user = require('./models/contactUs');

const cors = require("cors")

app.use(cors());
app.use(express.json());
mongoose.connect(
    "mongodb+srv://sufleshs:VQGMEvA94uhqPO7D@contactus.mqadz6y.mongodb.net/?retryWrites=true&w=majority"
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