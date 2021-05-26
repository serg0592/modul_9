const method1 = document.querySelector('#consoleLog');
const method2 = document.querySelector('#alert');
const method3 = document.querySelector('#prompt');


method1.addEventListener('click', function() {
    alert('Метод для вывода сообщения в веб-консоль');
    console.log('А вот и само сообщение)');
})

method2.addEventListener('click', function() {
    alert('Метод для вывода сообщения в alert');
})

method3.addEventListener('click', function() {
    alert('Метод для вывода сообщения в prompt');
    prompt('Сообщение: "Введите ваш возраст"');
})