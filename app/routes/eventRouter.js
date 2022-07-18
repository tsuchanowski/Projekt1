const express = require("express");
const router = express.Router();
const post = require('../controllers/events.controller');
const userController = require('../controllers/user.controller');



router.get('/addcustom', userController.isLoggedIn, function (req, res) {
    post.list(function (err, customers) {
        if (err) {
            res.send(err)
        }
        res.render('tabela', {
            customers, helpers: {
                inc: function (value) {
                    return parseInt(value) + 1;
                }
            }
        }
        );
    });
});


router.get('/formcustom', userController.isLoggedIn, function (req, res) {
    res.render('add_customer');
});

router.post('/formcustom', userController.isLoggedIn, function (req, res) {
    post.add(req.body, function (err) {
        if (err) {
            res.send(err)
        }
        res.redirect('/addcustom');
    })
});

router.post('/:id', userController.isLoggedIn, function (req, res) {
    post.delete(req.params.id, function (err) {
        if (err) {
            res.send(err);
        }
        res.redirect('/addcustom');
    })
});


router.get('/customer_site/:id', userController.isLoggedIn, function (req, res) {
    post.custom({ _id: req.params.id }, function (err, customer) {
        if (err) {
            res.send(err)
        }
        res.render('tabela_klienta',
            {
                name: customer.name,
                address: customer.address,
                company: customer.company,
                nipnumber: customer.nipnumber

            });
    });
});

// router.get('/form_client', userController.isLoggedIn, function (req, res) {
//     res.render('add_actions');
// });

router.post('/user/form_client/:id', userController.isLoggedIn, function (req, res) {
    // const id = req.params.id
    // console.log(id)

    post.client(req.body, function (err, customer) {
        if (err) {
            res.send(err)
        }
        console.log(req.body)
        console.log(customer);
        res.redirect('/customer_site/:id');
    })
});

router.get('/form_client', userController.isLoggedIn, function (req, res) {
    post.list(function (err) {
        if (err) {
            res.send(err)
        }
        res.render('add_actions');
    });
})

module.exports = router;
