const apiUrl =
  "https://matsbrattland.no/squareeyes/wp-json/wc/v3/products?consumer_key=ck_e690507e3bab9bbeb1cad9993e12dfcd44491c24&consumer_secret=cs_4e6506f4621abb01566d04125833d124f9e3e9ae";
const resultsContainer = document.querySelector(".results");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);

    resultsContainer.innerHTML = "";
    products.forEach(function (product) {
      resultsContainer.innerHTML += "";
      resultsContainer.innerHTML += `<a href="filmPage.html?id=${product.id}" class="result">
      <div class = backgroundImg><img src="${product.images[0].src}" alt="${product.name}" width="400" height="300" /></div>
      <h2 class="movieTitle">${product.name}</h2>
           <p class="movieScore">Price: ${product.regular_price}</p>
      </a>`;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = `<div class="errMsg">An error occured trying to get results from the API</div>`;
  }
}

getProducts(apiUrl);
