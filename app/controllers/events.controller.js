const Events = require('../models/Events');

function postList(cb) {
    Events.find().lean().exec(function (err, events) {

        if (err) {
            cb(err)
        } else {
            cb(null, events)
        }
    })
};

function eventAdd(data, cb) {
    let newEvent = new Events(data);
    newEvent.save(function (err, event) {
        if (err) {
            cb(err)
        } else {
            cb(null, event)
        }
    })
};

function postDelete(id, cb) {
    Events.deleteOne({_id: id},function (err, event) {
        if (err) {
            cb(err);
        } else {
            cb(null, event);
        }
    });
};

module.exports = {
    list: postList,
    add: eventAdd,
    delete: postDelete
}