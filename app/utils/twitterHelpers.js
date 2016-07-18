var axios = require('axios');

var id = "b4e72e1966e1651bd6a7";
var sec = "5962aa6fcd7496d7ff064c1d6a6dd09a3901e44e";
var param = "?client_id=" + id + "&client_secret=" + sec;


function getUserInfo(username) {
    return axios.get('/twitter/user/' + username)
}

function rateTwitterati(twiterati, opponentFollowerCount) {
    var rating = 0;
    if (twiterati.followers_count > 1000000) {
        rating += 2;
    } else {
        rating++;
    }
    if (twiterati.verified) {
        rating += 2;
    }
    if (twiterati.followers_count > opponentFollowerCount) {
        rating++;
    }

    return rating;
}


var helpers = {
    getTwitteratiesInfo: function(twitteraties) {
        return axios.all(twitteraties.map(function(username) {
            return getUserInfo(username)
        })).then(function(info) {
            return info.map(function(user) {
                return user.data;
            })
        }).catch(function(error) {
            console.warn('Error in getTwitteratiesInfo');
        })
    },
    compare: function(twitteraties) {
        return [rateTwitterati(twitteraties[0],twitteraties[1].followers_count),rateTwitterati(twitteraties[1],twitteraties[0].followers_count)]
    }
};

module.exports = helpers;
