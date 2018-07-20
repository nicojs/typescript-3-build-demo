import { Customer } from '../shared/Customer';
import { BankAccount } from '../shared/BankAccount';

export class Bank {

    readonly accounts: BankAccount[] = [];

    constructor(private name: string, private bic: string) { }

    public createAccount(customer: Customer){
        const account = new BankAccount(customer, this.bic);
        this.accounts.push(account);
        console.log(`[${this.name}] welcomes ${account.toString()}`);
    }
}
