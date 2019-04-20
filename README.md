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
    * This command searches the Spotify Web API that runs on Node.js (`spotify.search({type: "track", query: userQuery}, function(err, data)`) and returns information about the song the user input. It includes `Artist: `, `Song Name: `, and `Preview Link: `, and `Album: `. If no artist is entered, the API automatically searches "The Sign" by Ace of Base for the user.

![spotify(Default)](https://user-images.githubusercontent.com/45725048/56450016-67d18180-62ef-11e9-9ff5-5a274f8a09cf.png)
![spotify](https://user-images.githubusercontent.com/45725048/56450017-6902ae80-62ef-11e9-97e7-a022bfbb1906.png)



2. `node liri.js concert-this <artist/band-name>`
    * This command searches the Bands in Town Artist Events API through Axios (`"https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=" + keys.bands.id`) and returns events the artist is appearing at in the near future. It includes `Venue Name: `, `Venue Location: `, and `Date of the Event: `.

![bandsInTown](https://user-images.githubusercontent.com/45725048/56450033-ab2bf000-62ef-11e9-8441-3b7edff17266.png)






3. `node liri.js movie-this <movie-name>`
    * This command searches the OMDB API through Axios (`"http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=" + keys.movies.id`) and returns information about the movie the user input. It includes `Title: `, `Year Released: `, `IMDB Rating: `, `Rotten Tomatoes Rating: `, `Country/Countries Produced: `, `Language: `, `Plot: `, and `Cast: `. If no movie is entered, the API automatically searches Mr. Nobody for the user, as well as letting them know that they should check it out, notifying the user that it's on Netflix, and providing a link to the IMDB page for the movie.

        PICTURE GOES HERE

    
    <!-- ![Default Movie Output](screenshots/default-movie-output.png)

    ![Example Movie Output](screenshots/example-movie-output.png) -->


4. `node liri.js do-what-it-says`
    * Using the `fs` Node package, LIRI accesses the text in random.txt and uses that to call one of LIRI's commands for the user. It runs `spotify-this-song` for "I Want it That Way" by the Backstreet Boys, but can also be modified to search for a specific movie for movie-this, or a specific artist for concert-this.

        PICTURE GOES HERE

    
    <!-- ![Do What It Says Output](screenshots/do-what-it-says.png) -->

5. `node liri.js`
    * If no other user input is registered, the terminal returns the message `Please enter a valid search term, such as {concert-this}, {spotify-this-song}, {movie-this}, or {do-what-it-says}"`.

        PICTURE GOES HERE

    
    <!-- ![Default Output](screenshots/default-output.png) -->
