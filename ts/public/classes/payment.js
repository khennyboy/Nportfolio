export class Payment {
    constructor(a, b, c) {
        this.recipient = a,
            this.details = b,
            this.amount = c;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
