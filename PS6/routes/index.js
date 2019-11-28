const router = require('express').Router();
const passport = require('passport');
const db = require('../mongo/mongo');

/**
 * catches all incoming GET requests to the root-level URL
 * and automatically redirects them through the passport-aided
 * Spotify authentication process.
 */

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});


router.get('/',
    passport.authenticate('spotify', {
      scope: [
        'user-read-private',
        'user-read-recently-played',
        'user-top-read'
      ]
    }, function (req, res) {

    })
);

router.get('/callback',
    passport.authenticate('spotify', {
      failureRedirect: '/login'
    }),
    function(req, res) {
      //console.log('calling back');
      res.redirect('/in');
    }
);

module.exports = router;
