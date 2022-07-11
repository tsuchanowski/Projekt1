const mongoose = require("mongoose");


mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });


const schema = new mongoose.Schema({
    name: String,
    event: String,
    city: String
});



module.exports = mongoose.model('Events', schema);