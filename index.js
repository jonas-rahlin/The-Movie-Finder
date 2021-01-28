const searchBtn = document.getElementById("search-btn");
const movieList = document.getElementById("movie-list");
let movies = [];


searchBtn.addEventListener("click", async () => {
    let movies = [];
    movieList.innerHTML = "";
    await getMovies();
    displayMovies();
})

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

const getMovies = async () => {
    const searchInput = document.getElementById("search-input").value;
    const apiCall = `http://www.omdbapi.com/?apikey=9c1e556d&s=${searchInput}`;
    const res = await fetch(apiCall);
    const data = await res.json();
    console.log(data.Search);
    movies = data.Search;
}