import familyPhotot from '../imgs/familyPhoto.jpg';
import values from './values'
import grill2 from '../imgs/grill2.jpeg'

const home = document.createElement('div');
home.classList.add('home');

const family = new Image();
family.src = familyPhotot;
family.alt = 'my son, my wife, and I';
family.classList.add('family');

const homeTitle = document.createElement('h1');
homeTitle.textContent = 'HOMEBURGER';
homeTitle.classList.add('home-title');

const aboutUs = document.createElement('p');
aboutUs.textContent = 'Here at Homeburger, we don\'t strive for perfection, we simply strive for happiness. Although Burgers are our passion, we don\'t want fancy awards, we just want every bite to taste like home. Whether you\'re enjoying our BBQ brisket burger dripping with ranch and onion rings, or enjoying the original Homeburger, it should be enjoyed with friend\'s and family. So, come on down to Homeburger and stay a while. The first round is on us.';
aboutUs.classList.add('about-us');

const description = document.createElement('div');
description.classList.add('description');
description.append(homeTitle)
description.append(aboutUs)

const grill = new Image();
grill.src = grill2;
grill.alt = 'burgers being flipped';
grill.classList.add('grill');

const valuesDiv = document.createElement('div');
valuesDiv.append(values)

home.append(grill);
home.append(description);
home.append(family);
home.append(values);

export default home;