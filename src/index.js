import './style.css';
import home from './comps/home';
import navbar from './comps/navbar';
import menu from './comps/menu';
import contact from './comps/contact';

function content() {
  const content = document.querySelector('#content');
  const titleBtn = document.querySelector('.title');
  const homeBtn = document.querySelector('.home-nav');
  const menuBtn = document.querySelector('.menu-nav');
  const contactBtn = document.querySelector('.contact-nav');

  const main = document.createElement('div');
  main.classList.add('main');
  
  main.append(home);

  content.append(navbar);
  content.append(main);
  
  titleBtn.addEventListener('click', e => {
    content.append(main);
    menu.remove();
    contact.remove();
  });

  homeBtn.addEventListener('click', e => {
    content.append(main);
    menu.remove();
    contact.remove();
  });

  menuBtn.addEventListener('click', e => {
    content.append(menu);
    main.remove();
    contact.remove();
  });

  contactBtn.addEventListener('click', e => {
    content.append(contact);
    main.remove();
    menu.remove();
  });



  return content;
}

document.body.append(content());