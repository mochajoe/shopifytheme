/**
 * Advanced Collection Filters
 * Handles filtering, sorting, and product display for car parts collections
 */

class CollectionFilters {
  constructor() {
    this.filtersContainer = document.querySelector('[data-collection-filters]');
    if (!this.filtersContainer) return;

    this.activeFilters = {
      price: { min: null, max: null },
      brands: [],
      carManufacturers: [],
      carModels: [],
      categories: [],
      installation: [],
      availability: [],
      vehicle: null
    };

    this.productCards = document.querySelectorAll('[data-product-card]');
    this.init();
  }

  init() {
    this.attachEventListeners();
    this.loadFiltersFromURL();
    this.checkSavedVehicle();
  }

  attachEventListeners() {
    // Toggle filter groups
    const toggleButtons = this.filtersContainer.querySelectorAll('[data-filter-toggle]');
    toggleButtons.forEach(button => {
      button.addEventListener('click', (e) => this.toggleFilterGroup(e.currentTarget));
    });

    // Price filter
    const applyPriceBtn = this.filtersContainer.querySelector('[data-apply-price]');
    if (applyPriceBtn) {
      applyPriceBtn.addEventListener('click', () => this.applyPriceFilter());
    }

    // Checkbox filters
    const checkboxes = this.filtersContainer.querySelectorAll('[data-filter-checkbox]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (e) => this.handleCheckboxChange(e));
    });

