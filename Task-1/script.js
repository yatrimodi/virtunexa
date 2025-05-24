const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle navigation menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize or get existing cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add event listeners to all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productCard = button.closest(".product-card");

      const product = {
        id: productCard.getAttribute("data-id"),
        name: productCard.querySelector("h4").textContent,
        price: productCard.querySelector("p").textContent,
        image: productCard.querySelector("img").src
      };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
    });
  });
});
