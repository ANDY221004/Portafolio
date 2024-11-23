const products = [
    {
        id: 1,
        name: "Camiseta Básica",
        price: 29.99,
        description: "Polo básico",
        imageId: "img-camiseta",
        category: "casual"
    },
    {
        id: 2,
        name: "Pantalón Cargo",
        price: 59.99,
        description: "Jeans Cargo de corte regular",
        imageId: "img-jeans",
        category: "casual"
    },
    {
        id: 3,
        name: "Pantalón Slim Fit",
        price: 49.99,
        description: "Pantalón Slim fit",
        imageId: "img-vestido",
        category: "formal"
    },
    {
        id: 4,
        name: "Camisa en resort con tejido texturizado",
        price: 39.99,
        description: "Camisa manga corta con tejido texturizado",
        imageId: "img-sudadera",
        category: "casual"
    },
    {
        id: 5,
        name: "Sudadera Deportiva",
        price: 45.99,
        description: "Sudadera deportiva con capucha",
        imageId: "img-sudadera-nueva",
        category: "deportiva"
    },
    {
        id: 6,
        name: "Joya de plata",
        price: 55.99,
        description: "Joya de plata con diseño de dragón",
        imageId: "img-jeans-clasicos",
        category: "accesorios"
    },
    {
        id: 7,
        name: "Camisa Formal",
        price: 49.99,
        description: "Camisa formal manga larga",
        imageId: "img-camisa-formal",
        category: "formal"
    },
    {
        id: 8,
        name: "Chaqueta de Cuero",
        price: 79.99,
        description: "Chaqueta de cuero básica",
        imageId: "img-chaqueta",
        category: "casual"
    },
    {
        id: 9,
        name: "Zapatillas Deportivas",
        price: 89.99,
        description: "Zapatillas deportivas de alto rendimiento",
        imageId: "img-zapatilla",
        category: "deportiva"
    },
    {
        id: 10,
        name: "Shorts Deportivos",
        price: 34.99,
        description: "Shorts deportivos de alta comodidad",
        imageId: "img-shorts",
        category: "deportiva"
    },
    {
        id: 11,
        name: "Collar Corazón",
        price: 29.99,
        description: "Collar con forma de corazón para mujer",
        imageId: "img-accesorio",
        category: "accesorios"
    },
    {
        id: 12,
        name: "Cardigan Negro",
        price: 59.99,
        description: "Cardigan para mujer en color negro",
        imageId: "img-cardigan",
        category: "casual"
    },
    {
        id: 13,
        name: "Reloj Formal",
        price: 129.99,
        description: "Reloj formal elegante para hombre",
        imageId: "img-reloj", 
        category: "accesorios"
    },
    {
        id: 14,
        name: "Polo Camisero",
        price: 45.99,
        description: "Polo camisero formal de alta calidad",
        imageId: "img-polo",
        category: "formal"
    },
    {
        id: 15,
        name: "Casaca Deportiva",
        price: 89.99,
        description: "Casaca deportiva para hombre",
        imageId: "img-casaca",
        category: "deportiva"
    },
    {
        id: 16,
        name: "Pantalón Formal Beige",
        price: 69.99,
        description: "Pantalón formal color beige para mujer",
        imageId: "img-pantalon",
        category: "formal"
    },
    {
        id: 17,
        name: "Collar Plateado",
        price: 39.99,
        description: "Collar plateado con diseño elegante",
        imageId: "img-collar",
        category: "accesorios"
    }
];



 
    function filterByCategory(category) {
      
        const filteredProducts = category === 'todos' 
            ? products 
            : products.filter(product => product.category === category);
        

        renderProducts(filteredProducts);
        

        updateSectionTitle(category);
        
   
        highlightSelectedCategory(category);
    }
    
    function updateSectionTitle(category) {
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            if (category === 'todos') {
                sectionTitle.textContent = 'Todos los Productos';
            } else {
                const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
                sectionTitle.textContent = `Categoría: ${capitalizedCategory}`;
            }
        }
    }
    
    function highlightSelectedCategory(selectedCategory) {

        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        let selectedItem;
        if (selectedCategory === 'todos') {
            selectedItem = document.querySelector('.category-item[data-category="todos"]');
        } else {
            selectedItem = Array.from(document.querySelectorAll('.category-item'))
                .find(item => item.textContent.toLowerCase().includes(selectedCategory));
        }
        
        if (selectedItem) {
            selectedItem.classList.add('selected');
        }
    }
