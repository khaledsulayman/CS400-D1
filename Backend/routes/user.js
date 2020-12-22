const router = require('express').Router(),
    rp = require('request-promise'),
    spotify = require('../config/keys').spotify,
    db = require('../mongo/mongo');

/**
 * Users accessing the root url will end up on '/in',
 * having been logged into the app via Spotify. Then,
 * the app will ask for the input of a search query via
 * url params. The app sends this to the spotify API
 * and obtains the artist ID, which it then uses to
 * access a list of related artists (curated by Spotify),
 * and render the artist name and list of related artists.
 *
 * In order to reduce the time taken on all of the API
 * calls, the app implements a cache-like instance of
 * MongoDB, so that every time an artist or their related
 * artists are fetched successively, the result will be
 * returned immediately from the database instead of
 * repeating the same API calls again.
 */


// Side note: I spent most of this assignment doing some
// routing gymnastics to try and build familiarity using
// promises.


router.get('/', function(req, res) {
    res.json('in', )
});


router.get('/:query', function(req, res) {
    // let artist;
    const options = {
        method: 'GET',
        url: 'https://api.spotify.com/v1/search?type=artist&q=' + req.params.query,
        qs: { limit: '1', market: 'from_token' },
        json: true,
        headers: {
            Authorization: 'Bearer ' + spotify.ACCESS_TOKEN
        }
    };

    rp(options)
        .then(body => new Promise((resolve, reject) => {
            if (body.artists.items[0]) {
                resolve({
                    name: body.artists.items[0].name,
                    id: body.artists.items[0].id,
                    related: []
                });
            }
            else {
                reject('artist not found');
                res.send('ERROR: artist not found.');
            }

        }))

        .then((artist) => {
            let mongo = db.getDB();
            mongo.collection('artists').findOne({ id: artist.id })
                .then(record => new Promise(resolve => {
                    if (record) {
                        resolve(record);
                    } else {
                        record = {
                            id: artist.id,
                            name: artist.name,
                            related: []
                        };
                        mongo.collection('artists').insertOne(record).then(() => {
                            console.log(`cached new artist: ${record.name}`)
                        });
                        resolve(record)
                    }
                }))

                .then(record => {
                    const options = {
                        method: 'GET',
                        url: 'http://localhost:3000/in/related/' + record.id,
                        qs: {},
                        json: true,
                        headers: {
                            Authorization: 'Bearer ' + spotify.ACCESS_TOKEN
                        }
                    };
                    rp(options)
                        .then(artist => {
                            // if (err) throw new Error(err);
                            //
                            // const artist = JSON.parse(body);
                            console.log(artist);
                            res.json('result', {artist});
                        })

                    // res.render('result', {object: artist} )
                    // res.redirect('/in/related/' + artist.id);

                });
            })
});


router.get('/related/:id', function (req, res) {
    let mongo = db.getDB();
    mongo.collection('artists').findOne({id: req.params.id})
        .then(artist => {
            // console.log(artist);
            if (artist.related.length) {
                // console.log(artist.related);
                // console.log(typeof(artist.related));
                res.send({
                    id: artist.id,
                    name: artist.name,
                    related: artist.related[0],
                    fromDB: 'artist record pulled from database'
                })
            }
            else {
                console.log('Grabbing related from spotify');
                // res.send(`artist not in db`);
                const options = {
                    method: 'GET',
                    url: 'https://api.spotify.com/v1/artists/' + req.params.id + '/related-artists',
                    qs: {limit: '10'},
                    json: true,
                    headers: {
                        Authorization: 'Bearer ' + spotify.ACCESS_TOKEN
                    }
                };
                rp(options)
                    .then(result => new Promise((resolve, reject) => {
                        if (result.artists) {
                            let related = [];
                            result.artists.forEach(rel => {
                                related.push({
                                    name: rel.name,
                                    id: rel.id,
                                    related: []
                                })
                            });
                            resolve(related);
                        } else {
                            reject('Failed to fetch related artists')
                        }
                    }))

                    .then(related => {
                        // console.log('SPOTIFY SAYS RELATED ARE:');
                        // console.log(related);
                        console.log('Posting to db');
                        const options = {
                            method: 'POST',
                            url: 'http://localhost:3000/in/related/' + req.params.id,
                            body: {related},
                            json: true,
                            // headers: {}
                        };
                        rp(options)
                            .then(cached => {
                                res.send({
                                    id: artist.id,
                                    name: artist.name,
                                    related,
                                    fromDB: cached
                                })
                            })
                            .catch(err => {
                                console.log('Could not POST related artists to db:\n' + err)
                            });
                    });
            }
        })
});

router.post('/related/:id', function (req, res) {
    // console.log(`Got here with ${req.body}`);
    let mongo = db.getDB();
    // console.log('RELATED ARTISTS ARE: ');
    // console.log(req.body.related);
    mongo.collection('artists').updateOne({id: req.params.id}, {
        $push: {
            related: req.body.related
        }
    }).then(result => {
        if (result.matchedCount && result.modifiedCount) {
            console.log('Successfully cached related artists');
            const cached = 'artist record successfully pulled from spotify & cached for future access';
            res.send(cached)
        }
    })
});

module.exports = router;
