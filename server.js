var Twitter = require('twitter-js-client').Twitter;
var express = require('express');
var webpack = require('webpack');
var path = require('path');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackConfig = require('./webpack.config');
var bodyParser = require('body-parser');

 
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var config = {
    "consumerKey": "iB5BhentBbX9dFkaIsT2P4F2D",
    "consumerSecret": "MFFS4BbfTRZEMZbBEcrjr48HR7HSFMsIa3ykDsL5KTGf5rpbnT",
    "accessToken": "753589448563011585-FtxCkKY3jqi2eh6iX9k21cIoXeojN66",
    "accessTokenSecret": "rB6eQNbPX98ixFNlTf5BYDcKt2Z845qVHg6ElHShohFnz",
};

var twitter = new Twitter(config);

var app = express();
 
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/twitter/user/:username', function (req, res) {
    var username = req.params.username;;
    var data = twitter.getUser({ screen_name: username}, function(error, response, body){
        res.send({
            "error" : error
        });
    }, function(data){
        res.send({
            result : {
                "userData" : data
            }
        });
    });
});

app.listen(3000);