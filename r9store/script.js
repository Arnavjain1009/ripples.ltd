// Sample data for products
const products = [
    { id: 1, name: "Basmati Rice", price: 10, description: "Premium quality Basmati rice.", image: "https://th.bing.com/th/id/OIP.ag8a43MsHWHJja5dqDSgygHaE8?rs=1&pid=ImgDetMain" },
    { id: 2, name: "Masala Chai", price: 5, description: "Spiced tea with aromatic Indian spices.", image: "https://th.bing.com/th/id/OIP.HPi5NfOCBYu7Zmqoz7nbnAHaFj?rs=1&pid=ImgDetMain" },
    // Add more products as needed
  ];
  
  // Function to display products on the page
  function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>${product.description}</p>
        <button onclick="buyProduct(${product.id})">Buy</button>
      `;
      productsContainer.appendChild(productCard);
    });
  }
  
  // Function to handle the buy button click
  function buyProduct(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      // Redirect to the product page (dummy URL for demonstration)
      window.location.href = `product.html?id=${selectedProduct.id}`;
    }
  }
  
  // Function to filter products based on search input
  function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayProducts(filteredProducts);
  }
  
  // Load products when the page loads
  window.onload = function() {
    displayProducts(products);
  
    // Search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.trim();
      filterProducts(searchTerm);
    });
  };
  // ... (Existing code)
  
  // Function to open the popup
  function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  // Load products when the page loads
  window.onload = function() {
    displayProducts(products);
  
    // Search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.trim();
      filterProducts(searchTerm);
    });
  
    // Settings button functionality
    const settingsBtn = document.getElementById('settingsBtn');
    settingsBtn.addEventListener('click', openPopup);
  };
  
  