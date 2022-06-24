/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts)
/* harmony export */ });
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



/***/ }),

/***/ "./src/layout/footer.js":
/*!******************************!*\
  !*** ./src/layout/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerText": () => (/* binding */ footerText)
/* harmony export */ });
const footerText = document.createElement('footer');
footerText.appendChild(document.createElement('span')).textContent = `created by `;
const githubLink = footerText.appendChild(document.createElement('a'));
githubLink.setAttribute('href','https://github.com/PinkSpaceBee');
githubLink.innerHTML = 'PinkSpaceBee';



/***/ }),

/***/ "./src/layout/navbar.js":
/*!******************************!*\
  !*** ./src/layout/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linksWrapper": () => (/* binding */ linksWrapper),
/* harmony export */   "navbar": () => (/* binding */ navbar),
/* harmony export */   "navbarDiv": () => (/* binding */ navbarDiv)
/* harmony export */ });
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



/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "menuBtn": () => (/* binding */ menuBtn)
/* harmony export */ });
const home = document.createElement('section');
home.classList.add('home-nav');

home.appendChild(document.createElement('p')).textContent = 'Lorem ipsum dolor';
home.appendChild(document.createElement('p')).textContent = 'Sit amet, consectetur adipiscing elit. Sed ornare faucibus';


const menuBtn = home.appendChild(document.createElement('button'))
menuBtn.textContent = 'Open menu';




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
class MenuItem {
    constructor(itemName, price, description) {
        this.itemName = itemName;
        this.price = price;
        this.description = description;
    }
}

const foodSection = [
    {item1: new MenuItem('Strawberry mousse cake', '120 UAH', 'Strawberry and white chocolate mousse cake with sablé base')},
    {item2: new MenuItem('Sweet blackberry mousse tart', '95 UAH', 'Blackberry mousse tart has fresh blackberries, creamy cashew mousse, and a purple sweet potato tourbillon')},
    {item3: new MenuItem('Lemon tart with a shortbread crust', '95 UAH', 'Lemon tart with a shortbread crust and a lemon curd filling. Served with a few fresh blueberries')},
    {item4: new MenuItem('Ginger layer cake', '140 UAH', 'Ginger layer cake topped with wine-poached pears and cream cheese frosting')},
    {item5: new MenuItem('Dark chocolate ganache tart', '150 UAH', 'Dark chocolate ganache tart topped with Dulce de Leche and a sprinkling of sea salt')},
];

const drinksSection =[
    {item1: new MenuItem('Double ristretto', '30 UAH', 'Has a slightly sweeter, more concentrated flavor than espresso, 30ml')},
    {item2: new MenuItem('Espresso', '30 UAH', 'A small shot of coffee, 30 ml. Can also be served as a double shot. ')},
    {item3: new MenuItem('Caffe lungo', '35 UAH', 'A single espresso shot with more water, 130 ml')},
    {item4: new MenuItem('Latte', '55 UAH', 'Includes decaf, vegan, and lactose-free options, 150ml')},
    {item5: new MenuItem('Cappuccino', '55 UAH', 'Includes decaf, vegan, and lactose-free options, 130ml')},
    {item6: new MenuItem('Tea', '35 UAH', 'Varieties of black, green, and herbal tea, 200ml')}
];

const menu = document.createElement('section');
menu.classList.add('menu-nav', 'menu');

// create markup for food section
const foodSectionDiv = menu.appendChild(document.createElement('div'));
const foodTitle = foodSectionDiv.appendChild(document.createElement('p'))
foodTitle.textContent = 'Food';
foodTitle.classList.add('title');

foodSection.forEach(elem => {
    iterateObjects(elem, foodSectionDiv);
})

// create markup for drinks section
const drinksSectionDiv = menu.appendChild(document.createElement('div'));
const drinksTitle = drinksSectionDiv.appendChild(document.createElement('p'))
drinksTitle.textContent = 'Drinks';
drinksTitle.classList.add('title');

drinksSection.forEach(elem => {
    iterateObjects(elem, drinksSectionDiv);
})

