const popup = document.querySelector('.popup--js');
const main = document.querySelector('.main--js');
const button = document.querySelector('.button--js');
const buttonX = document.querySelector('.x--js');
let counter = 0;

const popupInfo = document.createElement('p');
const counterButton = document.createElement('button');


const showPopup = () => {
    popup.style.display = 'inline';
    main.style.background = '#121212';
    main.style.opacity = '0.5';
    counter++;
    popup.appendChild(popupInfo);
    popupInfo.textContent = `Button was clicked ${counter}`;
    popupInfo.style.margin = '10px';
    popupInfo.style.fontSize = '16px';
    popupInfo.style.fontFamily = 'Roboto';
    if (counter > 5) {
        popup.appendChild(counterButton);
        counterButton.textContent = "Reset"
        counterButton.style.display = 'inline';
    }

    const resetCounter = () => {
        counter = 0;
        popupInfo.textContent = `Button was clicked 0`
        counterButton.style.display = 'none';
    }

    counterButton.addEventListener('click', resetCounter);
}

const closePopup = () => {
    popup.style.display = 'none';
    main.style.background = "#FFF";
    main.style.opacity = '1';
}



button.addEventListener('click', showPopup);
buttonX.addEventListener('click', closePopup);
main.addEventListener('onClick', closePopup);




