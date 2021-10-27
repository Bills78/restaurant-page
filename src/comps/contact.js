const contact = document.createElement('div');
contact.classList.add('contact')

const h1 = document.createElement('h1');
h1.textContent = 'Contact Us';
contact.append(h1);

const p = document.createElement('p');
p.textContent = 'Feel free to text, call or email with comments, or critiques. Thank You!';
contact.append(p);

const phone = document.createElement('h4');
phone.textContent = 'Call Us: (123) 456-7890'
contact.append(phone);

const email = document.createElement('h4');
email.textContent = 'Email Us: homeburger@gmail.com'
contact.append(email);

const map = document.createElement('iframe');
map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.19341813985798!2d-98.48606167588675!3d29.426028771911177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f5536a2af7b%3A0x39a5b98b5af44b66!2s300%20Alamo%20Plaza%2C%20San%20Antonio%2C%20TX%2078205!5e0!3m2!1sen!2sus!4v1635354633455!5m2!1sen!2sus';
map.classList.add('map');
contact.append(map);


export default contact;

{/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}