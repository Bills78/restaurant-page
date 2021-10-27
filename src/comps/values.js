const values = document.createElement('div');
values.classList.add('values');

const h2 = document.createElement('h2');
h2.textContent = 'Our Values';

const valuesList = document.createElement('div')
valuesList.classList.add('list-values');

const food = document.createElement('div');
const foodTitle = document.createElement('h2');
const foodP = document.createElement('p');
food.classList.add('food');
foodTitle.textContent = 'FOOD';
foodTitle.classList.add('value-title')
foodP.textContent = 'As a cook in the Texas Army National Guard, I learned the value of a hot meal. Bad food can make a bad day worse, but good food can turn a bad day around. So, our goal here is not awards or achievement, but some darn good food, in hopes of turning your day around.';
food.append(foodTitle);
food.append(foodP);

const fun = document.createElement('div');
const funTitle = document.createElement('h2');
const funP = document.createElement('p');
fun.classList.add('fun');
funTitle.textContent = 'FUN';
funTitle.classList.add('value-title')
funP.textContent =  'Life is hard. It sucks sometimes. But, I\'ve found that it sucks a little less when you\'re having fun. Whether it\'s a live band, family night, or game night, we will always make sure there is fun to be had.';
fun.append(funTitle);
fun.append(funP);

const family = document.createElement('div');
const familyTitle = document.createElement('h2');
const familyP = document.createElement('p');
family.classList.add('family-values');
familyTitle.textContent = 'FAMILY';
familyTitle.classList.add('value-title')
familyP.textContent = 'While the whole "family" theme from Fast and Furious may have become a meme this past year, They\'ve got a point. Family is one of the most important things in life. You can count on Homeburger to always be family friendly.';
family.append(familyTitle);
family.append(familyP)


valuesList.append(food);
valuesList.append(fun);
valuesList.append(family);

values.append(h2);
values.append(valuesList);

export default values;