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

    const dishContainer1 = document.createElement('div');
    dishContainer1.classList.add('dish-container');
    dishesContainer.appendChild(dishContainer1);

    const dishContainer2 = document.createElement('div');
    dishContainer2.classList.add('dish-container');
    dishesContainer.appendChild(dishContainer2);

    const dishContainer3 = document.createElement('div');
    dishContainer3.classList.add('dish-container');
    dishesContainer.appendChild(dishContainer3);

    const dishContainer4 = document.createElement('div');
    dishContainer4.classList.add('dish-container');
    dishesContainer.appendChild(dishContainer4);
}