    // Dropdown filters
    const dropdowns = this.filtersContainer.querySelectorAll('[data-filter-dropdown]');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('change', (e) => this.handleDropdownChange(e));
    });

    // Clear all filters
    const clearBtn = this.filtersContainer.querySelector('[data-clear-filters]');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearAllFilters());
    }
  }

  handleDropdownChange(e) {
    const dropdown = e.target;
    const value = dropdown.value;

    // Determine filter type
    let filterType = 'carManufacturers';
    if (dropdown.hasAttribute('data-car-model-select')) filterType = 'carModels';
    if (dropdown.hasAttribute('data-car-manufacturer-select')) filterType = 'carManufacturers';

    // Clear the filter type first
    this.activeFilters[filterType] = [];

    // Add new value if not empty
    if (value) {
      this.activeFilters[filterType].push(value);
    }

    this.applyFilters();
    this.updateActiveFiltersDisplay();
  }

  toggleFilterGroup(button) {
    const filterGroup = button.closest('.filter-group');
    const content = filterGroup.querySelector('.filter-group__content');
    const isOpen = filterGroup.classList.contains('open');

    if (isOpen) {
      filterGroup.classList.remove('open');
      content.style.maxHeight = '0';
    } else {
      filterGroup.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }

  applyPriceFilter() {
    const minInput = this.filtersContainer.querySelector('[data-price-min]');
    const maxInput = this.filtersContainer.querySelector('[data-price-max]');

    this.activeFilters.price.min = minInput.value ? parseFloat(minInput.value) : null;
    this.activeFilters.price.max = maxInput.value ? parseFloat(maxInput.value) : null;

    this.applyFilters();
    this.updateActiveFiltersDisplay();
  }

  handleCheckboxChange(e) {
    const checkbox = e.target;
    const value = checkbox.value;
    const filterGroup = checkbox.closest('[data-filter-brand], [data-filter-model], [data-filter-category], [data-filter-installation]');

    if (!filterGroup) return;

    let filterType = 'brands';
    if (filterGroup.hasAttribute('data-filter-model')) filterType = 'models';
    if (filterGroup.hasAttribute('data-filter-category')) filterType = 'categories';
    if (filterGroup.hasAttribute('data-filter-installation')) filterType = 'installation';
    // Vendor filter uses the same 'brands' filter type
    if (checkbox.hasAttribute('data-vendor-filter')) filterType = 'brands';
    // Model filter
    if (checkbox.hasAttribute('data-model-filter')) filterType = 'models';

    if (checkbox.checked) {
      if (!this.activeFilters[filterType].includes(value)) {
        this.activeFilters[filterType].push(value);
      }
    } else {
      this.activeFilters[filterType] = this.activeFilters[filterType].filter(v => v !== value);
    }

    this.applyFilters();
    this.updateActiveFiltersDisplay();
  }

  applyFilters() {
    let visibleCount = 0;

    this.productCards.forEach(card => {
      const shouldShow = this.shouldShowProduct(card);

      if (shouldShow) {
        card.style.display = '';
        card.classList.remove('filtered-out');
        visibleCount++;
      } else {
        card.style.display = 'none';
        card.classList.add('filtered-out');
      }
    });

    this.updateResultsCount(visibleCount);
    this.updateURL();
  }

  shouldShowProduct(card) {
    // Price filter
    if (this.activeFilters.price.min || this.activeFilters.price.max) {
      const priceElement = card.querySelector('[data-product-price]');
      if (priceElement) {
        const price = parseFloat(priceElement.dataset.productPrice);

        if (this.activeFilters.price.min && price < this.activeFilters.price.min) {
          return false;
        }

        if (this.activeFilters.price.max && price > this.activeFilters.price.max) {
          return false;
        }
      }
    }

    // Brand filter (product brands like Brembo, KW, etc.)
    if (this.activeFilters.brands.length > 0) {
      const productBrand = card.dataset.productBrand;
      if (!productBrand || !this.activeFilters.brands.includes(productBrand)) {
        return false;
      }
    }

    // Car Manufacturer filter (car makes like BMW, Honda, etc.)
    if (this.activeFilters.carManufacturers.length > 0) {
      const carManufacturer = card.dataset.carManufacturer;
      if (!carManufacturer || !this.activeFilters.carManufacturers.includes(carManufacturer)) {
        return false;
      }
    }

    // Car Model filter (car models like M3, Civic, etc.)
    if (this.activeFilters.carModels.length > 0) {
      const carModel = card.dataset.carModel;
      if (!carModel || !this.activeFilters.carModels.includes(carModel)) {
        return false;
      }
    }

    // Category filter
    if (this.activeFilters.categories.length > 0) {
      const productCategories = card.dataset.productCategories?.split(',') || [];
      const hasMatchingCategory = this.activeFilters.categories.some(cat =>
        productCategories.includes(cat)
      );
      if (!hasMatchingCategory) {
        return false;
      }
    }

    // Installation difficulty filter
    if (this.activeFilters.installation.length > 0) {
      const installDifficulty = card.dataset.installDifficulty;
      if (!installDifficulty || !this.activeFilters.installation.includes(installDifficulty)) {
        return false;
      }
    }

    // Vehicle compatibility
    if (this.activeFilters.vehicle) {
      const compatibility = card.dataset.compatibility;
      if (compatibility) {
        try {
          const compat = JSON.parse(compatibility);
          const { year, make, model } = this.activeFilters.vehicle;

          const yearMatch = !compat.years || compat.years.includes(year);
          const makeMatch = !compat.makes || compat.makes.includes(make);
          const modelMatch = !compat.models || compat.models.includes(model);

          if (!yearMatch || !makeMatch || !modelMatch) {
            return false;
          }
        } catch (e) {
          console.error('Error parsing compatibility data:', e);
        }
      }
    }

    return true;
  }

  updateActiveFiltersDisplay() {
    const activeFiltersContainer = this.filtersContainer.querySelector('[data-active-filters]');
    const activeFiltersList = this.filtersContainer.querySelector('[data-active-filters-list]');
    const clearBtn = this.filtersContainer.querySelector('[data-clear-filters]');

    if (!activeFiltersList) return;

    activeFiltersList.innerHTML = '';
    let hasActiveFilters = false;

    // Price filter badge
    if (this.activeFilters.price.min || this.activeFilters.price.max) {
      const min = this.activeFilters.price.min || 0;
      const max = this.activeFilters.price.max || '∞';
      this.createFilterBadge(`Price: $${min} - $${max}`, () => {
        this.activeFilters.price = { min: null, max: null };
        this.filtersContainer.querySelector('[data-price-min]').value = '';
        this.filtersContainer.querySelector('[data-price-max]').value = '';
        this.applyFilters();
        this.updateActiveFiltersDisplay();
      });
      hasActiveFilters = true;
    }

    // Brand badges (product brands)
    this.activeFilters.brands.forEach(brand => {
      this.createFilterBadge(brand, () => this.removeFilter('brands', brand));
      hasActiveFilters = true;
    });

    // Car Manufacturer badges
    this.activeFilters.carManufacturers.forEach(manufacturer => {
      this.createFilterBadge(`Car: ${manufacturer}`, () => this.removeFilter('carManufacturers', manufacturer));
      hasActiveFilters = true;
    });

    // Car Model badges
    this.activeFilters.carModels.forEach(model => {
      this.createFilterBadge(`Model: ${model}`, () => this.removeFilter('carModels', model));
      hasActiveFilters = true;
    });

    // Category badges
    this.activeFilters.categories.forEach(category => {
      this.createFilterBadge(category, () => this.removeFilter('categories', category));
      hasActiveFilters = true;
    });

    // Installation badges
    this.activeFilters.installation.forEach(install => {
      this.createFilterBadge(`Install: ${install}`, () => this.removeFilter('installation', install));
      hasActiveFilters = true;
    });

    // Vehicle badge
    if (this.activeFilters.vehicle) {
      const { year, make, model } = this.activeFilters.vehicle;
      this.createFilterBadge(`${year} ${make} ${model}`, () => {
        this.activeFilters.vehicle = null;
        this.applyFilters();
        this.updateActiveFiltersDisplay();
      });
      hasActiveFilters = true;
    }

    // Show/hide active filters section
    if (hasActiveFilters) {
      activeFiltersContainer.style.display = 'block';
      clearBtn.style.display = 'inline-block';
    } else {
      activeFiltersContainer.style.display = 'none';
      clearBtn.style.display = 'none';
    }
  }

  createFilterBadge(text, removeCallback) {
    const activeFiltersList = this.filtersContainer.querySelector('[data-active-filters-list]');
    const badge = document.createElement('div');
    badge.className = 'filter-badge';
    badge.innerHTML = `
      <span>${text}</span>
      <button class="filter-badge__remove" aria-label="Remove filter">×</button>
    `;

    badge.querySelector('.filter-badge__remove').addEventListener('click', removeCallback);
    activeFiltersList.appendChild(badge);
  }

  removeFilter(type, value) {
    this.activeFilters[type] = this.activeFilters[type].filter(v => v !== value);

    // Uncheck the corresponding checkbox
    const checkbox = this.filtersContainer.querySelector(`[value="${value}"][data-filter-checkbox]`);
    if (checkbox) {
      checkbox.checked = false;
    }

    // Reset the corresponding dropdown
    if (type === 'carManufacturers') {
      const manufacturerDropdown = this.filtersContainer.querySelector('[data-car-manufacturer-select]');
      if (manufacturerDropdown && manufacturerDropdown.value === value) {
        manufacturerDropdown.value = '';
      }
    }
    if (type === 'carModels') {
      const modelDropdown = this.filtersContainer.querySelector('[data-car-model-select]');
      if (modelDropdown && modelDropdown.value === value) {
        modelDropdown.value = '';
      }
    }

    this.applyFilters();
    this.updateActiveFiltersDisplay();
  }

  clearAllFilters() {
    // Reset all filters
    this.activeFilters = {
      price: { min: null, max: null },
      brands: [],
      carManufacturers: [],
      carModels: [],
      categories: [],
      installation: [],
      availability: [],
      vehicle: null
    };

    // Clear all checkboxes
    this.filtersContainer.querySelectorAll('[data-filter-checkbox]').forEach(cb => {
      cb.checked = false;
    });

    // Clear all dropdowns
    this.filtersContainer.querySelectorAll('[data-filter-dropdown]').forEach(dropdown => {
      dropdown.value = '';
    });

    // Clear price inputs
    this.filtersContainer.querySelector('[data-price-min]').value = '';
    this.filtersContainer.querySelector('[data-price-max]').value = '';

    this.applyFilters();
    this.updateActiveFiltersDisplay();
  }

  updateResultsCount(count) {
    const resultsCount = document.querySelector('[data-results-count]');
    if (resultsCount) {
      resultsCount.textContent = `${count} ${count === 1 ? 'product' : 'products'}`;
    }
  }

  loadFiltersFromURL() {
    const urlParams = new URLSearchParams(window.location.search);

    // Load vehicle from URL
    const year = urlParams.get('year');
    const make = urlParams.get('make');
    const model = urlParams.get('model');

    if (year && make && model) {
      this.activeFilters.vehicle = { year, make, model };
    }

    this.applyFilters();
    this.updateActiveFiltersDisplay();
  }

  updateURL() {
    const params = new URLSearchParams();

    if (this.activeFilters.vehicle) {
      params.set('year', this.activeFilters.vehicle.year);
      params.set('make', this.activeFilters.vehicle.make);
      params.set('model', this.activeFilters.vehicle.model);
    }

    if (this.activeFilters.price.min) params.set('price_min', this.activeFilters.price.min);
    if (this.activeFilters.price.max) params.set('price_max', this.activeFilters.price.max);

    const newURL = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newURL);
  }

  checkSavedVehicle() {
    const savedVehicle = localStorage.getItem('selectedVehicle');
    const vehicleFilterText = document.getElementById('saved-vehicle-filter');

    if (savedVehicle && vehicleFilterText) {
      const vehicle = JSON.parse(savedVehicle);
      vehicleFilterText.textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CollectionFilters();
  });
} else {
  new CollectionFilters();
}
