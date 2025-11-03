/**
 * Theme Constants
 * Global constants used throughout the theme
 */

window.theme = window.theme || {};

// Theme info
window.theme.info = {
  name: 'Car Parts Pro',
  version: '1.0.0'
};

// Breakpoints (must match CSS)
window.theme.breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1400
};

// Animation durations (in ms)
window.theme.durations = {
  fast: 200,
  medium: 300,
  slow: 500
};

// Default messages
window.theme.messages = {
  addToCart: 'Add to Cart',
  addingToCart: 'Adding...',
  addedToCart: 'Added to cart!',
  soldOut: 'Sold Out',
  unavailable: 'Unavailable',
  error: 'An error occurred. Please try again.'
};

// Vehicle search config
window.theme.vehicleSearch = {
  enableLocalStorage: true,
  storageKey: 'selectedVehicle',
  minSearchLength: 2,
  debounceDelay: 300
};

// Collection filters config
window.theme.collectionFilters = {
  updateURL: true,
  enablePriceFilter: true,
  enableBrandFilter: true,
  enableCategoryFilter: true,
  defaultSort: 'manual'
};

// Cart config
window.theme.cart = {
  enableAjax: true,
  showNotifications: true,
  notificationDuration: 3000
};

// Product categories
window.theme.categories = {
  engine: 'Engine Parts',
  brakes: 'Brakes',
  suspension: 'Suspension',
  exhaust: 'Exhaust',
  electrical: 'Electrical',
  body: 'Body Parts',
  interior: 'Interior',
  exterior: 'Exterior',
  performance: 'Performance',
  maintenance: 'Maintenance'
};

// Installation difficulty levels
window.theme.installationLevels = {
  easy: {
    label: 'Easy',
    description: 'Basic tools, minimal experience required',
    color: '#10b981'
  },
  moderate: {
    label: 'Moderate',
    description: 'Some mechanical experience recommended',
    color: '#f59e0b'
  },
  professional: {
    label: 'Professional',
    description: 'Professional installation recommended',
    color: '#ef4444'
  }
};

// Utility function to get current breakpoint
window.theme.getCurrentBreakpoint = function() {
  const width = window.innerWidth;
  if (width < this.breakpoints.mobile) return 'mobile';
  if (width < this.breakpoints.tablet) return 'tablet';
  if (width < this.breakpoints.desktop) return 'desktop';
  return 'wide';
};

// Utility function to check if mobile
window.theme.isMobile = function() {
  return window.innerWidth < this.breakpoints.tablet;
};

// Utility function to format price
window.theme.formatMoney = function(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  let value = '';
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  const formatString = format || '${{amount}}';

  function defaultTo(value, defaultValue) {
    return value == null || value !== value ? defaultValue : value;
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultTo(precision, 2);
    thousands = defaultTo(thousands, ',');
    decimal = defaultTo(decimal, '.');

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    const centsAmount = parts[1] ? decimal + parts[1] : '';

    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
};

// Debug mode
window.theme.debug = false;

window.theme.log = function(...args) {
  if (this.debug) {
    console.log('[Car Parts Pro]', ...args);
  }
};

// Initialize
window.theme.log('Theme constants loaded', window.theme.info);
