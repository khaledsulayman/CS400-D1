const router = require('express').Router(),
    request = require('request'),
    spotify = require('../config/keys').spotify;
/**
 * Logged in users end up here with the app accessing and
 * displaying their spotify username.
 */


router.get('/', function(req, res) {

    const options = { method: 'GET',
        url: 'https://api.spotify.com/v1/me/top/artists',
        qs: { time_range: 'short_term', limit: '1' },
        headers:
            {
            //    'cache-control': 'no-cache',
            //     Connection: 'keep-alive',
            //     'Accept-Encoding': 'gzip, deflate',
            //     Host: 'api.spotify.com',
            //     'Postman-Token': '7f5293ef-6894-460b-9886-43214ff8e452,237fb2f5-b094-4301-a506-98c3764079f6',
            //     'Cache-Control': 'no-cache',
            //     Accept: '*/*',
            //     'User-Agent': 'PostmanRuntime/7.18.0',
                Authorization: 'Bearer ' + spotify.ACCESS_TOKEN
            }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        const json = JSON.parse(body);
        const artist = json.items[0].name;

        //console.log(artist)

        res.render('ps4',
            {   title: req.user.displayName,
                artistName: artist })

    });
});

module.exports = router;
