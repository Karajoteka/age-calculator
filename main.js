const dayInput = document.querySelector('#day-input');
const monthInput = document.querySelector('#month-input');
const yearInput = document.querySelector('#year-input');

const dayErrorMessage = document.querySelector('#day-error-message');
const invalidDayMessage = document.querySelector('#invalid-day-message')
const monthErrorMessage = document.querySelector('#month-error-message');
const invalidMonthMessage = document.querySelector('#invalid-month-message');
const yearErrorMessage = document.querySelector('#year-error-message');
const invalidYearMessage = document.querySelector('#invalid-year-message');

const dayLabel = document.querySelector('#day-label');
const monthLabel = document.querySelector('#month-label');
const yearLabel = document.querySelector('#year-label');

const yearsResult = document.querySelector('#years');
const monthsResult = document.querySelector('#months');
const daysResult = document.querySelector('#days');

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', submitForm);

function submitForm(event) {
  event.preventDefault(event);

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  if (day === '') {
    displayDayEmptyError(dayInput);
  } else if (day < 1 || day > 31 || (month === '2' && day > 29) || ((month === '4' || month === '6' || month === '9' || month === '11') && day > 30)) {
    displayInvalidDayError(dayInput);
  } else {
    hideDayError(dayInput);
  }

  if (month === '') {
    displayMonthEmptyError(monthInput);
  } else if (month < 1 || month > '12') {
    displayInvalidMonthError(monthInput);
  } else {
    hideMonthEmptyError(monthInput);
  }

  if (year === '') {
    displayYearEmptyError(yearInput);
  } else if (year >= new Date().getFullYear()) {
    displayInvalidYearError(yearInput);
  } else {
    hideYearEmptyError(yearInput);

    const userDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    const diffTime = Math.abs(currentDate - userDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays / 365) / 30);
    const days = diffDays % 30;

    yearsResult.textContent = years;
    monthsResult.textContent = months;
    daysResult.textContent = days;
  }
}

// Display empty error
function displayDayEmptyError(input) {
  dayErrorMessage.classList.remove('inactive');
  dayLabel.style.color = 'hsl(0, 100%, 67%)';
  input.style.border = '2px solid hsl(0, 100%, 67%)';

  invalidDayMessage.classList.add('inactive');
}

function displayMonthEmptyError(input) {
  monthErrorMessage.classList.remove('inactive');
  monthLabel.style.color = 'hsl(0, 100%, 67%)';
  input.style.border = '2px solid hsl(0, 100%, 67%)';

  invalidMonthMessage.classList.add('inactive');
}

function displayYearEmptyError(input) {
  yearErrorMessage.classList.remove('inactive');
  yearLabel.style.color = 'hsl(0, 100%, 67%)';
  input.style.border = '2px solid hsl(0, 100%, 67%)';

  invalidYearMessage.classList.add('inactive');
}

// Display invalid error
function displayInvalidDayError(input) {
  invalidDayMessage.classList.remove('inactive');
  dayLabel.style.color = 'hsl(0, 100%, 67%)';
  input.style.border = '2px solid hsl(0, 100%, 67%)';

  if (!dayErrorMessage.classList.contains('inactive')) {
    dayErrorMessage.classList.add('inactive');
  }
}

function displayInvalidMonthError(input) {
  invalidMonthMessage.classList.remove('inactive');
  monthLabel.style.color = 'hsl(0, 100%, 67%)';
  input.style.border = '2px solid hsl(0, 100%, 67%)';

  if (!monthErrorMessage.classList.contains('inactive')) {
    monthErrorMessage.classList.add('inactive');
  }
}

function displayInvalidYearError(input) {
  invalidYearMessage.classList.remove('inactive');
  yearLabel.style.color = 'hsl(0, 100%, 67%)';
  input.style.border = '2px solid hsl(0, 100%, 67%)';

  if (!yearErrorMessage.classList.contains('inactive')) {
    yearErrorMessage.classList.add('inactive');
  }
}

// Hide error
function hideDayError(input) {
  dayErrorMessage.classList.add('inactive');
  invalidDayMessage.classList.add('inactive');
  dayLabel.style.color = '';
  input.style.border = '';
}

function hideMonthEmptyError(input) {
  monthErrorMessage.classList.add('inactive');
  invalidMonthMessage.classList.add('inactive');
  monthLabel.style.color = '';
  input.style.border = '';
}

function hideYearEmptyError(input) {
  yearErrorMessage.classList.add('inactive');
  invalidYearMessage.classList.add('inactive');
  yearLabel.style.color = '';
  input.style.border = '';
}

