console.log('Работа с API подключена');

// Задача 1. Объекты и JSON
const student = {
    name: 'Илья и Стасон',
    group: 'ИС-1-25',
    age: 18,
    city: 'Чебоксары', 
    subjects: ['HTML', 'CSS', 'JavaScript', 'PHP'] 
};

console.log(student);
console.log(student.name);
console.log(student.subjects);

const jsonText = JSON.stringify(student);
console.log('JSON:', jsonText);

const restoredStudent = JSON.parse(jsonText);
console.log('После преобразования:', restoredStudent);


const jsonResult = document.querySelector('#json-result');
jsonResult.textContent = `Студент: ${restoredStudent.name}, группа: ${restoredStudent.group}, город: ${restoredStudent.city}, количество предметов: ${restoredStudent.subjects.length}`;


// ЗАДАЧА 2


const loadPostBtn = document.querySelector('#load-post');
const postResult = document.querySelector('#post-result');

loadPostBtn.addEventListener('click', function () {
    postResult.textContent = 'Загрузка...';

    fetch('data/post.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            postResult.textContent = `Заголовок записи ${data.title}`;
            console.log(data);
        })
        .catch(error => {
            postResult.textContent = 'Ошибка загрузки данных';

            console.error(error);
        });
});

// Задача 3. Список пользователей
const loadUsersBtn = document.querySelector('#load-users');
const usersResult = document.querySelector('#users-result');

loadUsersBtn.addEventListener('click', function () {
    usersResult.textContent = 'Загрузка пользователей...';
    usersResult.className = '';

    fetch('data/users.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(users => {
            // Очищаем контейнер (карточки не дублируются при повторном нажатии)
            usersResult.textContent = '';

            // Выводим количество пользователей над списком
            const count = document.createElement('p');
            count.textContent = `Всего пользователей: ${users.length}`;
            usersResult.prepend(count);

            for (const user of users) {
                const card = document.createElement('div');
                card.className = 'card';

                const title = document.createElement('h3');
                title.textContent = user.name;
                title.style.color = '#1a73e8'; // Меняем цвет заголовка карточки

                const email = document.createElement('p');
                email.textContent = `Email: ${user.email}`;

                const phone = document.createElement('p');
                phone.textContent = `Телефон: ${user.phone}`;

                const city = document.createElement('p');
                city.textContent = `Город: ${user.address.city}`;

                card.append(title, email, phone, city);
                usersResult.append(card);
            }
        })
        .catch(error => {
            usersResult.textContent = 'Не удалось загрузить пользователей';
            usersResult.className = 'error';
            console.error(error);
        });
});

// Задача 4. Каталог товаров
const loadProductsBtn = document.querySelector('#load-products');
const productsResult = document.querySelector('#products-result');

loadProductsBtn.addEventListener('click', function () {
    productsResult.textContent = 'Загрузка товаров...';
    productsResult.className = '';

    fetch('data/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            productsResult.textContent = '';

            for (const product of data.products) {
                const card = document.createElement('div');
                card.className = 'card';
                // Меняем оформление карточек товаров
                card.style.borderLeft = '5px solid #28a745';
                card.style.backgroundColor = '#ffffff';

                const title = document.createElement('h3');
                title.textContent = product.title;

                const category = document.createElement('p');
                category.textContent = `Категория: ${product.category}`;

                const description = document.createElement('p');
                description.textContent = product.description;

                const rating = document.createElement('p');
                rating.textContent = `Рейтинг: ${product.rating} ⭐`;

                const price = document.createElement('p');
                price.textContent = `Цена: $${product.price}`;

                const image = document.createElement('img');
                image.src = product.thumbnail;
                image.alt = product.title;
                image.width = 150;

                card.append(image, title, category, description, rating, price);
                productsResult.append(card);
            }
        })
        .catch(error => {
            productsResult.textContent = 'Не удалось загрузить каталог';
            productsResult.className = 'error';
            console.error(error);
        });
});