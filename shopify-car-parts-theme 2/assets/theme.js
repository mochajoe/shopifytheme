/**
 * Main Theme JavaScript
 * Car Parts Pro Theme
 */

// Utility functions
const debounce = (fn, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Cart functionality
class Cart {
  constructor() {
    this.init();
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    // Add to cart forms
    document.querySelectorAll('form[action="/cart/add"]').forEach(form => {
      form.addEventListener('submit', (e) => this.handleAddToCart(e));
    });
  }

  async handleAddToCart(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');

    // Disable button during submission
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Adding...';
    }

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      const data = await response.json();

      // Update cart count
      this.updateCartCount();

      // Show success message
      this.showNotification('Product added to cart!', 'success');

      // Re-enable button
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Add to Cart';
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      this.showNotification('Failed to add product to cart', 'error');

      // Re-enable button
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Add to Cart';
      }
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();

      const cartCountElement = document.getElementById('cart-count');
      if (cartCountElement) {
        cartCountElement.textContent = cart.item_count;
      }
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    // Add to page
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
      notification.classList.add('notification--visible');
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.remove('notification--visible');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
}

// Search functionality
class Search {
  constructor() {
    this.searchInput = document.querySelector('[data-search-input]');
    this.searchResults = document.querySelector('[data-search-results]');

    if (this.searchInput) {
      this.init();
    }
  }

  init() {
    this.searchInput.addEventListener('input', debounce((e) => {
      this.performSearch(e.target.value);
    }, 300));
  }

  async performSearch(query) {
    if (query.length < 2) {
      this.hideResults();
      return;
    }

    try {
      const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product`);
      const data = await response.json();

      this.displayResults(data.resources.results.products);
    } catch (error) {
      console.error('Search error:', error);
    }
  }

  displayResults(products) {
    if (!this.searchResults) return;

    if (products.length === 0) {
      this.searchResults.innerHTML = '<p>No products found</p>';
      this.showResults();
      return;
    }

    const html = products.map(product => `
      <a href="${product.url}" class="search-result">
        ${product.featured_image ? `<img src="${product.featured_image}" alt="${product.title}">` : ''}
        <div>
          <h4>${product.title}</h4>
          <p>${product.price}</p>
        </div>
      </a>
    `).join('');

    this.searchResults.innerHTML = html;
    this.showResults();
  }

  showResults() {
    if (this.searchResults) {
      this.searchResults.style.display = 'block';
    }
  }

  hideResults() {
    if (this.searchResults) {
      this.searchResults.style.display = 'none';
    }
  }
}

// Mobile menu
class MobileMenu {
  constructor() {
    this.menuToggle = document.querySelector('[data-menu-toggle]');
    this.mobileMenu = document.querySelector('[data-mobile-menu]');

    if (this.menuToggle && this.mobileMenu) {
      this.init();
    }
  }

  init() {
    this.menuToggle.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  }
}

// Product variant selector
class VariantSelector {
  constructor() {
    this.forms = document.querySelectorAll('.product-form');
    if (this.forms.length > 0) {
      this.init();
    }
  }

  init() {
    this.forms.forEach(form => {
      const selects = form.querySelectorAll('select[name^="options"]');
      selects.forEach(select => {
        select.addEventListener('change', () => this.handleVariantChange(form));
      });
    });
  }

  handleVariantChange(form) {
    const selectedOptions = Array.from(form.querySelectorAll('select[name^="options"]'))
      .map(select => select.value);

    // Here you would find the matching variant based on selected options
    // and update the price, availability, etc.
    console.log('Selected options:', selectedOptions);
  }
}

// Scroll to top button
class ScrollToTop {
  constructor() {
    this.button = document.querySelector('[data-scroll-top]');

    if (!this.button) {
      this.createButton();
    }

    this.init();
  }

  createButton() {
    this.button = document.createElement('button');
    this.button.className = 'scroll-to-top';
    this.button.setAttribute('aria-label', 'Scroll to top');
    this.button.innerHTML = '↑';
    document.body.appendChild(this.button);
  }

  init() {
    if (!this.button) return;

    window.addEventListener('scroll', debounce(() => {
      if (window.scrollY > 300) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    }, 100));

    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Initialize all components when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

function initTheme() {
  new Cart();
  new Search();
  new MobileMenu();
  new VariantSelector();
  new ScrollToTop();

  // Add loaded class to body
  document.body.classList.add('theme-loaded');
}

// Global notification styles (inject into page)
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateX(400px);
    transition: transform 0.3s ease;
    z-index: 10000;
  }

  .notification--visible {
    transform: translateX(0);
  }

  .notification--success {
    border-left: 4px solid #10b981;
  }

  .notification--error {
    border-left: 4px solid #ef4444;
  }

  .notification--info {
    border-left: 4px solid #3b82f6;
  }

  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--color-primary, #1a73e8);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
  }

  .scroll-to-top:hover {
    background: var(--color-primary-dark, #1557b0);
    transform: translateY(-4px);
  }
`;
document.head.appendChild(notificationStyles);
