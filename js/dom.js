console.log('DOM подключени');

// Задача 1. Изменение текста
const mainTitle = document.querySelector('#main-title');
mainTitle.textContent =  'Моя первая работа с DOM';

const message = document.querySelector('#message');
message.textContent = 'Теперь я умею менять содержимое страницы';

mainTitle.textContent =  'Практическая работа - Игнатьев Илья';

message.textContent = 'ИС-1-25';

console.log(mainTitle.textContent);

// Задача 2. Электронная визитка
const studentName = 'Игнатьев Илья';
const studentGroup = 'ИС-1-25';
const studentAge = 18;
const lang = 'C++';

names = document.querySelectorAll('#student-name');
groups = document.querySelectorAll('#student-group');
document.querySelector('#student-age').textContent = `Возраст: ${studentAge}`;
document.querySelector('#student-lang').textContent = `Любимый язык программирования: ${lang}`;

for (const item of names) {
    item.textContent = `Студент: ${studentName}`;
}
for (const item of groups) {
    item.textContent = `Группа: ${studentGroup}`;
}
// Задача 3. Изменение стилей
const productCard = document.querySelector('#product-card');

productCard.style.backgroundColor = '#afd5ee' 
productCard.style.padding = '20px' 
productCard.style.border = '2px solid blue' 
productCard.style.borderRadius = '10px' 
productCard.style.color = 'blue' 
productCard.style.width = '300px' 

const productPrice = document.querySelector('#product-price');

productPrice.style.color = 'green';
productPrice.style.fontWeight = 'bold';
productPrice.style.fontSize = '24px';

// Задача 4. Работа со списком
const items =  document.querySelectorAll('#subjects li');

console.log('Количество предметов:', items.length);

for (const item of items) {
    item.style.color = 'darkblue';
    item.style.fontSize = '20px';
}
items[items.length-1].style.fontWeight = 'bold'
items[0].textContent = 'Веб-разработка'

// Задача 5. Управление классами

const statusText = document.querySelector('#status');

statusText.classList.add('success');
statusText.textContent = 'Статус: выполнено';

const infoCard = document.querySelector('#info-card');

infoCard.style.backgroundColor = '#afd5ee' 
infoCard.style.padding = '20px' 
infoCard.style.border = '2px solid blue' 
infoCard.style.borderRadius = '10px'  
infoCard.style.width = '300px' 
infoCard.style.fontWeight = 'bold' 

document.querySelector('#student-themes').textContent = 'Количество изученных тем JS: Много'
document.querySelector('#student-final').textContent = 'Практическая работа завершена'