'use strict'

//Grab Twitter keys from keys.js and store in a variable
var twitterKeys = require("./keys.js");

// Incorporate all NPM "request" packages
var request = require("request");
var fs = require("fs");
var twitter = require("twitter");
var spotify = require("spotify");


//List out authentication parameters

var client = new twitter({
  consumer_key: 'xBupSUXH6rF9iRq4nL6g3y7Rp',
  consumer_secret: 'bqKppyFjlUC0ScQakBL2Dpe0gdMniz0pfQ0jPQyB99WUjAj2zg',
  access_token_key: '35743362-qAg2RLj76ah0IUyONEHSYeqWqELPvDQ3lD1mQRDBT',
  access_token_secret: 'MvfXDbUtt04VUFM425Vtoe8nknRlQxaZYXaudn0C4T9QN',
});

//Call katerbug3 and log last 20 tweets
//Throw error if error

var params = {screen_name: 'katerbug3'};

client.get('statuses/user_timeline', params, function(error, status, response) {
  if (error) {
  	throw error;
}
  else{ 
  	  console.log(status.length > 20);
  }
  
});

// Spotify Request - spotify-this-song will return the artist, song name, preview link of song and the album
 
spotify.search({ type: 'track', query: 'I want it that way' }, function(err, result) {

//If error, print error
    if ( err ) {
      throw error;
    }
//Else, print artist, song name, preview link, album,

    else {
    	 console.log(JSON.stringify(result, null, 2));
    }

});

//OMDB Request 

//Run a request with movie specified

request("http://www.omdbapi.com/?t=big+daddy&y=&plot=short&r=json", function(error, response, body) {

 // If the request is successful (i.e. if the response status code is 200)
  	if (!error && response.statusCode === 200) {

//Print out body
   console.log(body);
}
//Else, print out data for Mr. Nobody
//   	else {
  	
//  request("http://www.omdbapi.com/?t=big+daddy&y=&plot=short&r=json", function(error, response, body) {
//   	console.log(body);
//   }
// };

});
  
//Read random.txt file and log data

fs.readFile("random.txt", function(error, data){
	console.log(JSON.stringify(data));

});




