import bbqBurger from '../imgs/bbqBurger.jpeg';
import cheeseCheeseCheese from '../imgs/cheeseCheeseCheese.jpeg';
import breakfastBurger from '../imgs/breakfastBurger.jpeg';
import chickyFingers from '../imgs/chickyFingers.jpeg';
import yuckycluck from '../imgs/yuckycluck.jpeg';
import buffalochicken from '../imgs/buffalochicken.jpeg'

const images = (imgTitle, src, alt) => {
  imgTitle = new Image();
  imgTitle.src = src;
  imgTitle.alt = alt;
  imgTitle.classList.add('card-img')
  return imgTitle;
};

const card = (title, titleName, formal) => {
  title = document.createElement('div');
  titleName = document.createElement('h2');
  titleName.textContent = formal;
  titleName.classList.add('card-title');
  title.classList.add('card');
  title.append(titleName);
  return title;
}

const final = (title, titleName, formal, imgTitle, src, alt, description) => {
  const cardScription = document.createElement('h4');
  cardScription.textContent = description;
  cardScription.classList.add('card-description');
  title = card(title, titleName, formal);
  imgTitle = images(imgTitle, src, alt);
  title.append(imgTitle);
  title.append(cardScription);
  cards.append(title);
}

const menu = document.createElement('div');
menu.classList.add('menu');

const h1 = document.createElement('h1');
h1.textContent = 'Menu'
menu.append(h1);

const p = document.createElement('p');
p.textContent = '** All burgers come with all-beef patties cooked to order, deep fried onions, pickles, and lettuce. **'
menu.append(p);

const cards = document.createElement('div');
cards.classList.add('all-cards');

final('bbq', 'titleBbq', 'BBQ Burger',
  'bbb', bbqBurger, 'bbq burger',
  'Two patties made to order, with your choice of brisket, sausage, rib meat or all of the above.');
final('cheesey', 'titleCheesey', 'Cheesey McCheeseface',
  'cheese', cheeseCheeseCheese, 'cheesey burger',
  'Cheddar, PepperJack, and Blue Cheese, with our special sauce for a kick. I give you... the Cheesey McCheeseface');
final('breakfast', 'titleBreakfast', 'The Breakfast Burger',
  'breakfast', breakfastBurger, 'breakfast burger',
  'Egg, Ham, Cheese, two Beef patties. It is what it is... as long as you aren\'t worried about your cholesterol.');
final('chickenStrips', 'titleChickenStrips', 'Chickey Strips', 
  'chickey', chickyFingers, 'chicken strips',
  'I wish there was some twist on these chicken strips, but no, they\'re just darn good chicken strips.');
final('grilled', 'titleGrilled', 'The Yucky Cluck',
  'cluck', yuckycluck, 'grilled chicken sandwich',
  'There\'s nothing yucky about it, this is our grilled chicken sandwich. We\'ll leave the fried ones up to the fast food joints. ');
final('buffalo', 'titleBuffalo', 'Little John',
  'buffaloChicken', buffalochicken, 'buffalo ranch chicken sandwhich',
  'Okay, we lied. We do make a friend chicken sandwich. We call it the Little John because it\'s big, bold and packs a punch with our buffalo, ranch, and special sauce.');

menu.append(cards);

export default menu;

