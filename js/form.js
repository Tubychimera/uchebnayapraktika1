console.log('Проверка формы подключена');


// ЗАДАЧА 1. 
// ЗАДАЧА 2. 


const form = document.querySelector('#registration-form');
const nameInput = document.querySelector('#student-name');
const emailInput = document.querySelector('#student-email');
const passwordInput = document.querySelector('#student-password');
const result = document.querySelector('#result');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
// Задача 1. Проверка имени
if (name === '') {
    result.textContent = 'Введите имя';
    result.className = 'error';
    return;
}

if (name.length < 2) {
    result.textContent = 'Имя слишком короткое';
    result.className = 'error';
    return;
}

if (name.length > 30) {
    result.textContent = 'Имя слишком длинное';
    result.className = 'error';
    return;
}

if (email === '') {
    result.textContent = 'Введите email';
    result.className = 'error';
    return;
}

// Задача 2. Проверка email
if (!email.includes('@') || !email.includes('.')) {
    result.textContent = 'Неверный email';
    result.className = 'error';
    return;
}


if (password.trim() === '') {
    result.textContent = 'Пароль не может состоять только из пробелов';
    result.className = 'error';
    return;
}

if (password.length < 6) {
    result.textContent = 'Пароль слишком короткий';
    result.className = 'error';
    return;
}


result.textContent = `Данные проверены. Пользователь: ${name}, Email: ${email}`;
result.className = 'success';
});


// ЗАДАЧА 3. 


const saveBtn = document.querySelector('#save-name');
const showBtn = document.querySelector('#show-name');
const deleteBtn = document.querySelector('#delete-name');
const savedResult = document.querySelector('#saved-result');

// Сохранить имя
saveBtn.addEventListener('click', function () {
    const name = nameInput.value.trim();

    if (name === '') {
        savedResult.textContent = 'Сначала введите имя';
        return;
    }

    localStorage.setItem('studentName', name);
    savedResult.textContent = 'Имя сохранено';
});

// Показать имя
showBtn.addEventListener('click', function () {
    const name = localStorage.getItem('studentName');

    if (name === null) {
        savedResult.textContent = 'Имя не сохранено';
    } else {
        savedResult.textContent = 'Ваше имя: ' + name;
    }
});

// Удалить имя
deleteBtn.addEventListener('click', function () {
    localStorage.removeItem('studentName');
    savedResult.textContent = 'Имя удалено';
});
const groupInput = document.querySelector('#student-group');
const saveGroupBtn = document.querySelector('#save-group');
const showGroupBtn = document.querySelector('#show-group');
const deletegroupBtn = document.querySelector('#delete-group');

saveGroupBtn.addEventListener('click', function () {
    const group = groupInput.value.trim();

    if (group === '') {
        savedResult.textContent = 'Сначала введите название группы';
        return;
    }

    localStorage.setItem('studentGroup', group);
    savedResult.textContent = 'Группа сохранена';
});

showGroupBtn.addEventListener('click', function () {
    const group = localStorage.getItem('studentGroup');

    if (group === null) {
        savedResult.textContent = 'Группа не сохранена';
    } else {
        savedResult.textContent = 'Ваша группа: ' + group;
    }
});

deletegroupBtn.addEventListener('click', function () {
    localStorage.removeItem('studentGroup');
    savedResult.textContent = 'группа удалена';
});
   




// ЗАДАЧА 4.

const themeBtn = document.querySelector('#theme-btn');
const themeStatus = document.querySelector('#theme-status');

const theme = localStorage.getItem('theme');

if (theme === 'dark') {
    document.body.classList.add('dark');
    themeStatus.textContent = 'Тёмная тема включена';
} else {
    themeStatus.textContent = 'Светлая тема включена';
}

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeStatus.textContent = 'Тёмная тема включена';
    } else {
        localStorage.setItem('theme', 'light');
        themeStatus.textContent = 'Светлая тема включена';
    }
});

// ШАГ 6.

const langInput = document.querySelector('#fav-lang');
const saveLangBtn = document.querySelector('#save-lang');
const loadLangBtn = document.querySelector('#load-lang');
const clearLangBtn = document.querySelector('#clear-lang');
const langResult = document.querySelector('#lang-result');

saveLangBtn.addEventListener('click', function () {
    const lang = langInput.value.trim();

    if (lang === '') {
        langResult.textContent = 'Ошибка: введите язык программирования';
        langResult.className = 'error';
        return;
    }

    localStorage.setItem('favoriteLanguage', lang);
    langResult.textContent = 'Язык программирования сохранён';
    langResult.className = 'success';
});

loadLangBtn.addEventListener('click', function () {
    const savedLang = localStorage.getItem('favoriteLanguage');

    if (savedLang === null) {
        langResult.textContent = 'Сохранённых данных нет';
        langResult.className = 'error';
    } else {
        langInput.value = savedLang;
        langResult.textContent = 'Загружен язык: ' + savedLang;
        langResult.className = 'success';
    }
});

clearLangBtn.addEventListener('click', function () {
    localStorage.removeItem('favoriteLanguage');
    langInput.value = '';
    langResult.textContent = 'Настройки очищены';
    langResult.className = '';
});