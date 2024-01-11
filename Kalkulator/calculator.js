let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(number) {
  calculation += number;
  displayCalculation();
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-show-calculation')
    .innerHTML = calculation;
}

function equaliseCalculation() {
  eval(calculation);
  calculation = eval(calculation);
  displayCalculation();
  saveCalculation();
}