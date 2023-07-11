import Picture from './images/home-content-image.jpg';

export function renderHomePageContent() {
    const content = document.querySelector('#content');
    const footer = document.querySelector('footer');

    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('home-page-container');
    content.insertBefore(homePageContainer, footer);

    const homePageContentContainer = document.createElement('div');
    homePageContentContainer.classList.add('home-page-content');
    homePageContainer.appendChild(homePageContentContainer);

    const homePageContentTitle = document.createElement('h2');
    homePageContentTitle.textContent = 'Welcome to Taste of Bulgaria!';
    homePageContentContainer.appendChild(homePageContentTitle);

    const homePageContentText = document.createElement('p');
    homePageContentText.textContent = 'Enjoy the richness of Bulgarian cuisine in our restaurant. Indulge in succulent grilled meats, delectable appetizers and authentic dishes. Join us for an unforgettable culinary adventure that transports you to the heart of Bulgaria, where every bite brings our heritage to life. At Taste of Bulgaria, the flavors come alive, creating an extraordinary dining experience.';
    homePageContentContainer.appendChild(homePageContentText);

    const homePageContentImage = new Image();
    homePageContentImage.src = Picture;
    homePageContentContainer.appendChild(homePageContentImage);
}
