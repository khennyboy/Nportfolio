import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listContainer.js';
import { Payment } from './classes/payment.js';
let greet = () => {
    return ('hello world');
};
let x = greet();
console.log(x);
let profile; //function sinatures
profile = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
profile('sheriff', 'hello');
const anchor = document.querySelector('a');
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
let doc;
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let values; //use of tuples
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    if (type.value === 'payment') {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
let invoices = [];
const invOne = new Invoice('mario', 'work on the mario website', 200);
invoices.push(invOne);
const invTwo = new Payment('mario2', 'work on the sheriff website', 400);
invoices.push(invTwo);
console.log(invoices);
const me = {
    name: 'sheriff',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    }
};
me.spend(20);
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'hello', age: 40 });
// Enums
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["DIRECTOR"] = 3] = "DIRECTOR";
    resourceType[resourceType["PERSON"] = 4] = "PERSON";
})(resourceType || (resourceType = {}));
console.log(resourceType);
