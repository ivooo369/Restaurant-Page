export function renderHeaderFooter() {
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    content.appendChild(header);

    const title = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.textContent = 'Taste of Bulgaria';
    header.appendChild(title);

    const navbar = document.createElement('nav');
    navbar.setAttribute('id', 'navbar');
    header.appendChild(navbar);

    const btnHome = document.createElement('button');
    btnHome.textContent = 'Home';
    btnHome.setAttribute('class', 'navbar-buttons');
    navbar.appendChild(btnHome);

    const btnMenu = document.createElement('button');
    btnMenu.textContent = 'Menu';
    btnMenu.setAttribute('class', 'navbar-buttons');
    navbar.appendChild(btnMenu);

    const btnContact = document.createElement('button');
    btnContact.textContent = 'Contact';
    btnContact.setAttribute('class', 'navbar-buttons');
    navbar.appendChild(btnContact);

    const footer = document.createElement('footer');
    footer.innerHTML = 'Copyright © 2023 ivooo369 <a href="https://github.com/ivooo369" id="github-link"><i class="fab fa-github fa-lg"></i></a>';
    content.appendChild(footer);
}
