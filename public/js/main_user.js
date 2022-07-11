const logValidation = () => {
    console.log('validation');

    const errors = document.getElementById('errors');
    errors.innerHTML = '';

    const username = document.getElementById('username');
    username.value = username.value.trim()

    const password = document.getElementById('password');
    password.value = password.value.trim()

    if (username.value === '') {
        const liElement = document.createElement('li');
        liElement.innerText = '**  Podaj nazwę użytkownika!  **';
        errors.appendChild(liElement);

        return false;
    }

    if (password.value === '') {
        const liElement = document.createElement('li');
        liElement.innerText = '**  Podaj hasło dostępu!  **';
        errors.appendChild(liElement);

        return false;
    }


    return true;
};

