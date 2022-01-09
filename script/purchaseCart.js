const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url =
  "https://api.themoviedb.org/3/movie/" +
  id +
  "?language=en-US&api_key=c7a9a6147cc43aac6069597872e5590b&=634649";
const queryResult = document.querySelector(".queryResult");
const pageTitle = document.querySelector("title");

async function apiCall() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const movie = results;

    queryResult.innerHTML = "";
    pageTitle.innerHTML = "";
    pageTitle.innerHTML += `${movie.title}`;
    queryResult.innerHTML += `<div class="resultDet">
        <h2>${movie.original_title}</h2>
        <div class = "filmPoster"><img src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="${movie.original_title}" /></div>
        <p><b>Score:</b> ${movie.vote_average}</p>
        <p class="filmSum"><b>Overview:</b>${movie.overview}</p>
      </div>`;
  } catch (error) {
    console.log(error);

    queryResult.innerHTML = `<div class="errMsg">An error occured trying to get results from the API</div>`;
  }
}

apiCall();
