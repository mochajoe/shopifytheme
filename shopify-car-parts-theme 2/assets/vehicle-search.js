/**
 * Vehicle Fitment Search
 * Handles Year/Make/Model/Engine selection for finding compatible car parts
 */

class VehicleSearch {
  constructor() {
    this.form = document.querySelector('[data-vehicle-form]');
    if (!this.form) return;

    this.yearSelect = this.form.querySelector('[data-vehicle-year]');
    this.makeSelect = this.form.querySelector('[data-vehicle-make]');
    this.modelSelect = this.form.querySelector('[data-vehicle-model]');
    this.engineSelect = this.form.querySelector('[data-vehicle-engine]');
    this.searchButton = this.form.querySelector('[data-search-button]');
    this.resetButton = this.form.querySelector('[data-reset-button]');
    this.savedVehicleDiv = document.querySelector('[data-saved-vehicle]');
    this.savedVehicleText = document.querySelector('[data-saved-vehicle-text]');
    this.changeVehicleBtn = document.querySelector('[data-change-vehicle]');
    this.loadingDiv = document.querySelector('[data-loading]');
    this.errorDiv = document.querySelector('[data-error]');

    // Vehicle data - In production, this should come from your backend/API
    this.vehicleData = this.loadVehicleData();

    this.init();
  }

  init() {
    this.populateYears();
    this.attachEventListeners();
    this.loadSavedVehicle();
  }

  attachEventListeners() {
    this.yearSelect.addEventListener('change', () => this.handleYearChange());
    this.makeSelect.addEventListener('change', () => this.handleMakeChange());
    this.modelSelect.addEventListener('change', () => this.handleModelChange());
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.resetButton.addEventListener('click', () => this.resetForm());

    if (this.changeVehicleBtn) {
      this.changeVehicleBtn.addEventListener('click', () => this.clearSavedVehicle());
    }
  }

  /**
   * Load vehicle data - In production, replace with API calls
   * This is example data structure
   */
  loadVehicleData() {
    // Your actual vehicle data based on your inventory
    return {
      years: ['2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989'],
      makes: {
        '2002': ['Nissan', 'Honda', 'Acura'],
        '2001': ['Nissan', 'Honda', 'Acura'],
        '2000': ['Nissan', 'Honda', 'Acura'],
        '1999': ['Nissan', 'Honda', 'Acura'],
        '1998': ['Nissan', 'Honda', 'Acura'],
        '1997': ['Nissan', 'Honda', 'Acura'],
        '1996': ['Nissan', 'Honda', 'Acura'],
        '1995': ['Nissan', 'Honda', 'Acura'],
        '1994': ['Nissan', 'Honda', 'Acura'],
        '1993': ['Nissan', 'Honda', 'Acura'],
        '1992': ['Nissan', 'Honda', 'Acura'],
        '1991': ['Nissan', 'Honda', 'Acura'],
        '1990': ['Nissan', 'Honda', 'Acura'],
        '1989': ['Nissan', 'Honda', 'Acura']
      },
      models: {
        'Nissan': ['Skyline R32 GTR', 'Skyline R32 GTS-t', 'Skyline R32 GTS25', 'Skyline R32 GTS4', 'Skyline R32 GTE', 'Skyline R33 GTR', 'Skyline R33 GTS-t', 'Skyline R33 GTS25', 'Skyline R33 GTS4', 'Skyline R34 GTR', 'Skyline R34 GT-t', 'Skyline R34 25GT', '240SX', '300ZX', 'Cefiro'],
        'Honda': ['Civic Type R', 'Civic Si', 'Civic EX', 'Del Sol VTEC', 'Integra Type R', 'Integra GSR', 'Integra LS'],
        'Acura': ['Integra Type R', 'Integra GSR', 'Integra LS', 'Integra GS-R']
      },
      engines: {
        'Skyline R32 GTR': ['RB26DETT'],
        'Skyline R32 GTS-t': ['RB20DET'],
        'Skyline R32 GTS25': ['RB25DE'],
        'Skyline R32 GTS4': ['RB20DET'],
        'Skyline R32 GTE': ['RB20E'],
        'Skyline R33 GTR': ['RB26DETT'],
        'Skyline R33 GTS-t': ['RB25DET'],
        'Skyline R33 GTS25': ['RB25DE'],
        'Skyline R33 GTS4': ['RB25DET'],
        'Skyline R34 GTR': ['RB26DETT'],
        'Skyline R34 GT-t': ['RB25DET NEO'],
        'Skyline R34 25GT': ['RB25DET NEO', 'RB25DE NEO'],
        'Civic Type R': ['B16B'],
        'Civic Si': ['B16A2'],
        'Civic EX': ['B16A'],
        'Del Sol VTEC': ['B16A3'],
        'Integra Type R': ['B18C5'],
        'Integra GSR': ['B18C1'],
        'Integra LS': ['B18B1']
      }
    };
  }

