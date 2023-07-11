export function renderContactPageContent() {
    const content = document.querySelector('#content');
    const footer = document.querySelector('footer');

    const contactPageContainer = document.createElement('div');
    contactPageContainer.classList.add('contact-page-container');
    content.insertBefore(contactPageContainer, footer);

    const contactPageContentContainer = document.createElement('div');
    contactPageContentContainer.classList.add('contact-page-content');
    contactPageContainer.appendChild(contactPageContentContainer);

    const contactPageContentTitle = document.createElement('h2');
    contactPageContentTitle.textContent = 'Feel free to contact us:';
    contactPageContentContainer.appendChild(contactPageContentTitle);

    const mainContactDataContainer = document.createElement('div');
    mainContactDataContainer.classList.add('main-contact-data-container');
    contactPageContentContainer.appendChild(mainContactDataContainer);

    const emailAddress = document.createElement('p');
    emailAddress.classList.add('contact-data-container');
    emailAddress.innerHTML = '<i class="fas fa-envelope fa-lg"></i> <p>taste.of.bulgaria@gmail.com</p>';
    mainContactDataContainer.appendChild(emailAddress);

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('contact-data-container');
    phoneNumber.innerHTML = '<i class="fas fa-phone fa-rotate-90 fa-lg"></i> <p>088 843 7895</p>';
    mainContactDataContainer.appendChild(phoneNumber);

    const location = document.createElement('p');
    location.classList.add('contact-data-container');
    location.innerHTML = '<i class="fas fa-map-marker-alt fa-lg"></i> <p>Borisova 24, Ruse, 7000, Bulgaria</p>';
    mainContactDataContainer.appendChild(location);

    const workingTimeContainer = document.createElement('div');
    workingTimeContainer.classList.add('working-time-container');
    contactPageContentContainer.appendChild(workingTimeContainer);

    const workingTime = document.createElement('h3');
    workingTime.textContent = 'Working Time:';
    workingTimeContainer.appendChild(workingTime);

    const workingTimeData = [
        { days: 'Monday-Friday', hours: '9:00 AM - 10:00 PM' },
        { days: 'Saturday', hours: '10:00 AM - 9:00 PM' },
        { days: 'Sunday', hours: '11:00 AM - 8:00 PM' }
    ];

    for (const { days, hours } of workingTimeData) {
        const workingTime = document.createElement('ul');
        workingTime.classList.add('working-time');
        workingTime.innerHTML = `<p class='days'>${days}:</p> <p>${hours}</p>`;
        workingTimeContainer.appendChild(workingTime);
    }
}