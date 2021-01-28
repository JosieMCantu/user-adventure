const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const user = {
        name: formData.get('name'),
        witch: formData.get('witch'),
        peace: 45,
        power: 0,
        completed: {},
    };
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
    window.location = './elements/index.html';

});

