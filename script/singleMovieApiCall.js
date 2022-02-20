const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url =
  "https://matsbrattland.no/squareeyes/wp-json/wc/v3/products/" +
  id +
  "?consumer_key=ck_e690507e3bab9bbeb1cad9993e12dfcd44491c24&consumer_secret=cs_4e6506f4621abb01566d04125833d124f9e3e9ae";
const queryResult = document.querySelector(".queryResult");
const pageTitle = document.querySelector("title");

async function apiCall() {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  queryResult.innerHTML = "";
  pageTitle.innerHTML = "";
  pageTitle.innerHTML += `${products.name}`;
  queryResult.innerHTML += `
      <div class="resultDet">
      <h2>${products.name}</h2>
      <div class = "filmPoster"><img src="${products.images[0].src}" alt="${products.name}" width="400" height="300" /></div>
      <p><b>Price:</b> ${products.price}</p>
      <p class="filmSum"><b>Overview:</b> ${products.description}</p>
      <a href="purchaseFilmPage.html?id=${products.id}" class="centerButton"><button class="creatAccountButton">
      Add to Cart</button></a>
    </div>`;

  console.log(error);
}

apiCall();
