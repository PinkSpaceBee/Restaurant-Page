'use strict';
import { navbarDiv} from "./layout/navbar";
import { mainSection } from "./main-page";
import { menu } from "./menu";
import { contacts } from "./contacts";
import { footerText } from "./layout/footer";
import { navbar } from "./layout/navbar";

const contentWrap = document.querySelector('#js-content');
contentWrap.appendChild(navbarDiv);
contentWrap.appendChild(mainSection);

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
    navbar.highlightNavlink();
    navbar.addDiv(contentWrap, link.classList[0], contacts, menu, mainSection);
}))

