const searchInput = document.querySelector('#search');
const productsDOM = document.querySelector('.products-center');
const btns = document.querySelectorAll('.btn');
// http://localhost:3000/items

let allProductsdata = []
const filters = {
  searchItem:"",
} 

document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/items")
    .then((res) => {
      allProductsdata =res.data
      renderProducts(res.data,filters)
    })
    .catch((err) => console.log(err));
})

function renderProducts(_products,_filters) {
  const filteredProducts = _products.filter((p) => {
    return p.title.toLowerCase().includes(_filters.searchItem.toLowerCase())
  })
  productsDOM.innerHTML = "";
  filteredProducts.forEach((item,index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add("products");
    productDiv.innerHTML = `
    <img class="img" src=${item.image} alt="p-${index}" />

  <div class="caption">
    <p class="product-price">$${item.price}</p>
    <p class="product-title">${item.title}</p>
  </div>
  <button class="add-to-cart">Add To Cart</button>`
    productsDOM.appendChild(productDiv)
  })
}
searchInput.addEventListener("input", (e) => {
 filters.searchItem = e.target.value
  renderProducts(allProductsdata, filters)
})
btns.forEach((btn) => {
  btn.addEventListener('click',(e)=> {
    const filter = e.target.dataset.filter;
    filters.searchItem = filter;
    renderProducts(allProductsdata, filters)
  })
})