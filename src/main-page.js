const home = document.createElement('section');
home.classList.add('home-nav');

home.appendChild(document.createElement('p')).textContent = 'Lorem ipsum dolor';
home.appendChild(document.createElement('p')).textContent = 'Sit amet, consectetur adipiscing elit. Sed ornare faucibus';


const menuBtn = home.appendChild(document.createElement('button'))
menuBtn.textContent = 'Open menu';

export {
    home,
    menuBtn
}
