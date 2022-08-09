import { productsData } from './products.js';

const productDom = document.querySelector('.products-center');
const cartContent = document.querySelector('.cart-content');
const clearCart = document.querySelector('.clear-cart');
const cartTotal = document.querySelector('.cart-total');
const cartItems = document.querySelector('.cart-items');

let buttonsDOM = [];
let cart = [];

class products {
  getProducts() {
    return productsData;
  }
}
class Ui {
  displayProducts(products) {
    let result = '';
    products.forEach((item) => {
      result += `
    <section class="products">
    <div class="image-container">
      <img class="img" src=${item.imageUrl} alt="poster 1" />
    </div>
    <div class="caption">
      <p class="product-title">${item.title}</p>
      <p class="product-price">$${item.price}</p>
    </div>
    <button class="btn add-to-cart" id="${item.id}">Add To Cart</button>
  </section>`;
      productDom.innerHTML = result;
    });
  }
  getAddToCartbtn() {
    const addToCartBtn = [...document.querySelectorAll('.add-to-cart')];
    buttonsDOM = addToCartBtn;
    addToCartBtn.forEach((btn) => {
      const id = btn.id;
      const isInCart = cart.find((p) => p.id === parseInt(id)); //=> boolean
      if (isInCart) {
        btn.innerHTML = 'In Cart';
        btn.disabled = true;
      }
      btn.addEventListener('click', (event) => {
        event.target.innerHTML = 'In Cart';
        event.target.disabled = true;

        const addedProduct = { ...Storage.getProducts(id), quantity: 1 };

        cart = [...cart, addedProduct];
    this.setValue(cart)
        Storage.saveCart(cart);
        this.addCartItem(addedProduct);
      });
    });
  }
  addCartItem(cartItem) {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `<img src=${cartItem.imageUrl} alt="" class="cart-item-img">
    <div class="cart-item-desc">
      <h4>${cartItem.title}</h4>
      <h5>$ ${cartItem.price}</h5>
    </div>
    <div class="cart-item-controller" id="${cartItem.id}">
      <i class="fas fa-chevron-up" id="${cartItem.id}"></i>
      <p>1</p>
      <i class="fas fa-chevron-down" id="${cartItem.id}"></i>
    </div>
      <i class="fas fa-trash-alt remove-item" id="${cartItem.id}"></i>`;
    cartContent.appendChild(div);
  }
  setupApp() {
    cart = Storage.getItemCart() || [];
    this.setValue(cart)
    cart.forEach((item) => this.addCartItem(item));
  }
  removeItem(id) {
    cart = cart.filter((cItem) => cItem.id != parseInt(id));
    Storage.saveCart(cart);
    this.setValue(cart)
    const button = this.getAddToCartBtn(id);
    button.innerHTML = 'Add To Cart';
    button.disabled = false;
  }
  getAddToCartBtn(id) {
    return buttonsDOM.find((btn) => parseInt(btn.id) == parseInt(id));
  }
  setValue(cart) {
    let tempCartItem = 0;
    const totalPrice = cart.reduce((acc, curr) => {
      tempCartItem += curr.quantity;
      return curr.quantity * curr.price + acc
    }, 0)
    cartTotal.innerText = `total price: $${parseFloat(totalPrice).toFixed(2)}`;
    cartItems.innerText = tempCartItem;
  }
  clearCart() {
    cart.forEach((cItem) => this.removeItem(cItem.id));
    while (cartContent.children.length) {
      cartContent.removeChild(cartContent.children[0]);
    }
    closeModal();
  }
  cartLogic() {
    clearCart.addEventListener('click', () => {
      this.clearCart();
    });
    cartContent.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-item')) {
        const removeItem = event.target;
        const id = removeItem.id;
        cartContent.removeChild(removeItem.parentElement);
        this.removeItem(id);
      } else if (event.target.classList.contains('fa-chevron-up')) {
        const addedQuantity = event.target;
        const addedItem = cart.find((cItem) => cItem.id == addedQuantity.id);
        addedItem.quantity++;
    this.setValue(cart)
        Storage.saveCart(cart)
        addedQuantity.nextElementSibling.innerHTML = addedItem.quantity
      } else if (event.target.classList.contains('fa-chevron-down')) {
        const subQuantity = event.target;
        const substractedItem = cart.find((cItem) => cItem.id == subQuantity.id);
        if (substractedItem.quantity === 1) {
          this.removeItem(substractedItem.id)
          cartContent.removeChild(subQuantity.parentElement.parentElement);
          return
        }
        substractedItem.quantity--;
        Storage.saveCart(cart)
    this.setValue(cart)
        subQuantity.previousElementSibling.innerHTML = substractedItem.quantity;
      }
    });
  }
}
class Storage {
  static saveProducts(products) {
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
  const productsItem = new products();
  const productsData = productsItem.getProducts();
  ui.setupApp();
  ui.cartLogic();
  ui.displayProducts(productsData);
  ui.getAddToCartbtn();
  Storage.saveProducts(productsData);
});

// modal
const showModalBtn = document.querySelector('.show-modal');
const backDrop = document.querySelector('.backdrop');
const modal = document.querySelector('.cart');
const cartItemcConfirm = document.querySelector('.cart-item-confirm');

showModalBtn.addEventListener('click', () => {
  modal.style.opacity = '1';
  modal.style.top = '20%';
  backDrop.style.display = 'block';
});

function closeModal() {
  backDrop.style.display = 'none';
  modal.style.opacity = '0';
  modal.style.top = '-100%';
}
backDrop.addEventListener('click', closeModal);
cartItemcConfirm.addEventListener('click', closeModal);
