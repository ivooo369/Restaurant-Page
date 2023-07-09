export function handleEventListeners() {
    const homePageContainer = document.querySelector('#home-page-container');
    const menuPageContainer = document.querySelector('#menu-page-container');
    const btnHome = document.querySelector('#btn-home');
    const btnMenu = document.querySelector('#btn-menu');
    const btnContact = document.querySelector('#btn-contact');

    btnHome.addEventListener('click', () => {
        homePageContainer.style.display = 'flex';
        menuPageContainer.style.display = 'none';
    });

    btnMenu.addEventListener('click', () => {
        menuPageContainer.style.display = 'flex';
        homePageContainer.style.display = 'none';
    });

    btnContact.addEventListener('click', () => homePageContainer.style.display = 'none');
}