// populate div with object values
function iterateObjects(obj, container) {
    // iterate through the elements of an array; create a div for each object
    const menuItemDiv = container.appendChild(document.createElement('div'));
    for (const value of Object.values(obj)) {
        // iterate through the values of each object; create a p tag for every value
        for (const textValue of Object.values(value)) {
            const p = menuItemDiv.appendChild(document.createElement('p'));
            p.textContent = textValue;
        }
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/navbar */ "./src/layout/navbar.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page */ "./src/main-page.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/footer */ "./src/layout/footer.js");







const contentWrap = document.querySelector('#js-content');
contentWrap.appendChild(_layout_navbar__WEBPACK_IMPORTED_MODULE_0__.navbarDiv);
contentWrap.appendChild(_main_page__WEBPACK_IMPORTED_MODULE_1__.home);

// footer
document.querySelector('body').appendChild(_layout_footer__WEBPACK_IMPORTED_MODULE_4__.footerText);

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
    _layout_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.addDiv(contentWrap, link.classList[0], _contacts__WEBPACK_IMPORTED_MODULE_3__.contacts, _menu__WEBPACK_IMPORTED_MODULE_2__.menu, _main_page__WEBPACK_IMPORTED_MODULE_1__.home);
}))

// open menu on btn click
_main_page__WEBPACK_IMPORTED_MODULE_1__.menuBtn.addEventListener('click', () => {
    removeChildNodes(contentWrap);
    contentWrap.appendChild(_menu__WEBPACK_IMPORTED_MODULE_2__.menu);
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUtDOzs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssdUhBQXVIO0FBQzVILEtBQUssMktBQTJLO0FBQ2hMLEtBQUssd0tBQXdLO0FBQzdLLEtBQUssa0lBQWtJO0FBQ3ZJLEtBQUsscUpBQXFKO0FBQzFKOztBQUVBO0FBQ0EsS0FBSywwSEFBMEg7QUFDL0gsS0FBSyxrSEFBa0g7QUFDdkgsS0FBSywrRkFBK0Y7QUFDcEcsS0FBSyxpR0FBaUc7QUFDdEcsS0FBSyxzR0FBc0c7QUFDM0csS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDM0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmE7QUFDc0M7QUFDUDtBQUNkO0FBQ1E7QUFDTzs7QUFFN0M7QUFDQSx3QkFBd0IscURBQVM7QUFDakMsd0JBQXdCLDRDQUFJOztBQUU1QjtBQUNBLDJDQUEyQyxzREFBVTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWEsaUNBQWlDLCtDQUFRLEVBQUUsdUNBQUksRUFBRSw0Q0FBSTtBQUN0RSxDQUFDOztBQUVEO0FBQ0EsZ0VBQXdCO0FBQ3hCO0FBQ0EsNEJBQTRCLHVDQUFJO0FBQ2hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xheW91dC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xheW91dC9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb250YWN0cy5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy1uYXYnKTtcblxuY29udGFjdHMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKS50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJztcbmNvbnRhY3RzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSkudGV4dENvbnRlbnQgPSAnTW9uZGF5IC0gU3VuZGF5OiA3OjAwQU0gLSA5OjMwUE0nO1xuY29udGFjdHMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKS50ZXh0Q29udGVudCA9ICcrMzggMDk4IDEyMyAxMiAyMic7XG5jb250YWN0cy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLnRleHRDb250ZW50ID0gJ2dlbmVyaWNjYWZlQHNvbWVkb21haW4uY29tJztcbmNvbnRhY3RzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSkudGV4dENvbnRlbnQgPSAnWXVya2l2c2thIFN0LCA1NywgS3lpdiwgVWtyYWluZSc7XG5cbmNvbnN0IG1hcFByZXZpZXcgPSBjb250YWN0cy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKSk7XG5tYXBQcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ21hcC1wcmV2aWV3Jyk7XG5tYXBQcmV2aWV3LnNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMTI2OS43MDQwMjIyNzA2MzYhMmQzMC41MDQ4NjQwNjYzMTgwNzghM2Q1MC40NzA3NDY5MjY0ODY1ODQhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDBkNGNlMTJiNjM3YTZkYiUzQTB4YmYzMDZlZjcwZmExNmU1MiEyc1l1cmtpdnNrYSUyMFN0JTJDJTIwNTclMkMlMjBLeWl2JTJDJTIwVWtyYWluZSUyQyUyMDAyMDAwITVlMCEzbTIhMXNlbiEyc3BsITR2MTY1NTgzMDY3MTA4MSE1bTIhMXNlbiEyc3BsXCI7XG5cbmV4cG9ydCB7XG4gICAgY29udGFjdHNcbn0iLCJjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5mb290ZXJUZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkudGV4dENvbnRlbnQgPSBgY3JlYXRlZCBieSBgO1xuY29uc3QgZ2l0aHViTGluayA9IGZvb3RlclRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbmdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywnaHR0cHM6Ly9naXRodWIuY29tL1BpbmtTcGFjZUJlZScpO1xuZ2l0aHViTGluay5pbm5lckhUTUwgPSAnUGlua1NwYWNlQmVlJztcblxuZXhwb3J0IHtcbiAgICBmb290ZXJUZXh0XG59IiwiY2xhc3MgTmF2YmFyIHtcbiAgICBjb25zdHJ1Y3RvciAocGFyZW50LCBtYWluLCBtZW51LCBjb250YWN0cykge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICAgICAgdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzO1xuICAgIH1cblxuICAgIGFwcGVuZExpbmsocGFyZW50LCAuLi5jaGlsZHJlbikge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQuaHJlZiA9ICcjJztcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoYCR7Y2hpbGQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKX0tbmF2YCwgJ25hdmxpbmsnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZERpdih3cmFwcGVyLCBjbGFzc05hbWUsIC4uLmVsZW1zKSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbSBvZiBlbGVtcykge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUudG9Mb3dlckNhc2UoKSkgPyBlbGVtIDogJyc7XG4gICAgXG4gICAgICAgICAgICBpZiAodGVtcC50YWdOYW1lID09PSAnU0VDVElPTicpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRlbXApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbmF2YmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5uYXZiYXJEaXYuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG5cbm5hdmJhckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnRleHRDb250ZW50ID0gJ0NoYW1vbWlsZSBDYWZlJztcbmNvbnN0IGxpbmtzV3JhcHBlciA9IG5hdmJhckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5saW5rc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGlua3Mtd3JhcCcpO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG5jb25zdCBuYXZiYXIgPSBuZXcgTmF2YmFyKG5hdmJhckRpdiwgaG9tZSwgbWVudSwgY29udGFjdHMpO1xuXG5ob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xubWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbmNvbnRhY3RzLnRleHRDb250ZW50ID0gJ0NvbnRhY3RzJztcblxubmF2YmFyLmFwcGVuZExpbmsobGlua3NXcmFwcGVyLCBob21lLCBtZW51LCBjb250YWN0cyk7XG5cbmV4cG9ydCB7XG4gICAgbmF2YmFyRGl2LFxuICAgIGxpbmtzV3JhcHBlcixcbiAgICBuYXZiYXIsXG59IiwiY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZS1uYXYnKTtcblxuaG9tZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yJztcbmhvbWUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKS50ZXh0Q29udGVudCA9ICdTaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgb3JuYXJlIGZhdWNpYnVzJztcblxuXG5jb25zdCBtZW51QnRuID0gaG9tZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcbm1lbnVCdG4udGV4dENvbnRlbnQgPSAnT3BlbiBtZW51JztcblxuZXhwb3J0IHtcbiAgICBob21lLFxuICAgIG1lbnVCdG5cbn1cbiIsImNsYXNzIE1lbnVJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtTmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuaXRlbU5hbWUgPSBpdGVtTmFtZTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5jb25zdCBmb29kU2VjdGlvbiA9IFtcbiAgICB7aXRlbTE6IG5ldyBNZW51SXRlbSgnU3RyYXdiZXJyeSBtb3Vzc2UgY2FrZScsICcxMjAgVUFIJywgJ1N0cmF3YmVycnkgYW5kIHdoaXRlIGNob2NvbGF0ZSBtb3Vzc2UgY2FrZSB3aXRoIHNhYmzDqSBiYXNlJyl9LFxuICAgIHtpdGVtMjogbmV3IE1lbnVJdGVtKCdTd2VldCBibGFja2JlcnJ5IG1vdXNzZSB0YXJ0JywgJzk1IFVBSCcsICdCbGFja2JlcnJ5IG1vdXNzZSB0YXJ0IGhhcyBmcmVzaCBibGFja2JlcnJpZXMsIGNyZWFteSBjYXNoZXcgbW91c3NlLCBhbmQgYSBwdXJwbGUgc3dlZXQgcG90YXRvIHRvdXJiaWxsb24nKX0sXG4gICAge2l0ZW0zOiBuZXcgTWVudUl0ZW0oJ0xlbW9uIHRhcnQgd2l0aCBhIHNob3J0YnJlYWQgY3J1c3QnLCAnOTUgVUFIJywgJ0xlbW9uIHRhcnQgd2l0aCBhIHNob3J0YnJlYWQgY3J1c3QgYW5kIGEgbGVtb24gY3VyZCBmaWxsaW5nLiBTZXJ2ZWQgd2l0aCBhIGZldyBmcmVzaCBibHVlYmVycmllcycpfSxcbiAgICB7aXRlbTQ6IG5ldyBNZW51SXRlbSgnR2luZ2VyIGxheWVyIGNha2UnLCAnMTQwIFVBSCcsICdHaW5nZXIgbGF5ZXIgY2FrZSB0b3BwZWQgd2l0aCB3aW5lLXBvYWNoZWQgcGVhcnMgYW5kIGNyZWFtIGNoZWVzZSBmcm9zdGluZycpfSxcbiAgICB7aXRlbTU6IG5ldyBNZW51SXRlbSgnRGFyayBjaG9jb2xhdGUgZ2FuYWNoZSB0YXJ0JywgJzE1MCBVQUgnLCAnRGFyayBjaG9jb2xhdGUgZ2FuYWNoZSB0YXJ0IHRvcHBlZCB3aXRoIER1bGNlIGRlIExlY2hlIGFuZCBhIHNwcmlua2xpbmcgb2Ygc2VhIHNhbHQnKX0sXG5dO1xuXG5jb25zdCBkcmlua3NTZWN0aW9uID1bXG4gICAge2l0ZW0xOiBuZXcgTWVudUl0ZW0oJ0RvdWJsZSByaXN0cmV0dG8nLCAnMzAgVUFIJywgJ0hhcyBhIHNsaWdodGx5IHN3ZWV0ZXIsIG1vcmUgY29uY2VudHJhdGVkIGZsYXZvciB0aGFuIGVzcHJlc3NvLCAzMG1sJyl9LFxuICAgIHtpdGVtMjogbmV3IE1lbnVJdGVtKCdFc3ByZXNzbycsICczMCBVQUgnLCAnQSBzbWFsbCBzaG90IG9mIGNvZmZlZSwgMzAgbWwuIENhbiBhbHNvIGJlIHNlcnZlZCBhcyBhIGRvdWJsZSBzaG90LiAnKX0sXG4gICAge2l0ZW0zOiBuZXcgTWVudUl0ZW0oJ0NhZmZlIGx1bmdvJywgJzM1IFVBSCcsICdBIHNpbmdsZSBlc3ByZXNzbyBzaG90IHdpdGggbW9yZSB3YXRlciwgMTMwIG1sJyl9LFxuICAgIHtpdGVtNDogbmV3IE1lbnVJdGVtKCdMYXR0ZScsICc1NSBVQUgnLCAnSW5jbHVkZXMgZGVjYWYsIHZlZ2FuLCBhbmQgbGFjdG9zZS1mcmVlIG9wdGlvbnMsIDE1MG1sJyl9LFxuICAgIHtpdGVtNTogbmV3IE1lbnVJdGVtKCdDYXBwdWNjaW5vJywgJzU1IFVBSCcsICdJbmNsdWRlcyBkZWNhZiwgdmVnYW4sIGFuZCBsYWN0b3NlLWZyZWUgb3B0aW9ucywgMTMwbWwnKX0sXG4gICAge2l0ZW02OiBuZXcgTWVudUl0ZW0oJ1RlYScsICczNSBVQUgnLCAnVmFyaWV0aWVzIG9mIGJsYWNrLCBncmVlbiwgYW5kIGhlcmJhbCB0ZWEsIDIwMG1sJyl9XG5dO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LW5hdicsICdtZW51Jyk7XG5cbi8vIGNyZWF0ZSBtYXJrdXAgZm9yIGZvb2Qgc2VjdGlvblxuY29uc3QgZm9vZFNlY3Rpb25EaXYgPSBtZW51LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbmNvbnN0IGZvb2RUaXRsZSA9IGZvb2RTZWN0aW9uRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSlcbmZvb2RUaXRsZS50ZXh0Q29udGVudCA9ICdGb29kJztcbmZvb2RUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG5mb29kU2VjdGlvbi5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGl0ZXJhdGVPYmplY3RzKGVsZW0sIGZvb2RTZWN0aW9uRGl2KTtcbn0pXG5cbi8vIGNyZWF0ZSBtYXJrdXAgZm9yIGRyaW5rcyBzZWN0aW9uXG5jb25zdCBkcmlua3NTZWN0aW9uRGl2ID0gbWVudS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5jb25zdCBkcmlua3NUaXRsZSA9IGRyaW5rc1NlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKVxuZHJpbmtzVGl0bGUudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcbmRyaW5rc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbmRyaW5rc1NlY3Rpb24uZm9yRWFjaChlbGVtID0+IHtcbiAgICBpdGVyYXRlT2JqZWN0cyhlbGVtLCBkcmlua3NTZWN0aW9uRGl2KTtcbn0pXG5cbi8vIHBvcHVsYXRlIGRpdiB3aXRoIG9iamVjdCB2YWx1ZXNcbmZ1bmN0aW9uIGl0ZXJhdGVPYmplY3RzKG9iaiwgY29udGFpbmVyKSB7XG4gICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheTsgY3JlYXRlIGEgZGl2IGZvciBlYWNoIG9iamVjdFxuICAgIGNvbnN0IG1lbnVJdGVtRGl2ID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIE9iamVjdC52YWx1ZXMob2JqKSkge1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggdGhlIHZhbHVlcyBvZiBlYWNoIG9iamVjdDsgY3JlYXRlIGEgcCB0YWcgZm9yIGV2ZXJ5IHZhbHVlXG4gICAgICAgIGZvciAoY29uc3QgdGV4dFZhbHVlIG9mIE9iamVjdC52YWx1ZXModmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgbWVudVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgbmF2YmFyRGl2LCBuYXZiYXJ9IGZyb20gXCIuL2xheW91dC9uYXZiYXJcIjtcbmltcG9ydCB7IGhvbWUsIG1lbnVCdG4gfSBmcm9tIFwiLi9tYWluLXBhZ2VcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0cyB9IGZyb20gXCIuL2NvbnRhY3RzXCI7XG5pbXBvcnQgeyBmb290ZXJUZXh0IH0gZnJvbSBcIi4vbGF5b3V0L2Zvb3RlclwiO1xuXG5jb25zdCBjb250ZW50V3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1jb250ZW50Jyk7XG5jb250ZW50V3JhcC5hcHBlbmRDaGlsZChuYXZiYXJEaXYpO1xuY29udGVudFdyYXAuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbi8vIGZvb3RlclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIHdlbGwsIGEgbGlzdCBvZiBuYXZpZ2F0aW9uIGxpbmtzXG5jb25zdCBsaW5rc0xpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZsaW5rJykpO1xuXG4vLyBzd2l0Y2ggYmV0d2VlbiB0aGUgc2VjdGlvbnMgXG5saW5rc0xpc3QuZm9yRWFjaChsaW5rID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQ2hpbGROb2Rlcyhjb250ZW50V3JhcCk7XG4gICAgbmF2YmFyLmFkZERpdihjb250ZW50V3JhcCwgbGluay5jbGFzc0xpc3RbMF0sIGNvbnRhY3RzLCBtZW51LCBob21lKTtcbn0pKVxuXG4vLyBvcGVuIG1lbnUgb24gYnRuIGNsaWNrXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUNoaWxkTm9kZXMoY29udGVudFdyYXApO1xuICAgIGNvbnRlbnRXcmFwLmFwcGVuZENoaWxkKG1lbnUpO1xufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=