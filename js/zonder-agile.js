const userPassword = ['наш чел', 'активный', 'qweqwe'];
let enterPassword = prompt('Введите пароль');
let message;

if (enterPassword === userPassword[0]) {
    message = 'Поздравляем! Вы в зондер-команде';
    alert(message);
} else if (enterPassword === userPassword[1]) {
    message = 'Ты чепушила. Или тише будь, или крути педали, пока не дали!';
    alert(message);
} else if (enterPassword === userPassword[2]) {
    message =
        'Здравствуйте, Александр Репета. К сожалению, в допуске Вам вынуждены отказать, т.к. этот канал только для студентов.';
    alert(message);
} else {
    message = 'Ты тухляк! Сдуйся сам.';
    alert(message);
}
