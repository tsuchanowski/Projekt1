const formValidation = () => {
    console.log('validation');

    const errors = document.getElementById('errors');
    errors.innerHTML = '';

    const name = document.getElementById('name');
    name.value = name.value.trim()

    const wydarzenie = document.getElementById('wydarzenie');
    const selectedEvent = wydarzenie.options[wydarzenie.selectedIndex].text;

    const city = document.getElementById('city');
    const selectedCity = city.options[city.selectedIndex].text;


    if (name.value === '') {
        const liElement = document.createElement('li');
        liElement.innerText = '**  Podaj imię i nazwisko!  **';
        errors.appendChild(liElement);

        return false;
    }

    if (selectedEvent === '----') {
        const liElement = document.createElement('li');
        liElement.innerText = '**   Wybierz nazwę dostępnych kursów z listy!   **';
        errors.appendChild(liElement);

        return false;
    }

    if (selectedCity === '----') {
        const liElement = document.createElement('li');
        liElement.innerText = '**   Wybierz miasto z listy lub online!   **';
        errors.appendChild(liElement);

        return false;
    }

    return true;
};

