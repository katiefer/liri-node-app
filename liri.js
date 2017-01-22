'use strict'

//Grab Twitter keys from keys.js and store in a variable
var twitterKeys = require("./keys.js");

// Incorporate all NPM "request" packages
var request = require("request");
var fs = require("fs");
var twitter = require("twitter");
var spotify = require("spotify");


//Twitter Request - Display last 20 tweest and when they were created


// var params = {screen_name: 'katerbug3'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

// Spotify Request - spotify-this-song will return the artist, song name, preview link of song and the album
 
// spotify.search({ type: 'track', query: 'I want it that way' }, function(err, result) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }

//     else {
//     	 console.log(JSON.stringify(result, null, 2));
//     }

// });

//OMDB Request 

// Run a request with movie specified
request("http://www.omdbapi.com/?t=big+daddy&y=&plot=short&r=json", function(error, response, body) {

 	// If the request is successful (i.e. if the response status code is 200)
  	if (!error && response.statusCode === 200) {

  	//Print out Body
    console.log(body);
  }

  //Else, print out all content for Mr Nobody
  
});






