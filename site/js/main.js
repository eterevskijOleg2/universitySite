const toggleButton = document.getElementById('toggleWeekBtn');
const toggleString = document.getElementById('toggleString');
const topWeek = document.getElementById('topWeek');
const downWeek = document.getElementById('downWeek');

if (!isUpWeek) {
    toggleButton.innerText = 'Переключить на верхнюю неделю';
    toggleString.innerText = 'Переключить на верхнюю неделю';
    topWeek.style.display = 'none';
    downWeek.style.display = 'flex';
} else {
    toggleButton.innerText = 'Переключить на нижнюю неделю';
    toggleString.innerText = 'Переключить на нижнюю неделю';
    downWeek.style.display = 'none';
    topWeek.style.display = 'flex';
}

const toggleWeek = () => {
    if (!isUpWeek) {
        downWeek.style.display = 'none';
        topWeek.style.display = 'flex';
        toggleButton.innerText = 'Переключить на нижнюю неделю';
        toggleString.innerText = 'Переключить на нижнюю неделю';
    } else {
        topWeek.style.display = 'none';
        downWeek.style.display = 'flex';
        toggleButton.innerText = 'Переключить на верхнюю неделю';
        toggleString.innerText = 'Переключить на верхнюю неделю';
    }
    isUpWeek = !isUpWeek;
}

toggleButton.addEventListener('click', toggleWeek);
toggleString.addEventListener('click', toggleWeek);

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

if (getCookie('mishaMode')) {
    const body = document.getElementsByTagName('body')[0];
    body.style.cursor = "url('../images/dildo.png '), auto";
}