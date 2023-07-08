import backgroundImage from './images/main-background.jpg';

export function renderHomeContent() {
    const homeContent = document.createElement('div');
    homeContent.setAttribute('id', 'home-content');

    const content = document.querySelector('#content');
    const footer = document.querySelector('footer');
    content.insertBefore(homeContent, footer);

    const homeCoverImage = new Image();
    homeCoverImage.src = backgroundImage;
    homeCoverImage.setAttribute('id', 'menu-cover-image');
    homeContent.appendChild(homeCoverImage);
}
