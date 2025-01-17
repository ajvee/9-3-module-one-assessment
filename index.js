/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  // setting up our new array/ and accumulator
  let movieTitles = []
  // iterating through the movies object
  for (i = 0; i < movies.length; i++){
  // any movie title will get pushed into the array
   movieTitles.push(movies[i].title)
  } 
  return movieTitles
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  //establish accumulator
  if (movies.length === 0){
    return 0
  }
  //making our variable a base to compare later on 
  let highestMetScore = movies[0].metascore
  for (let i = 0; i < movies.length; i++){
    // setting the condition where the loop ends, thus using our variable to retrieve the 'highest score'
    if(highestMetScore < movies[i].metascore){
      highestMetScore = movies[i].metascore
    }
  }
  // using "Number" key to convert string to anumber type
  return Number(highestMetScore)
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  // declare a variable for average rating
  let average = 0
  // iterating through the movies object
  for (let i = 0; i < movies.length; i++){
    // adding and totaling the elements then dividing it by the number of elements
    average += movies[i].imdbRating/movies.length
  }
  return average
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies){
  // creating new object/accumulator
  let newObj = {}
  for (let i = 0; i < movies.length; i++){
    // checking to see if the array is empty 
    if (newObj[movies[i].rated] === undefined){
      //if the array only has one movie
      newObj[movies[i].rated] = 1
    } else {
      //incrementing by 1 if theres more than one movie
      newObj[movies[i].rated] += 1
    }
  }
  return newObj
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies,id) {
  for (let i = 0; i < movies.length; i++){
    //setting up our condtional to see if the imdbID key matches the id parameter
    if (movies[i].imdbID === id){
      return movies[i]
    }
  }
  // return null if the ID and array are empty/not match
  return null
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies,genre) {
  //setting up new array 
  let newGenre = []
  for (i = 0; i < movies.length; i++){
    //since it's case-sensitive, i'll make it easier on me and lowercase every genre
   if (movies[i].genre.toLowerCase().includes(genre.toLowerCase()))
   //pushing back all the lowercased genres into the created array
   newGenre.push(movies[i]) 
  }
  return newGenre
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies,year) {
  //creating new array 
  let newArr = []
  for (let i = 0; i < movies.length; i++){
    //creating our new variable with and using slice to retrieve only the years from the different movies 
  let released = movies[i].released.slice(6,11)
  //comparing if the new variable with the sliced year is less than our year parameter
  if(released <= year){
    //pushing the years that less than or equal to into the established array
    newArr.push(movies[i])
  }
}
return newArr
}
  


/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  // setting up accumulator 
  if (movies.length === 0){
    return null
  }
  //establishing our variables to equal the first indexed object and dotnotation for retrieving 'boxOffice' key
  let biggestBox = movies[0].boxOffice
  //establishing our variables to equal the first indexed object and dotnotation for retrieving 'title' key
  let biggestMovie = movies[0].title
  for(let i = 0; i < movies.length; i++){
    // comparing the looped object to our created variable 'biggestbox'
    if(movies[i].boxOffice > biggestBox){
      // slicing and retrieving the whole $ amount 
      biggestBox = movies[i].boxOffice.slice(1)
      // changing our variable to the looped movie with the highest amount of box office revenue
      biggestMovie = movies[i].title
    }
  }
  return biggestMovie
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
