// Shopping Cart Array
let cart = [];

// Add Event Listeners to "Add to Cart" Buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const price = parseFloat(button.getAttribute('data-price'));

        // Add the book to the cart
        cart.push({ title, price });

        // Update Cart UI
        updateCart();
    });
});

// Function to Update Cart UI
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear current cart UI
    cartItems.innerHTML = '';

    // Calculate total price
    let total = 0;

    // Populate cart items
    cart.forEach((item, index) => {
        total += item.price;

        // Add item to the cart list
        const li = document.createElement('li');
        li.textContent = `${item.title} - $${item.price}`;
        li.innerHTML += ` <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });

    // If cart is empty
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Your cart is empty.</li>';
    }

    // Update total price
    totalPriceElement.textContent = `Total: $${total}`;
}

// Function to Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
