const button = document.querySelector('.button--js');
const popup = document.querySelector('.popup--js');
const main = document.querySelector('.main--js');

const showPopup = () => {
    popup.style.display = 'inline';
    main.style.background = '#121212';
    main.style.opacity = '0.5';
}

button.addEventListener('click', showPopup);