console.log('Обработчики событий подключены');

const helloBtn = document.querySelector('#hello-btn');
const helloResult = document.querySelector('#hello-result');

helloBtn.addEventListener('click', function () {
    
    helloResult.textContent = 'Привет, студент!';
    
    helloResult.style.color = 'green';
    
    helloBtn.textContent = 'Уже нажато';
  });

let count = 0;

const counter = document.querySelector('#counter');
const plusBtn = document.querySelector('#plus-btn');
const plusSorokdvaBtn = document.querySelector('#plus-sorokdva-btn'); 
const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');

plusBtn.addEventListener('click', function () {
  count = count + 1;
  counter.textContent = count;
});

plusSorokdvaBtn.addEventListener('click', function () {
    count = count + 5;
    counter.textContent = count;
  });

minusBtn.addEventListener('click', function () {
  count = count - 1;
  counter.textContent = count;
});

resetBtn.addEventListener('click', function () {
    count = 0;
    counter.textContent = count;
  
});

const nameInput = document.querySelector('#name-input');
const nameResult = document.querySelector('#name-result');

nameInput.addEventListener('input', function () {
  const userName = nameInput.value.trim();

  if (userName === '') {
    nameResult.textContent = 'Введите ваше имя (символов: 0)';
  } else {
    nameResult.textContent = `Привет, ${userName}! Количество символов: ${userName.length}`;
  }
});

const colorBox = document.querySelector('#color-box');
const colorBtn = document.querySelector('#color-btn');

let isColored = false;

colorBtn.addEventListener('click', function () {
  if (isColored === false) {
    colorBox.style.backgroundColor = 'lightgreen';
    colorBox.style.color = 'darkgreen';
    colorBox.textContent = 'Цвет включён';
    isColored = true;
  } else {
    colorBox.style.backgroundColor = 'white';
    colorBox.style.color = 'black';
    colorBox.textContent = 'Цвет выключен';
    isColored = false;
  }
});

const feedbackForm = document.querySelector('#feedback-form');
const feedbackName = document.querySelector('#feedback-name');
const feedbackNumber = document.querySelector('#feedback-number');
const formResult = document.querySelector('#form-result');

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = feedbackName.value.trim();
  const numberValue = feedbackNumber.value.trim();
  const number = Number(numberValue);

  if (userName === '') {
    formResult.textContent = 'Ошибка: введите имя';
    formResult.style.color = 'red';
  } else if (numberValue === '' || Number.isNaN(number) || number < 1 || number > 100) {
    formResult.textContent = 'Ошибка: некоректный возраст.';
    formResult.style.color = 'red';
  } else {
    formResult.textContent = `Спасибо, ${userName}! Вам ${number}.`;
    formResult.style.color = 'green';
  }
});


  
  