import { hasFormatter } from "../interface/interface"

export class Invoice implements hasFormatter{
    client:string
    details:string
    amount:number
    constructor(a:string, b:string, c:number){
        this.client = a,
        this.details = b,
        this.amount= c
    }
    format(){
        return `${this.client} Owes ${this.amount} for ${this.details}`
    }
}