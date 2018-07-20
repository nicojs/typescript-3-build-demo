import { Bank } from './Bank';
import { Customer } from '../shared/Customer';

const bank = new Bank('TypedBank', 'TYPESDBANK');
bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));

