export interface RuleCondition {
  field: 'income' | 'creditScore' | 'loanAmount';
  operator: '<' | '>' | '<=' | '>=' | '==';
  value: number;
}

export interface Rule {
  id: string;
  conditions: RuleCondition[];
  riskLabel: 'High' | 'Medium' | 'Low';
}
