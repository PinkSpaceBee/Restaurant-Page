'use strict';
import { navbarDiv} from "./layout/navbar";
import { mainSection } from "./main-page";
import { menu } from "./menu";
import { contacts } from "./contacts";
import { footerText } from "./layout/footer";

const contentWrap = document.querySelector('#js-content');
contentWrap.appendChild(navbarDiv);
contentWrap.appendChild(mainSection);
document.querySelector('body').appendChild(footerText);

function addDiv(wrapper, className, ...elems) {
    for (const elem of elems) {
        let temp = elem.classList.contains(className) ? elem : '';
        console.log(temp);

        if (temp.tagName === 'SECTION') {
            wrapper.appendChild(temp);
        };
    }
}

function removeAllChildNodes(parent) {
    while (parent.childNodes.length > 1) {
        parent.removeChild(parent.lastChild);
    }
}

function highlightNavlink() {
}

const linksList = Array.from(document.querySelectorAll('.navlink'));

linksList.forEach(link => link.addEventListener('click', () => {
    highlightNavlink();
    removeAllChildNodes(contentWrap);
    addDiv(contentWrap, link.classList[0], contacts, menu, mainSection);
}))

// okay great this shit works. I can switch between the sections on click. Buuuut the question is how do I organize this code? Do I um create a class here or something? 
// oh wait shouldn't the main page be the default one? 




