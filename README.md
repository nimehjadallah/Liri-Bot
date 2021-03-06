# Liri-Bot

## Overview
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line Node.js app that takes in parameters and passes back data based on those parameters. LIRI searches Spotify for songs, Bandsintown for concerts, and OMDB for movies.

## Built With/Installations Required

* [Node.js] (https://nodejs.org/en/)
* [Node-File-System] (https://nodejs.org/api/fs.html)
* [Axios] (https://www.npmjs.com/package/axios)
* [DotEnv] (https://www.npmjs.com/package/dotenv)
* [JavaScript] (https://www.javascript.com/)
* [Moment.js] (https://www.npmjs.com/package/moment)
* [OMDB-API] (http://www.omdbapi.com)
* [Bandsintown-API] (http://www.artists.bandsintown.com/bandsintown-api)
* [Node-Spotify-API] (https://www.npmjs.com/package/node-spotify-api)


### Commands

1. `node liri.js spotify-this-song <song-name>`
    * This command searches the Spotify Web API that runs on Node.js (`spotify.search({type: "track", query: userInput}, function(err, data)`) and returns information about the song the user input. It includes `Artist(s): `, `Song's Name: `, and `Preview Link: `, and `Album: `. If no artist is entered, the API automatically searches "The Sign" by Ace of Base for the user.

![spotify(Default)](https://user-images.githubusercontent.com/45725048/56450016-67d18180-62ef-11e9-9ff5-5a274f8a09cf.png)
![spotify](https://user-images.githubusercontent.com/45725048/56450017-6902ae80-62ef-11e9-97e7-a022bfbb1906.png)



2. `node liri.js concert-this <artist/band-name>`
    * This command searches the Bands in Town Artist Events API through Axios (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) and returns events the artist is appearing at in the near future. It includes `Name of the Venue: `, `Venue Location: `, and `Date of the events: `.

![bandsInTown](https://user-images.githubusercontent.com/45725048/56450033-ab2bf000-62ef-11e9-8441-3b7edff17266.png)



3. `node liri.js movie-this <movie-name>`
    * This command searches the OMDB API through Axios (`"http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"`) and returns information about the movie the user input. It includes `Title: `, `Year Released: `, `IMDB Rating: `, `Rotten Tomatoes Rating: `, `Country Where Produced: `, `Language: `, `Plot: `, and `Actors: `. If no movie is entered, the API automatically searches Mr. Nobody for the user, as well as letting them know that they should check it out, notifying the user that it's on Netflix, and providing a link to the IMDB page for the movie.

![movie(Default)](https://user-images.githubusercontent.com/45725048/56450085-1d9cd000-62f0-11e9-8a2a-a14d1ca9e04a.png)
![movie](https://user-images.githubusercontent.com/45725048/56450087-1d9cd000-62f0-11e9-8c89-af9d2bbce859.png)

   
    
    
4. `node liri.js do-what-it-says`
    * Using the `fs` Node package, LIRI accesses the text in random.txt and uses that to call one of LIRI's commands for the user. It runs `spotify-this-song` for "I Want it That Way" by the Backstreet Boys, but can also be modified to search for a specific movie for movie-this, or a specific artist for concert-this.

![doWhatItSays](https://user-images.githubusercontent.com/45725048/56450126-b7fd1380-62f0-11e9-9fae-785995f51810.png)


    
5. `node liri.js`
    * If no other user input is registered, the terminal returns the message `Please enter one of the following commands: {spotify-this-song}, {concert-this},  {movie-this}, or {do-what-it-says}"`.

![default](https://user-images.githubusercontent.com/45725048/56450127-b92e4080-62f0-11e9-95a8-be1b796847ba.png)

    
