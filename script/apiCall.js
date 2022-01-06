const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=c7a9a6147cc43aac6069597872e5590b&language=en-US&page=1";
const resultsContainer = document.querySelector(".results");

async function apiCall() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const movies = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
      if (i === 25) {
        break;
      }

      resultsContainer.innerHTML += `<a href="filmPage.html?id=${movies[i].id}" class="result">
      <div class = backgroundImg><img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="${movies[i].original_title}" /></div>
      <h2>${movies[i].original_title}</h2>
           <p>Score: ${movies[i].vote_average}</p>
      </a>`;
    }
  } catch (error) {
    console.log(error);

    resultsContainer.innerHTML = `<div class="errMsg">An error occured trying to get results from the API</div>`;
  }
}

apiCall();
