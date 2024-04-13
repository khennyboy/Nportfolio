import {Invoice} from './classes/invoice.js'
import { ListTemplate } from './classes/listContainer.js'
import { Payment } from './classes/payment.js'
import { hasFormatter } from './interface/interface.js'
let greet = ():string=>{
    return ('hello world')
}

let x = greet()
console.log(x)


let profile:(a:string, b:string)=>void //function sinatures
type arg = string //type aliases

profile = (name:arg, greeting:string)=>{
    console.log(`${name} says ${greeting}`)
}
profile('sheriff','hello')
const anchor = document.querySelector('a')!
console.log(anchor.href)

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

let doc:hasFormatter;

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', function(e:Event){
    e.preventDefault()
    let values: [string, string, number] //use of tuples
     values = [tofrom.value, details.value, amount.valueAsNumber]
    if(type.value ==='invoice'){
        doc = new Invoice(...values)
    }
    if(type.value === 'payment'){
        doc = new Payment(...values)
    }
    console.log(doc)
   list.render(doc, type.value, 'end')
   
})


let invoices: (Invoice|Payment)[] = []

const invOne = new Invoice('mario', 'work on the mario website', 200)
invoices.push(invOne)


const invTwo = new Payment('mario2', 'work on the sheriff website', 400)
invoices.push(invTwo)
console.log(invoices)

// interfaces
interface isPerson{
    name:string
    age:number
    speak(a:string):void
    spend(a:number):number
}


const me:isPerson = {
    name:'sheriff',
    age:30,
    speak(text:string):void{
        console.log(text)
    },
    spend(amount:number):number{
        console.log(`I spent ${amount}`)
        return amount
    }
}
me.spend(20)

// Generics
const addUID = <T extends {name:string}>(obj:T)=>{
    let uid = Math.floor(Math.random()*100)
    return {...obj, uid}
}

let docOne = addUID({name:'hello', age:40})

//Generics with interface
interface Resource <T>{
    uid:number,
    resourceName: string,
    data:T
}

// Enums
enum resourceType{
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}
console.log(resourceType)

