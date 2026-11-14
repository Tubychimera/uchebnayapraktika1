console.log('jQuery подключена'); 
console.log('Версия:', $.fn.jquery); 

// Задача 1

$('#change-btn').click(function (){

    $('#message').text('Я изучаю jQuery');
    $('#message').css('color', 'green');
    $('#message').css('font-size', '24px');

})

// Задача 2

$('#hide-btn').click(function() {
    $('#info-box').hide();
})
$('#show-btn').click(function() {
    $('#info-box').show();
})

$('#switch-btn').click(function() {
    $('#info-box').toggle();
})

// Задача 3

$('#hello-btn').click(function() {
    const name = $('#name-input').val().trim();

    if (name === '') {
        $('#hello-result').text('Введите имя');
        $('#hello-result').css('color', 'red')
    } else if (name.length <=  2){
        $('#hello-result').text('Имя слишком короткое');
        $('#hello-result').css('color', 'red')
    } else {
        $('#hello-result').text('Привет, ' + name + '!');
        $('#hello-result').css('color', 'red')
    }
});

// Задача 4

$('#load-btn').click(function() {
    $('#users').text('Загрузка');

    $.ajax({
        url: 'data/users.json',
        method: 'GET',

        success: function(users) {
            $('#users').empty();
            $('<p>').text(`Количество юзеров: ${users.length}`).appendTo("#users");
            for  (const user of users){
                const card = $('<div>').addClass('card');

                $('<h3>').text(user.name).appendTo(card);
                $('<p>').text(user.email).appendTo(card);
                $('<p>').text(user.phone).appendTo(card);
                $('<p>').text(user.address.city).appendTo(card);
                $('#users').append(card);
                $('.card').css('background-color', 'lightblue')
                $('.card').css('border-radius', '8px')
            }
            
        },

        error : function () {
            $('#users').text('Ошибка загрузки')
        }
    })
})

$('#toggleC-btn').click(function(){
    $('#course-box').toggle();
})