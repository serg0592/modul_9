const linkChange = document.querySelector('a');

function changeText(){
    let a = prompt('Введите новый текст ссылки');
    event.preventDefault();
    linkChange.textContent = a;
}

linkChange.addEventListener('click', changeText);

