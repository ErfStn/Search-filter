// Modal
const showModalBtn = document.querySelector('.show-modal');
const modal = document.querySelector('.cart');
const backDrop = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.cart-item-confirm');

const productDOM = document.querySelector('.products-center');
const cartTotal = document.querySelector('.cart-total');
const cartItems = document.querySelector('.cart-items');
const cartContent = document.querySelector('.cart-content');
const clearCart = document.querySelector('.clear-cart');

import { productsData } from './products.js';

let cart = [];
let buttonsDOM = [];
//1 get products
class products {
  getProducts() {
    return productsData;
  }
}

//2 displaye products
class Ui {
  displayProducts(products) {
    let result = '';
    products.forEach((item) => {
      result += `<section class="products">
            <div class="image-container">
              <img class="img" src=${item.imageUrl} alt="poster 1" />
            </div>
            <div class="caption">
              <p class="product-title">${item.title}</p>
              <p class="product-price">$ ${item.price}</p>
            </div>
            <button class="btn add-to-cart" id="${item.id}">Add To Cart</button>
          </section>`;
      productDOM.innerHTML = result;
    });
  }
  getAddToCartBtn() {
    const addToCartBtns = [...document.querySelectorAll('.add-to-cart')];
    buttonsDOM = addToCartBtns;
    addToCartBtns.forEach((btn) => {
      const id = btn.id;
      //cheeck this product id in this cart or not
      const isInCart = cart.find((p) => p.id === parseInt(id));//=> boolean 
      if (isInCart) {
        btn.innerHTML = 'In Cart';
        btn.disabled = true;
      }
      btn.addEventListener('click', (event) => {
        event.target.innerHTML = 'In Cart';
        event.target.disabled = true;
        //get product from products
        const addedProduct = { ...Storage.getProducts(id), quantity: 1 };
        //added to cart
        cart = [...cart, addedProduct];
        //save cart to local storage
        Storage.saveCart(cart);
        //update cart value
        this.setCartValue(cart);
        //add to cart item
        this.addCartItem(addedProduct);
      });
    });
  }
  setCartValue(cart) {
    // 1 cart item
    // 2 cart total price
    let tempCartItems = 0;
    const totalPrice = cart.reduce((acc, curr) => {
      tempCartItems += curr.quantity;
      return curr.quantity * curr.price + acc;
    }, 0);
    cartTotal.innerText = `total price : $${parseFloat(totalPrice).toFixed(2)}`;
    cartItems.innerText = tempCartItems;
  }
  addCartItem(cartItem) {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `<img src=${cartItem.imageUrl} alt="" class="cart-item-img">
        <div class="cart-item-desc">
          <h4>${cartItem.title}</h4>
          <h5>$ ${cartItem.price}</h5>
        </div>
        <div class="cart-item-controller">
          <i class="fas fa-chevron-up" id="${cartItem.id}"></i>
          <p>${cartItem.quantity}</p>
          <i class="fas fa-chevron-down" id="${cartItem.id}"></i>
        </div>
          <i class="fas fa-trash-alt remove-item" id="${cartItem.id}"></i>
`;
    cartContent.appendChild(div);
  }
  setupApp() {
    // get cart from storage
    cart = Storage.getItemCart() || [];
    // add to cart item
    this.populateCart(cart);
    //set vaslue
    this.setCartValue(cart);
  }
  populateCart(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }
  cartlogic() {
    clearCart.addEventListener('click', () => {
      this.clearCart();
    });
    cartContent.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-item')) {
        // 1 get item from cart
        const removeItem = event.target;
        const id = removeItem.id;
        // 2 remove
        cartContent.removeChild(removeItem.parentElement);
        this.removeItem(id);
      } else if (event.target.classList.contains('fa-chevron-up')) {
        const addedQuantity = event.target;
        // 1 get item from cart
        const addedItem = cart.find((cItem) => cItem.id == addedQuantity.id);
        addedItem.quantity++;
        // 2 update cart value
        this.setCartValue(cart);
        // 3 save cart
        Storage.saveCart(cart);
        // 4 update number of quantity
        addedQuantity.nextElementSibling.innerText = addedItem.quantity;
      } else if (event.target.classList.contains('fa-chevron-down')) {
        const subQuantity = event.target;
        // 1 get item from cart
        const substractedItem = cart.find((cItem) => cItem.id == subQuantity.id);
        if (substractedItem.quantity === 1) {
          this.removeItem(substractedItem.id);
          cartContent.removeChild(subQuantity.parentElement.parentElement);
          return;
        }
        substractedItem.quantity--;
        // 2 update cart value
        this.setCartValue(cart);
        // 3 save cart
        Storage.saveCart(cart);
        // 4 update number of quantity
        subQuantity.previousElementSibling.innerText = substractedItem.quantity;
      }
    });
  }
  clearCart() {
    //clear cart
    cart.forEach((cItem) => this.removeItem(cItem.id));
    // remove cart content
    while (cartContent.children.length) {
      cartContent.removeChild(cartContent.children[0]);
    }
    closeModal();
  }
  removeItem(id) {
    // update cart
    cart = cart.filter((cItem) => cItem.id != parseInt(id));
    // upate total price
    this.setCartValue(cart);
    //update storage
    Storage.saveCart(cart);
    // get add to cart btns
    const button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `Add to cart`;
  }
  getSingleButton(id) {
    return buttonsDOM.find((btn) => parseInt(btn.id) == parseInt(id));
  }
}
//3 storage`
class Storage {
  static savePorducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }
  static getProducts(id) {
    const _products = JSON.parse(localStorage.getItem('products'));
    return _products.find((p) => p.id === parseInt(id));
  }
  static saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  static getItemCart() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new Ui();
  ui.setupApp();
  const productsItem = new products();
  //set up :get cart and set up app
  const productsData = productsItem.getProducts();
  ui.displayProducts(productsData);
  ui.getAddToCartBtn();
  ui.cartlogic();
  Storage.savePorducts(productsData);
});
// modal cart
showModalBtn.addEventListener('click', () => {
  modal.style.opacity = '1';
  backDrop.style.display = 'block';
  modal.style.top = '20%';
});
function closeModal() {
  backDrop.style.display = 'none';
  modal.style.opacity = '0';
  modal.style.top = '-100%';
}
backDrop.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);
