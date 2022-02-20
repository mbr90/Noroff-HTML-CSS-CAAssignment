// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");
// const url =
//   "https://api.themoviedb.org/3/movie/" +
//   id +
//   "?language=en-US&api_key=c7a9a6147cc43aac6069597872e5590b&=634649";
// const queryResult = document.querySelector(".purchase");
// const pageTitle = document.querySelector("title");

// async function apiCall() {
//   try {
//     const response = await fetch(url);
//     const results = await response.json();
//     const movie = results;

//     queryResult.innerHTML = "";
//     pageTitle.innerHTML = "";
//     pageTitle.innerHTML += `Purchase and Download: ${movie.title}`;
//     queryResult.innerHTML += `<div class="purchase">
//     <div class = "filmPoster"><img src="https://image.tmdb.org/t/p/w45/${movie.poster_path}" alt="${movie.original_title}" /></div><h2>${movie.original_title}</h2> <button class="removeButton">Remove</button>
//       </div>`;
//   } catch (error) {
//     console.log(error);
//     queryResult.innerHTML = `<div class="errMsg">An error occured trying to get results from the API</div>`;
//   }
// }

// apiCall();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url =
  "https://matsbrattland.no/squareeyes/wp-json/wc/v3/products/" +
  id +
  "?consumer_key=ck_e690507e3bab9bbeb1cad9993e12dfcd44491c24&consumer_secret=cs_4e6506f4621abb01566d04125833d124f9e3e9ae";
const queryResult = document.querySelector(".purchase");
const pageTitle = document.querySelector("title");

async function apiCall() {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  queryResult.innerHTML = "";
  pageTitle.innerHTML = "";
  pageTitle.innerHTML += `${products.name}`;
  queryResult.innerHTML += `<div class="purchase">
  <div class = "filmPoster"><img src="${products.images[0].src}" alt="${products.name}" width="400" height="300" /></div><h2>${products.name}</h2> <button class="removeButton">Remove</button>
    </div>`;
}

apiCall();
