const contacts = document.createElement('section');
contacts.classList.add('contacts-nav');

contacts.appendChild(document.createElement('p')).textContent = 'Contact us';
contacts.appendChild(document.createElement('p')).textContent = 'Monday - Sunday: 7:00AM - 9:30PM';
contacts.appendChild(document.createElement('p')).textContent = '+38 098 123 12 22';
contacts.appendChild(document.createElement('p')).textContent = 'genericcafe@somedomain.com';
contacts.appendChild(document.createElement('p')).textContent = 'Yurkivska St, 57, Kyiv, Ukraine';

const mapPreview = contacts.appendChild(document.createElement('iframe'));
mapPreview.classList.add('map-preview');
mapPreview.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1269.704022270636!2d30.504864066318078!3d50.470746926486584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce12b637a6db%3A0xbf306ef70fa16e52!2sYurkivska%20St%2C%2057%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2spl!4v1655830671081!5m2!1sen!2spl";

export {
    contacts
}