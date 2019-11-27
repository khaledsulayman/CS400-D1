const router = require('express').Router();
const passport = require('passport');

/**
 * catches all incoming GET requests to the root-level URL
 * and automatically redirects them through the passport-aided
 * Spotify authentication process.
 */

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
      res.redirect('/ps4');
    }
);

module.exports = router;
