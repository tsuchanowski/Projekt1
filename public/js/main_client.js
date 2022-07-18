const clientValidation = () => {
    console.log('validation');

    const errors = document.getElementById('errors');
    errors.innerHTML = '';

    const eventdate = document.getElementById('eventdate');
    eventdate.value = eventdate.value.trim()

    const action = document.getElementById('action');
    const selectedAction = action.options[action.selectedIndex].text;

    const description = document.getElementById('description');
    description.value = description.value.trim()

    if (eventdate.value === '') {
        const liElement = document.createElement('li');
        liElement.innerText = '**  Podaj datę akcji/wydarzenia!  **';
        errors.appendChild(liElement);

        return false;
    }

    if (selectedAction === '----') {
        const liElement = document.createElement('li');
        liElement.innerText = '**   Wybierz rodzaj akcji dostępnych na liście!   **';
        errors.appendChild(liElement);

        return false;
    }

    if (description.value === '') {
        const liElement = document.createElement('li');
        liElement.innerText = '**  Podaj opis akcji/wydarzenia!  **';
        errors.appendChild(liElement);

        return false;
    }

    return true;
};

