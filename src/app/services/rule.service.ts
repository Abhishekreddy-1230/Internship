import { Injectable } from '@angular/core';
import { Rule } from '@models/rule.model';

@Injectable({ providedIn: 'root' })
export class RuleService {
  private rules: Rule[] = [];

  getRules(): Rule[] {
    return this.rules;
  }

  addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  deleteRule(id: string): void {
    this.rules = this.rules.filter(r => r.id !== id);
  }
}
