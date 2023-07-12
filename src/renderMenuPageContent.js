import meshana_skara_image from './images/meshana-skara.jpg';
import tarator_image from './images/tarator.jpg';
import sarmi_image from './images/sarmi.jpg';
import shopska_salata_image from './images/shopska-salata.jpg';
import shkembe_image from './images/shkembe.jpg';
import moussaka_image from './images/moussaka.jpg';
import banitsa_image from './images/banitsa.jpg';
import kiselo_mlyako_image from './images/kiselo-mlyako.jpg';

export function renderMenuPageContent() {
    const content = document.querySelector('#content');
    const footer = document.querySelector('footer');

    const menuPageContainer = document.createElement('div');
    menuPageContainer.classList.add('menu-page-container');
    content.insertBefore(menuPageContainer, footer);

    const menuPageContentContainer = document.createElement('div');
    menuPageContentContainer.classList.add('menu-page-content');
    menuPageContainer.appendChild(menuPageContentContainer);

    const menuPageContentTitle = document.createElement('h2');
    menuPageContentTitle.textContent = 'Here are our top dishes:';
    menuPageContentContainer.appendChild(menuPageContentTitle);

    const dishesContainer = document.createElement('div');
    dishesContainer.classList.add('dishes-container');
    menuPageContentContainer.appendChild(dishesContainer);

    const dishesData = [
        { name: 'Meshana Skara', price: 'Price: $5.99', image: meshana_skara_image },
        { name: 'Tarator', price: 'Price: $1.99', image: tarator_image },
        { name: 'Sarmi', price: 'Price: $2.49', image: sarmi_image },
        { name: 'Shopska Salata', price: 'Price: $3.49', image: shopska_salata_image },
        { name: 'Shkembe', price: 'Price: $3.99', image: shkembe_image },
        { name: 'Moussaka', price: 'Price: $3.49', image: moussaka_image },
        { name: 'Banitsa', price: 'Price: $5.49', image: banitsa_image },
        { name: 'Kiselo Mlyako', price: 'Price: $1.49', image: kiselo_mlyako_image }
    ];

    for (const { name, price, image } of dishesData) {
        const dishContainer = document.createElement('div');
        dishContainer.classList.add('dish-container');
        dishesContainer.appendChild(dishContainer);

        const dishName = document.createElement('h3');
        dishName.textContent = name;

        const dishPrice = document.createElement('p');
        dishPrice.textContent = price;

        const dishImage = document.createElement('div');
        dishImage.classList.add('dish-image');
        dishImage.style.backgroundImage = `url(${image})`;

        dishContainer.appendChild(dishName);
        dishContainer.appendChild(dishPrice);
        dishContainer.appendChild(dishImage);
    }
}

