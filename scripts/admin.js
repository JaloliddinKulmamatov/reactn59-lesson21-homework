import { checkToken, redirect , logout } from "./utils.js";

const logout_btn = document.getElementById("logout-btn");
const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const product = document.getElementById("product")


logout_btn.onclick = logout;

window.addEventListener("DOMContentLoaded", function () {
  const hasToken = checkToken();

  if (!hasToken) {
    redirect("/login.html");
  }
});

const form = document.forms[0];
const products = [];

form.onsubmit = function(event) {
  event.preventDefault();
if (title.value && price.value > 0 && description.value) {
  const newProduct = {
    id: Date.now(),
    title: title.value,
    price: price.value,
    description: description.value,
  }
  const card = document.createElement('div');
  card.classList.add("product_card");
  card.innerHTML = `
  <p>id:${newProduct.id}</p>
  <p>name:${newProduct.title}</p>
  <p>price:${newProduct.price}$</p>
  <p>description:${newProduct.description}</p>

  `

  title.value = '';
  price.value = '';
  description.value = '';

  products.push(newProduct);
  product.append(card)
}
}
