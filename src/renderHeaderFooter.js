export function renderHeaderFooter() {
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    content.appendChild(header);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Taste of Bulgaria';
    header.appendChild(title);

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    header.appendChild(navbar);

    const btnHome = document.createElement('button');
    btnHome.textContent = 'Home';
    btnHome.setAttribute('id', 'btn-home');
    btnHome.classList.add('navbar-buttons');
    navbar.appendChild(btnHome);

    const btnMenu = document.createElement('button');
    btnMenu.textContent = 'Menu';
    btnMenu.setAttribute('id', 'btn-menu');
    btnMenu.classList.add('navbar-buttons');
    navbar.appendChild(btnMenu);

    const btnContact = document.createElement('button');
    btnContact.textContent = 'Contact';
    btnContact.setAttribute('id', 'btn-contact');
    btnContact.classList.add('navbar-buttons');
    navbar.appendChild(btnContact);

    const footer = document.createElement('footer');
    footer.innerHTML = 'Copyright © 2023 ivooo369 <a href="https://github.com/ivooo369" class="github-link"><i class="fab fa-github fa-lg"></i></a>';
    content.appendChild(footer);
}




