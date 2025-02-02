// Cart data
let cart = [];

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    // Add the product to the cart
    cart.push({ name: productName, price: productPrice });

    // Update the cart count
    updateCartCount();

    // Show a confirmation message
    alert(`${productName} added to cart!`);

    // Log the cart for debugging
    console.log("Cart:", cart);
}

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Initialize the cart count when the page loads
window.onload = function () {
    updateCartCount();
};