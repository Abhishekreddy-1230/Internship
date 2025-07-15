import { Injectable } from '@angular/core';
import { Rule } from '@models/rule.model';
import { Customer } from '@models/customer.model';
import { EvaluatedCustomer } from '@models/evaluated-customer.model';

@Injectable({ providedIn: 'root' })
export class EvaluatorService {

  applyRules(rules: Rule[], customers: Customer[]): EvaluatedCustomer[] {
    return customers.map(customer => {
      for (const rule of rules) {
        const isMatch = rule.conditions.every(cond => {
          const fieldValue = customer[cond.field];
          switch (cond.operator) {
            case '<': return fieldValue < cond.value;
            case '>': return fieldValue > cond.value;
            case '<=': return fieldValue <= cond.value;
            case '>=': return fieldValue >= cond.value;
            case '==': return fieldValue == cond.value;
            default: return false;
          }
        });

        if (isMatch) {
          return { ...customer, risk: rule.riskLabel };
        }
      }

      return { ...customer, risk: 'Unknown' };
    });
  }
}
