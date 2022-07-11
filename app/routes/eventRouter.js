const express = require("express");
const router = express.Router();
const post = require('../controllers/events.controller');

router.get('/', function (req, res) {

    post.list(function (err, events) {
        if (err) {
            res.send(err)
        }
        res.render('tabela', {
            events,
            helpers: {
                inc: function (value) {
                    return parseInt(value) + 1;
                }
            },
        }
        );
    });
});

router.post('/', function (req, res) {

    post.add(req.body, function (err) {
        if (err) {
            res.send(err)
        }
        res.redirect('/');
    })

});

router.post('/:id', function (req, res) {

    post.delete(req.params.id, function (err) {
        if (err) {
            res.send(err);
        }
        res.redirect('/');
    })

});

module.exports = router;
