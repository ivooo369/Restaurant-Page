import meshana_skara_image from './images/meshana-skara.jpg';
import tarator_image from './images/tarator.jpg';
import sarmi_image from './images/sarmi.jpg';
import shopska_salata_image from './images/shopska-salata.jpg';
import shkembe_chorba_image from './images/shkembe-chorba.jpg';
import moussaka_image from './images/moussaka.jpg';
import banitsa_image from './images/banitsa.jpg';
import kiselo_mlyako_image from './images/kiselo-mlyako.jpg';

export function renderMenuPageContent() {
    const content = document.querySelector('#content');
    const footer = document.querySelector('footer');

    const menuPageContainer = document.createElement('div');
    menuPageContainer.setAttribute('id', 'menu-page-container');
    content.insertBefore(menuPageContainer, footer);

    const menuPageContentContainer = document.createElement('div');
    menuPageContentContainer.setAttribute('id', 'menu-page-content');
    menuPageContainer.appendChild(menuPageContentContainer);

    const menuPageContentTitle = document.createElement('h2');
    menuPageContentTitle.textContent = 'Here are our top dishes:';
    menuPageContentContainer.appendChild(menuPageContentTitle);

    const dishesContainer = document.createElement('div');
    dishesContainer.setAttribute('id', 'dishes-container');
    menuPageContentContainer.appendChild(dishesContainer);

    for (let i = 0; i < 8; i++) {
        const dishContainer = document.createElement('div');
        dishContainer.classList.add('dish-container');
        dishesContainer.appendChild(dishContainer);
    }

    for (let i = 0; i < dishesContainer.children.length; i++) {
        const dishContainer = dishesContainer.children[i];
        const dishName = document.createElement('h3');
        const dishPrice = document.createElement('p');
        const dishImage = document.createElement('div');
        dishName.setAttribute('id', `dish-name-${i + 1}`);
        dishName.classList.add('dish-name');
        dishPrice.setAttribute('id', `dish-price-${i + 1}`);
        dishPrice.classList.add('dish-price');
        dishImage.setAttribute('id', `dish-image-${i + 1}`);
        dishImage.classList.add('dish-image');
        dishContainer.appendChild(dishName);
        dishContainer.appendChild(dishPrice);
        dishContainer.appendChild(dishImage);
    }

    const firstDishName = document.querySelector('#dish-name-1');
    firstDishName.textContent = 'Meshana Skara';
    const firstDishPrice = document.querySelector('#dish-price-1');
    firstDishPrice.textContent = 'Price: $5.99';
    const firstDishImage = document.querySelector('#dish-image-1');
    firstDishImage.style.backgroundImage = `url(${meshana_skara_image})`;

    const secondDishName = document.querySelector('#dish-name-2');
    secondDishName.textContent = 'Tarator';
    const secondDishPrice = document.querySelector('#dish-price-2');
    secondDishPrice.textContent = 'Price: $1.99';
    const secondDishImage = document.querySelector('#dish-image-2');
    secondDishImage.style.backgroundImage = `url(${tarator_image})`;

    const thirdDishName = document.querySelector('#dish-name-3');
    thirdDishName.textContent = 'Sarmi';
    const thirdDishPrice = document.querySelector('#dish-price-3');
    thirdDishPrice.textContent = 'Price: $2.49';
    const thirdDishImage = document.querySelector('#dish-image-3');
    thirdDishImage.style.backgroundImage = `url(${sarmi_image})`;

    const fourthDishName = document.querySelector('#dish-name-4');
    fourthDishName.textContent = 'Shopska Salata';
    const fourthDishPrice = document.querySelector('#dish-price-4');
    fourthDishPrice.textContent = 'Price: $3.49';
    const fourthDishImage = document.querySelector('#dish-image-4');
    fourthDishImage.style.backgroundImage = `url(${shopska_salata_image})`;

    const fifthDishName = document.querySelector('#dish-name-5');
    fifthDishName.textContent = 'Shkembe Chorba';
    const fifthDishPrice = document.querySelector('#dish-price-5');
    fifthDishPrice.textContent = 'Price: $3.99';
    const fifthDishImage = document.querySelector('#dish-image-5');
    fifthDishImage.style.backgroundImage = `url(${shkembe_chorba_image})`;

    const sixthDishName = document.querySelector('#dish-name-6');
    sixthDishName.textContent = 'Moussaka';
    const sixthDishPrice = document.querySelector('#dish-price-6');
    sixthDishPrice.textContent = 'Price: $3.49';
    const sixthDishImage = document.querySelector('#dish-image-6');
    sixthDishImage.style.backgroundImage = `url(${moussaka_image})`;

    const seventhDishName = document.querySelector('#dish-name-7');
    seventhDishName.textContent = 'Banitsa';
    const seventhDishPrice = document.querySelector('#dish-price-7');
    seventhDishPrice.textContent = 'Price: $5.49';
    const seventhDishImage = document.querySelector('#dish-image-7');
    seventhDishImage.style.backgroundImage = `url(${banitsa_image})`;

    const eighthDishName = document.querySelector('#dish-name-8');
    eighthDishName.textContent = 'Kiselo Mlyako';
    const eighthDishPrice = document.querySelector('#dish-price-8');
    eighthDishPrice.textContent = 'Price: $1.49';
    const eighthDishImage = document.querySelector('#dish-image-8');
    eighthDishImage.style.backgroundImage = `url(${kiselo_mlyako_image})`;
}

