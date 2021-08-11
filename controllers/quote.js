const Quote = require('../models/quote');

exports.getQuote = (request , response) => {
    Quote.countDocuments('quoteDesc', function(err, count){
        const randomId = Math.floor( Math.random() * count);

        Quote.findOne({_id: randomId}, {quote: 1, by: 1, _id: 0},function(err, quote){
            response.json(quote);
        });
    });
};