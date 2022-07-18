const Customers = require('../models/Customer');
const Client = require('../models/Customer');


function postList(cb) {
    Customers.find().lean().exec(function (err, customer) {
        if (err) {
            cb(err)
        } else {
            cb(null, customer)
        }
    })
};

// .lean().exec


function postDelete(id, cb) {
    Customers.deleteOne({_id: id}, function (err, customer) {
        if (err) {
            cb(err);
        } else {
            cb(null, customer);
        }
    });
};


function postListCustomer(id, cb) {
    Customers.findOne({_id: id}, function (err, customer) {
        if (err) {
            cb(err)
        } else {
            cb(null, customer);
        }
    })
};

function eventAdd(data, cb) {
    let newCustomer = new Customers(data);
    newCustomer.save(function (err, customer) {
        if (err) {
            cb(err)
        } else {
            cb(null, customer)
        }
    })
};

function clientAdd(data, cb) {
    let newClient = new Client([data.client]);
    newClient.save(function (err, client) {
        if (err) {
            cb(err)
        } else {
            cb(null, client)
        }
    })
};

module.exports = {
    list: postList,
    add: eventAdd,
    delete: postDelete,
    custom: postListCustomer,
    client: clientAdd
}