  populateYears() {
    this.vehicleData.years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      this.yearSelect.appendChild(option);
    });
  }

  handleYearChange() {
    const year = this.yearSelect.value;

    if (!year) {
      this.resetMakeSelect();
      return;
    }

    const makes = this.vehicleData.makes[year] || [];
    this.populateSelect(this.makeSelect, makes);
    this.makeSelect.disabled = false;
    this.resetModelSelect();
    this.resetEngineSelect();
    this.updateSearchButton();
  }

  handleMakeChange() {
    const make = this.makeSelect.value;

    if (!make) {
      this.resetModelSelect();
      return;
    }

    const models = this.vehicleData.models[make] || [];
    this.populateSelect(this.modelSelect, models);
    this.modelSelect.disabled = false;
    this.resetEngineSelect();
    this.updateSearchButton();
  }

  handleModelChange() {
    const model = this.modelSelect.value;

    if (!model) {
      this.resetEngineSelect();
      return;
    }

    const engines = this.vehicleData.engines[model] || [];
    if (engines.length > 0) {
      this.populateSelect(this.engineSelect, engines, false);
      this.engineSelect.disabled = false;
    }

    this.updateSearchButton();
  }

  populateSelect(selectElement, options, clearFirst = true) {
    if (clearFirst) {
      const firstOption = selectElement.querySelector('option');
      selectElement.innerHTML = '';
      selectElement.appendChild(firstOption);
    }

    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      selectElement.appendChild(optionElement);
    });
  }

  resetMakeSelect() {
    const firstOption = this.makeSelect.querySelector('option');
    this.makeSelect.innerHTML = '';
    this.makeSelect.appendChild(firstOption);
    this.makeSelect.disabled = true;
    this.resetModelSelect();
  }

  resetModelSelect() {
    const firstOption = this.modelSelect.querySelector('option');
    this.modelSelect.innerHTML = '';
    this.modelSelect.appendChild(firstOption);
    this.modelSelect.disabled = true;
    this.resetEngineSelect();
  }

  resetEngineSelect() {
    const firstOption = this.engineSelect.querySelector('option');
    this.engineSelect.innerHTML = '';
    this.engineSelect.appendChild(firstOption);
    this.engineSelect.disabled = true;
  }

  updateSearchButton() {
    const year = this.yearSelect.value;
    const make = this.makeSelect.value;
    const model = this.modelSelect.value;

    this.searchButton.disabled = !(year && make && model);

    if (year || make || model) {
      this.resetButton.style.display = 'inline-block';
    }
  }

  resetForm() {
    this.form.reset();
    this.resetMakeSelect();
    this.resetButton.style.display = 'none';
    this.searchButton.disabled = true;
  }

  handleSubmit(e) {
    e.preventDefault();

    const vehicle = {
      year: this.yearSelect.value,
      make: this.makeSelect.value,
      model: this.modelSelect.value,
      engine: this.engineSelect.value || null
    };

    // Save to localStorage
    this.saveVehicle(vehicle);

    // Redirect to collection page with filters
    const searchParams = new URLSearchParams({
      year: vehicle.year,
      make: vehicle.make,
      model: vehicle.model,
      ...(vehicle.engine && { engine: vehicle.engine })
    });

    window.location.href = `/collections/all?${searchParams.toString()}`;
  }

  saveVehicle(vehicle) {
    localStorage.setItem('selectedVehicle', JSON.stringify(vehicle));
    this.displaySavedVehicle(vehicle);
  }

  loadSavedVehicle() {
    const savedVehicle = localStorage.getItem('selectedVehicle');
    if (savedVehicle) {
      const vehicle = JSON.parse(savedVehicle);
      this.displaySavedVehicle(vehicle);
    }
  }

  displaySavedVehicle(vehicle) {
    const vehicleText = `${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.engine ? ' - ' + vehicle.engine : ''}`;
    this.savedVehicleText.textContent = vehicleText;
    this.savedVehicleDiv.style.display = 'block';
  }

  clearSavedVehicle() {
    localStorage.removeItem('selectedVehicle');
    this.savedVehicleDiv.style.display = 'none';
    this.resetForm();
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new VehicleSearch();
  });
} else {
  new VehicleSearch();
}

// Product filtering based on selected vehicle
class VehicleFilter {
  constructor() {
    this.init();
  }

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    const year = urlParams.get('year');
    const make = urlParams.get('make');
    const model = urlParams.get('model');

    if (year && make && model) {
      this.filterProducts(year, make, model);
    }
  }

  filterProducts(year, make, model) {
    // This would integrate with your collection filtering
    // Show compatibility badges on matching products
    document.querySelectorAll('[data-product-card]').forEach(card => {
      const compatibility = card.dataset.compatibility;
      if (compatibility) {
        const compat = JSON.parse(compatibility);
        const isCompatible = this.checkCompatibility(compat, year, make, model);

        if (isCompatible) {
          card.classList.add('compatible');
          this.addCompatibilityBadge(card);
        } else {
          card.style.opacity = '0.5';
        }
      }
    });
  }

  checkCompatibility(compatibility, year, make, model) {
    return compatibility.years?.includes(year) &&
           compatibility.makes?.includes(make) &&
           compatibility.models?.includes(model);
  }

  addCompatibilityBadge(card) {
    const badge = document.createElement('div');
    badge.className = 'compatibility-badge';
    badge.innerHTML = '✓ Fits Your Vehicle';
    card.querySelector('.product-card__info')?.prepend(badge);
  }
}

// Initialize vehicle filter
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new VehicleFilter();
  });
} else {
  new VehicleFilter();
}