const cart = [];
function renderProducts(productsToRender) {
    const productsContainer = document.getElementById('products');
    
    // Si no hay productos, se muestra el mensaje
    if (!productsToRender || productsToRender.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products" style="width: 100%; text-align: center; padding: 2rem; grid-column: 1 / -1;">
                <p>No se encontraron productos.</p>
            </div>`;
        return;
    }
    
    
    productsContainer.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${document.getElementById(product.imageId).src}" 
                     alt="${product.name}">
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="showQuickView(${product.id}, event)">
                        Vista Rápida
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Añadir al Carrito
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    updateCartItems();
}

function updateCartCount() {
    document.querySelector('.cart-count').textContent = cart.length;
}

function updateCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = cart.map(item => `
        <div style="margin-bottom: 1rem;">
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

function toggleCart() {
    document.getElementById('cartModal').classList.toggle('active');
}

renderProducts();

// Funcionalidad del Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Se cambia el slide cada 5 segundos
setInterval(nextSlide, 5000);

function showQuickView(productId, event) {
    event.preventDefault();
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('quickViewModal');
    
    document.getElementById('modalImage').src = document.getElementById(product.imageId).src;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `$${product.price}`;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalAddToCart').onclick = () => {
        addToCart(product.id);
        closeModal();
    };

    modal.style.display = 'block';
}
function closeModal() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function renderProducts(productsToRender = products) {
    const productsContainer = document.getElementById('products');
    
    if (!productsToRender || productsToRender.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products" style="width: 100%; text-align: center; padding: 2rem; grid-column: 1 / -1;">
                <p>No se encontraron productos.</p>
            </div>`;
        return;
    }
    
    productsContainer.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${document.getElementById(product.imageId).src}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="showQuickView(${product.id}, event)">
                        Vista Rápida
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Añadir al Carrito
                </button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.querySelector('.search-input');

    if (searchForm && searchInput) {
     
        searchInput.addEventListener('input', debounce(function(e) {
            searchProducts(e.target.value);
        }, 300));

        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            searchProducts(searchInput.value);
        });
    }
});
    
    const cartCloseButton = document.querySelector('.cart-close');
    if (cartCloseButton) {
        cartCloseButton.addEventListener('click', function() {
            document.getElementById('cartModal').classList.remove('active');
        });
    }

function filterByPrice(range) {
    const [min, max] = range.split('-').map(Number);
    return products.filter(product => {
        if (max) {
            return product.price >= min && product.price <= max;
        } else {
            return product.price >= min;
        }
    });
}

document.querySelectorAll('.price-range-option input').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const selectedRanges = [...document.querySelectorAll('.price-range-option input:checked')]
            .map(input => input.value);
        
        if (selectedRanges.length === 0) {
            renderProducts(products);
            return;
        }

        const filteredProducts = selectedRanges.flatMap(range => filterByPrice(range));
        renderProducts(filteredProducts);
    });
});
function removeFromCart(productId) {

    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    

    const updatedCart = cart.filter(item => item.id !== productId);

    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    
    updateCartCount();   
 
    renderCart();
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartItems.length;
    }
}

function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItemsContainer.innerHTML = '';
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartTotal.innerHTML = `Total: $0.00`;
        return;
    }
    
    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <div class="cart-item-content">
                <div class="cart-item-image">
                    <img src="${document.getElementById(item.imageId).src}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="item-name">${item.name}</h4>
                    <span class="item-price">$${item.price.toFixed(2)}</span>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <span class="remove-icon">×</span>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
    
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    cartItems.splice(index, 1);
    

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    
    updateCartCount();
    renderCart();
    
    showNotification('Producto eliminado del carrito');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }, 100);
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartItems.length;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();
});

function addToCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const product = products.find(p => p.id === productId);
    
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    
    updateCartIcon();
    renderCart();
}


function updateCartIcon() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartBadge = document.querySelector('.cart-count');
    
    if (cartItems.length > 0) {
        cartBadge.style.display = 'flex';
        cartBadge.textContent = cartItems.length;
    } else {
        cartBadge.style.display = 'none';
        cartBadge.textContent = '0';
    }
}

function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
   
    updateCartIcon();
    renderCart();
    
  
    showNotification('Producto eliminado del carrito');
}


function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItemsContainer.innerHTML = '';
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartTotal.innerHTML = 'Total: $0.00';
        return;
    }
    
    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <div class="cart-item-content">
                <div class="cart-item-image">
                    <img src="${document.getElementById(item.imageId).src}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="item-name">${item.name}</h4>
                    <span class="item-price">$${item.price.toFixed(2)}</span>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <span class="remove-icon">×</span>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
    
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
}

function showQuickView(productId, event) {
    event.preventDefault();
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('quickViewModal');
    
    document.getElementById('modalImage').src = document.getElementById(product.imageId).src;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `$${product.price}`;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalAddToCart').onclick = () => {
        addToCart(product.id);
        closeModal();
    };


    const closeButton = modal.querySelector('.close-modal');
    if (closeButton) {
        closeButton.onclick = closeModal;
    }

    modal.style.display = 'block';
}



document.querySelector('.close-modal').onclick = function() {
    document.getElementById('quickViewModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('quickViewModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
function searchProducts(searchTerm) {
    const productsContainer = document.getElementById('products');
    
    // Si el término de búsqueda está vacío, se van a mostrar todos los productos
    if (!searchTerm || searchTerm.trim() === '') {
        renderProducts(products);
        return;
    }

    searchTerm = searchTerm.trim().toLowerCase();
    
    const filteredProducts = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
        const categoryMatch = product.category.toLowerCase().includes(searchTerm);
        
    
        const categoryKeywords = {
            casual: ['informal', 'diario', 'básico', 'regular'],
            formal: ['elegante', 'vestir', 'trabajo', 'oficina'],
            deportiva: ['deporte', 'gimnasio', 'ejercicio', 'training'],
            accesorios: ['complementos', 'joyas', 'adornos', 'relojes']
        };

       
        const keywordMatch = categoryKeywords[product.category]?.some(keyword => 
            keyword.includes(searchTerm) || searchTerm.includes(keyword)
        );

        return nameMatch || descriptionMatch || categoryMatch || keywordMatch;
    });

   
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products" style="width: 100%; text-align: center; padding: 2rem; grid-column: 1 / -1;">
                <p>No se encontraron productos que coincidan con: "${searchTerm}"</p>
            </div>`;
        return;
    }
    renderProducts(filteredProducts);

    
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.textContent = `Resultados para: "${searchTerm}"`;
    }
}
    
   
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.textContent = `Resultados para: "${searchTerm}"`;
}
    
// Event listener para el buscador
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    if (!searchForm || !searchInput) {
        console.error('Elementos de búsqueda no encontrados');
        return;
    }

  
    searchInput.addEventListener('input', debounce(function(e) {
        searchProducts(e.target.value);
    }, 300));

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        searchProducts(searchInput.value);
    });

    renderProducts(products);
});
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.getElementById('logoLink');
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        location.reload();
    });
});