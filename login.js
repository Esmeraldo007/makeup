const name = document.querySelector('#name');
const pass = document.querySelector('#pass');

const check = document.querySelector('#check');
const form = document.querySelector('form');

check.addEventListener('change', () => {
    if (check.checked) {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const pass = document.querySelector('#pass').value;
        console.log(`Name: ${name}, Password: ${pass}`);
        alert(`Welcome ${name}!`);
        window.location.href = 'https://esmeraldokoko.github.io/website/example2.html';
    });
});