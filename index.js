//Search Button <button>(id="search-btn")
const searchBtn = document.getElementById("search-btn");

//Movie container <ol>(id="movie-list")
const movieList = document.getElementById("movie-list");

//Empty array for filling with information retrieved from API
let movies = [];

//When search-button is clicked:
searchBtn.addEventListener("click", async () => {
    let movies = [];
    movieList.innerHTML = "";
    await getMovies();
    displayMovies();
})

//Get the list of movies from the API based on the search string inputed into: <input>(id="search-input").
const getMovies = async () => {
    const searchInput = document.getElementById("search-input").value;
    const apiCall = `http://www.omdbapi.com/?apikey=9c1e556d&s=${searchInput}`;
    const res = await fetch(apiCall);
    const data = res.json();
    console.log(data.Search);
    movies = data.Search;
}

//Create a new list item for each movie in the array. Then add those list items to <ol>(id="movie-list")
const displayMovies = () => {
    for(let i = 0; i < movies.length; i++){
        const movie = document.createElement("li");
        movie.classList.add("movie");
        movie.innerHTML = 
        `<img class="image" src="${movies[i].Poster}" alt="">
        <h2 class="title">${movies[i].Title}</h1>
        <h3 class="year">${movies[i].Year}</h2>
        <a class="imdb" target="_blank" href="https://www.imdb.com/title/${movies[i].imdbID}/">IMDB</a>`
        movieList.append(movie);
    }
}