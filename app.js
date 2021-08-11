// API LINK :- http://localhost:8666/api/quote

require('dotenv').config();

const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors');

const app = express();

const quoteRoute = require('./routes/quote')

const port = process.env.PORT || 8666;

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("QUOTE API DB CONNECTED")
}).catch(()=> {
    console.log("QUOTE API DB OOPPSS")
});

app.use(cors({
    "origin":"*",
    "methods": ['GET']
}))

app.use("/api", quoteRoute)

app.listen(port, ()=> {
    console.log(`QUOTE API  is running at ${port}`);
})
