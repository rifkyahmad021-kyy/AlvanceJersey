// Data produk
const products = [
    { id: 1, name: "Jersey Sepak Bola Custom", price: 250000, image: "images/jersey1.jpg" },
    { id: 2, name: "Jersey Basket Premium", price: 275000, image: "images/jersey2.jpg" },
    { id: 3, name: "Jersey E-Sport Full Print", price: 300000, image: "images/jersey3.jpg" }
];

const productList = document.getElementById("product-list");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");

let cart = [];

// Render produk
products.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}">
        <h3>${prod.name}</h3>
        <p>Rp ${prod.price.toLocaleString()}</p>
        <button onclick="addToCart(${prod.id})">Tambah ke Keranjang</button>
    `;
    productList.appendChild(card);
});

// Tambah ke keranjang
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    cartCount.textContent = cart.length;
}

// Tampilkan keranjang
cartBtn.addEventListener("click", () => {
    cartItemsList.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    totalPriceEl.textContent = total.toLocaleString();
    cartModal.style.display = "block";
});

// Tutup modal
closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = "none";
    }
});
