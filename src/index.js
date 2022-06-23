'use strict';
import { navbarDiv, navbar} from "./layout/navbar";
import { home, menuBtn } from "./main-page";
import { menu } from "./menu";
import { contacts } from "./contacts";
import { footerText } from "./layout/footer";

const contentWrap = document.querySelector('#js-content');
contentWrap.appendChild(navbarDiv);
contentWrap.appendChild(home);

// footer
document.querySelector('body').appendChild(footerText);

function removeChildNodes(parent) {
    while (parent.childNodes.length > 1) {
        parent.removeChild(parent.lastChild);
    }
}

// well, a list of navigation links
const linksList = Array.from(document.querySelectorAll('.navlink'));

// switch between the sections 
linksList.forEach(link => link.addEventListener('click', () => {
    removeChildNodes(contentWrap);
    navbar.addDiv(contentWrap, link.classList[0], contacts, menu, home);
}))

// open menu on btn click
menuBtn.addEventListener('click', () => {
    removeChildNodes(contentWrap);
    contentWrap.appendChild(menu);
})


