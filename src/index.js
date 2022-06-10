'use strict';
import { navbarDiv } from "./layout/navbar";
//import { Navbar } from "./layout/navbar";

const contentWrap = document.querySelector('#js-content');
contentWrap.appendChild(navbarDiv);

// okaaaay. but. I can't just append nav links to the content wrapper, I need some kind of containter. Also, I think there should be a better way to append these links than calling the function three times. Ummmm. Lemme think. Oh right rest syntax
