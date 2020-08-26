// Sidenav
const sidenav = document.querySelectorAll('.sidenav');
const sidenavInit = M.Sidenav.init(sidenav, {});

// Slider
const slider = document.querySelectorAll('.slider');
const sliderInit = M.Slider.init(slider, { 
  indicators: false 
});

// Datepicker
const datepicker = document.querySelectorAll('.datepicker');
const datepickerInit = M.Datepicker.init(datepicker, {});

// AOS
AOS.init();


