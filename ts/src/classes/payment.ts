import { hasFormatter } from "../interface/interface"

export class Payment implements hasFormatter {
    recipient:string
    details:string
    amount:number
    constructor(a:string, b:string, c:number){
        this.recipient = a,
        this.details = b,
        this.amount= c
    }
    format(){
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
    }
}



