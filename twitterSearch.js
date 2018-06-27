console.log('The bot is starting')

const Twit = require('twit');

const twitterConfig = require('../config/twitterConfig')

const artistSchema = require('./spotify_model')
                         //   console.log(JSON.stringify(artistSchema.schema.obj.artist))

const T = new Twit(twitterConfig)

const tweets = require ('./twitter_model')



for(let count=0; count<1; count++) {
    artistSchema.find({}, function (err, artists) {
        if (err)
            console.error(error);
        let string = JSON.stringify(artists[0].artist)
        {
            console.log(string)
            let options = {
                q: string,
                count: 1
            }
            T.get('search/tweets', options, gotData)

            function gotData(err, data, res) {
                 let tweet = JSON.stringify(data.statuses[count].text);
                res.json(tweet)
                console.log(tweet)
                console.log('\n')



                newTweet = new tweets({
                    Tweet: tweet
                })

                newTweet.save(function(error){
                    console.log("tweet saved")
                    if(error){
                        console.error(error)
                    }
                })


            }
        }
    })
}
for(let count=0; count<1; count++) {
    artistSchema.find({}, function (err, artists) {
        if (err)
            console.error(error);
        let string = JSON.stringify(artists[1].artist)
        {
            console.log(string)
            let options = {
                q: string,
                count: 1
            }
            T.get('search/tweets', options, gotData)

            function gotData(err, data, res) {
                let tweet1 = JSON.stringify(data.statuses[count].text);
                res.json(tweet1)
                console.log(tweet1)
                console.log('\n')


                newTweet = new tweets({
                    Tweet: tweet1
                })

                newTweet.save(function (error) {
                    console.log("tweet saved")
                    if (error) {
                        console.error(error)
                    }
                })


            }
        }
    })
}

for(let count=0; count<1; count++) {
    artistSchema.find({}, function (err, artists) {
        if (err)
            console.error(error);
        let string = JSON.stringify(artists[2].artist)
        {
            console.log(string)
            let options = {
                q: string,
                count: 1
            }
            T.get('search/tweets', options, gotData)

            function gotData(err, data, res) {
                let tweet2 = JSON.stringify(data.statuses[count].text);
                res.json(tweet2)
                console.log(tweet2)
                console.log('\n')


                newTweet = new tweets({
                    Tweet: tweet2
                })

                newTweet.save(function (error) {
                    console.log("tweet saved")
                    if (error) {
                        console.error(error)
                    }
                })


            }
        }
    })
}
module.exports = tweets;



