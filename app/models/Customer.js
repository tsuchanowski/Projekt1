const mongoose = require("mongoose");

class Client {
    constructor(date, action, description ) {
        this.date = date;
        this.action = action;
        this.description = description;
    }

};

mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_CUSTOMER, { useNewUrlParser: true, useUnifiedTopology: true });


const schema = new mongoose.Schema({
    name: {type: String},
    address: {type: String},
    company: {type: String},
    nipnumber: {type: Number},
    events: {}
    // events: [{eventdate: {type: Date}}, {action: {type: String}}, {description: {type: String}}]
});



module.exports = mongoose.model('Customers', schema);