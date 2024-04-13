import { Invoice } from './classes/invoice.js';
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
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
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
