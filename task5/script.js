const copyText = document.querySelector('input');
const pasteText = document.querySelector('#duplicateField');
const toConsole = document.querySelector('button');

copyText.addEventListener('keyup', function() {
    pasteText.textContent = copyText.value;
})

copyText.addEventListener('keydown', function() {
    pasteText.textContent = copyText.value;
})

toConsole.addEventListener('click', function() {
    console.log(copyText.value);
    copyText.value = '';
    pasteText.textContent = '';
    event.preventDefault();
})