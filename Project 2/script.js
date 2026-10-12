let cart = [];

// Fetch menu items from the server
async function loadMenu() {
    const response = await fetch('menu.php');
    const items = await response.json();
    const menuDiv = document.getElementById('menu');

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuDiv.appendChild(itemDiv);
    });
}

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    cart.push(item);
    alert(`${item.name} added to cart!`);
}

// Proceed to payment
function proceedToPayment() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'payment.php';
}

// Load menu when the page loads
window.onload = loadMenu;