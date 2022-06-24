class Navbar {
    constructor (parent, main, menu, contacts) {
        this.parent = parent;
        this.main = main;
        this.menu = menu;
        this.contacts = contacts;
    }

    appendLink(parent, ...children) {
        for (const child of children) {
            parent.appendChild(child);
            child.href = '#';
            child.classList.add(`${child.textContent.toLowerCase()}-nav`, 'navlink');
        }
    }

    addDiv(wrapper, className, ...elems) {
        for (const elem of elems) {
            let temp = elem.classList.contains(className.toLowerCase()) ? elem : '';
    
            if (temp.tagName === 'SECTION') {
                wrapper.appendChild(temp);
            };
        }
    }
}

const navbarDiv = document.createElement('nav');
navbarDiv.classList.add('navbar');

navbarDiv.appendChild(document.createElement('span')).textContent = 'Chamomile Cafe';
const linksWrapper = navbarDiv.appendChild(document.createElement('div'));
linksWrapper.classList.add('links-wrap');

const home = document.createElement('a');
const menu = document.createElement('a');
const contacts = document.createElement('a');

const navbar = new Navbar(navbarDiv, home, menu, contacts);

home.textContent = 'Home';
menu.textContent = 'Menu';
contacts.textContent = 'Contacts';

navbar.appendLink(linksWrapper, home, menu, contacts);

export {
    navbarDiv,
    linksWrapper,
    navbar,
}