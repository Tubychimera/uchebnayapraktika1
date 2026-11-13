const container = document.querySelector("#container");

const newParagraph = document.createElement("p");
const new1Paragraph = document.createElement("p");
const heading = document.createElement("h3");

newParagraph.textContent = "Этот абзац создан с помощью JavaScript";
container.append(newParagraph);

new1Paragraph.textContent = "Игнатьев Илья ИС-1-25";
container.append(new1Paragraph);

heading.textContent = "мои навыки";
heading.style.color = "blue";
container.append(heading);

//задача 2

const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Введите название задачи");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText + " ";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Выполнено";
  doneBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
    li.style.color = 'green'
  });
  li.append(doneBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.append(deleteBtn);
  taskList.append(li);



  taskInput.value = "";
});

// Задача 3. Аккордеон

const questions = document.querySelectorAll('.question');

for (const question of questions) {

    question.addEventListener('click', function () {

        const answer = question.nextElementSibling;
        answer.style.backgroundColor = 'green'

        answer.classList.toggle('open');
        

    });

}
 
// Задача 4. Слайдер
const images = [
    'https://avatars.mds.yandex.net/i?id=723b377c03eb0e20ca7b9183dcdfeb8a_sr-4443740-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=00757a11669be8ee966dab72b516d414_l-12208630-images-thumbs&n=13',
    'https://sun9-66.vkuserphoto.ru/s/v1/ig2/QyUMIzXoyzn7PAwy1W3OZbWGhCb9_Mn7xFiMdLbruuRQ5-_4pxQw2S_tEolMkaic-xFrIupzQsV45ZuHyFwiXIRN.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960&from=bu&u=cs_6mXfNL0apVnidqaDhuwy-VuUQ0w7-BXTz6UmIJ3o&cs=1280x0'
    
  ];
  
  let currentSlide = 0;
  
  const sliderImage = document.querySelector('#slider-image');
  
  const slideNumber = document.querySelector('#slide-number');
  
  const nextBtn = document.querySelector('#next-slide');
  const prevBtn = document.querySelector('#prev-slide');
  
  function showSlide() {
    sliderImage.src = images[currentSlide];
  
    slideNumber.textContent =
      `Изображение ${currentSlide + 1} из ${images.length}`;
  }
  
  nextBtn.addEventListener('click', function () {
    currentSlide++;
  
    if (currentSlide >= images.length) {
      currentSlide = 0;
    }
  
    showSlide();
  });
  
  prevBtn.addEventListener('click', function () {
    currentSlide--;
  
    if (currentSlide < 0) {
      currentSlide = images.length - 1;
    }
  
    showSlide();
  });
  
  showSlide();
  


