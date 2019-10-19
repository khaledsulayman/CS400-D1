/**
 * This file (if I did it correctly) is supposed
 * to count for both part a) and b).
  */


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ps3', {"title": "Thanks for waiting on me!",
                       "msg": "better late than never I hope :) " });

});

module.exports = router;
