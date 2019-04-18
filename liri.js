require("dotenv").config();
var keys = require("./keys.js");
// var request= require("request");
var Spotify = require("node-spotify-api");
// var fs = request("fs");
var axios = require("axios");

var moment = require("moment");
var command = process.argv[2];
var userInput = process.argv.slice(3).join("+");

function runLiri(command, userInput){
    switch(command){
        case "spotify-this-song":
        spotify(userInput);
        break;

        case "concert-this":
        bandsInTown(userInput);
        break;

        case "movie-this":
        OMDB(userInput);
        break;

        case "do-what-it-says":
        random(userInput);
        break;

        default:
        console.log("Please enter one of the following commands: 'spotify-this-song', 'concert-this', 'movie-this', do-what-it-says' ")


    }
};

// spotify();
function spotify(userInput){
    var spotify = new Spotify(keys.spotify);
if (!userInput){
    userInput = "The Sign";
};
    spotify.search({ type: 'track', query: userInput, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data);
    //   code goes here 
    console.log("Artist(s) Name: " + data.tracks.items[0].album.artists[0].name + "\n");
    console.log("Song's Name: " + data.tracks.items[0].name+"\n");
    console.log("Preview Link: " +  data.tracks.items[0].href  + "\n"); /*preview_url instead of href*/
    console.log("Album: " + data.tracks.items[0].album.name + "\n");
      });
      
};


// bandsInTown();
function bandsInTown(artist){
    var artist = userInput;
    var bandQueryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(bandQueryURL)
  .then(function (response) {
      console.log(response);
    console.log("Name of the Venue:" + response.data[0].venue.name + "\n");
    console.log("Venue Location:" + response.data[0].venue.city + "\n");
    console.log("Date of events:" + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\n");


  });
  


};

function OMDB(movie){
    if (!movie){
        movie = "Mr. Nobody";
    }
    var movieQueryURL =  "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.request(movieQueryURL)
    .then(function(response) {

        console.log("Title: " + response.data.Title + "\n");
        console.log("Year Released: " + response.data.Year + "\n");
        console.log("IMDB rating: " + response.data.imdbRating + "\n");
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n");
        console.log("Country Where Produced: " + response.data.Country + "\n");
        console.log("Language: " + response.data.Language + "\n");
        console.log("Plot: " + response.data.Plot + "\n");
        console.log("Actors: " + response.data.Actors+ "\n");
    });
}

runLiri(command, userInput);




