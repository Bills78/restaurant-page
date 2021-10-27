const navbar = document.createElement('div');
const nav = document.createElement('div');
const title = document.createElement('h2');
const homeBtn = document.createElement('h3');
const menuBtn = document.createElement('h3');
const contactBtn = document.createElement('h3');

navbar.classList.add('navbar');
nav.classList.add('nav');
title.classList.add('title');
homeBtn.classList.add('home-nav');
menuBtn.classList.add('menu-nav');
contactBtn.classList.add('contact-nav');

title.textContent = 'HOMEBURGER';
homeBtn.textContent = 'Home';
menuBtn.textContent = 'Menu';
contactBtn.textContent = 'Contact';

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);

navbar.appendChild(title);
navbar.appendChild(nav);
content.appendChild(navbar);

export default navbar;