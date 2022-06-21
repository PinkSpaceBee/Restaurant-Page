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
    {item1: new MenuItem('Double ristretto', '30 UAH', '30 ml')},
    {item2: new MenuItem('Espresso', '30 UAH', '60 ml')},
    {item3: new MenuItem('Caffe lungo', '35 UAH', '130 ml')},
    {item4: new MenuItem('Latte', '55 UAH', '150 ml. Includes decaf, vegan, and lactose-free options')},
    {item5: new MenuItem('Cappuccino', '55 UAH', '130 ml. Includes decaf, vegan, and lactose-free options')},
    {item6: new MenuItem('Tea', '35 UAH', '200 ml. Varieties of black, green, and herbal tea')}
];

const menu = document.createElement('section');
menu.classList.add('menu-nav');

// create markup for food section
const foodSectionDiv = menu.appendChild(document.createElement('div'));
foodSectionDiv.appendChild(document.createElement('p')).textContent = 'Food';

foodSection.forEach(elem => {
    iterateObjects(elem, foodSectionDiv);
})

// create markup for drinks section
const drinksSectionDiv = menu.appendChild(document.createElement('div'));
drinksSectionDiv.appendChild(document.createElement('p')).textContent = 'Drinks';

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

export {
    menu
}