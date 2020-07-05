const welcome = document.getElementById('welcome');
const chat = document.getElementById('chat'); 
const form = document.getElementById('form');
const name = document.getElementById('name');
const messages = document.getElementById('messages');
const send = document.getElementById('send'); 
const text = document.getElementById('text');

alert("hello")

chat.style.display = 'none';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = name.value;
})