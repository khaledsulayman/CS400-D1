const express = require('express');
const router = express.Router();

router.route('/')
    .get(function (req, res, next) {
        //vars on query string req.query
        res.send(`Bar has the value ${req.query.bar}`);

    })
    .post(function (req, res, next) {
        //vars on req.body
        res.render('vars', {"bar": req.query.bar,
                         "length": req.query.bar.length});

    })
    .put(function (req,res,next) {
        //vars on body
        res.send(`Bar has the value ${req.body.bar}`);

    })


router.route('/:first/:last')   //matches http://localhost:3000/vars/<string>
    .get(function (bob, fred, sally)  {
        fred.send(`Bar has the value ${bob.params.first} ${bob.params.last}`);

    })

    .post(function (bob, fred, sally) {
        fred.render('vars', {bar: bob.params.first}, {length: bob.params.first.length})

    })

router.get('/:first', function (req, res, next) {
    res.send(`Bar has the value ${req.params.first}`);

})


// res.render('vars', {bar: req.body.bar}, {length: req.body.bar.length});


module.exports = router;

