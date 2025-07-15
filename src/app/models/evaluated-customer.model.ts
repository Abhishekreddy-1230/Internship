import { Customer } from './customer.model';

export interface EvaluatedCustomer extends Customer {
  risk: 'High' | 'Medium' | 'Low' | 'Unknown';
}
