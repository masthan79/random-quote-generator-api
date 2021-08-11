const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    _id:{
        type: Number
    },
    quote: {
        type: String,
        required: true,
        trim: true
    },
    by: {
        type: String,
        trim: true,
        default: "Unknown"
    }
}, {versionKey: false});

module.exports = mongoose.model("Quote", quoteSchema);