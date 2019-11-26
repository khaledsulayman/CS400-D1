const router = require('express').Router();

/**
 * Logged in users end up here with the app accessing and
 * displaying their spotify username.
 */

router.get('/', function(req, res) {
    res.render('ps4', {title: req.user.displayName})
});

module.exports = router;