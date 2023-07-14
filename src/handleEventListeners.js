export function handleEventListeners() {
    const homePageContainer = document.querySelector('.home-page-container');
    const menuPageContainer = document.querySelector('.menu-page-container');
    const contactPageContainer = document.querySelector('.contact-page-container');
    const btnHome = document.querySelector('#btn-home');
    const btnMenu = document.querySelector('#btn-menu');
    const btnContact = document.querySelector('#btn-contact');

    btnHome.addEventListener('click', () => {
        btnHome.style.textDecoration = 'underline';
        btnMenu.style.textDecoration = 'none';
        btnContact.style.textDecoration = 'none';
        homePageContainer.style.display = 'flex';
        menuPageContainer.style.display = 'none';
        contactPageContainer.style.display = 'none';
    });

    btnMenu.addEventListener('click', () => {
        btnMenu.style.textDecoration = 'underline';
        btnHome.style.textDecoration = 'none';
        btnContact.style.textDecoration = 'none';
        menuPageContainer.style.display = 'flex';
        homePageContainer.style.display = 'none';
        contactPageContainer.style.display = 'none';
    });

    btnContact.addEventListener('click', () => {
        btnContact.style.textDecoration = 'underline';
        btnHome.style.textDecoration = 'none';
        btnMenu.style.textDecoration = 'none';
        contactPageContainer.style.display = 'flex';
        homePageContainer.style.display = 'none';
        menuPageContainer.style.display = 'none';
    });
}

