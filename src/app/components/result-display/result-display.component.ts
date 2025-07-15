import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { RuleService } from 'src/app/services/rule.service';
import { EvaluatorService } from 'src/app/services/evaluator.service';
import { EvaluatedCustomer } from '@models/evaluated-customer.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css'],
  imports: [CommonModule]
})
export class ResultDisplayComponent implements OnInit {
  evaluated: EvaluatedCustomer[] = [];

  constructor(
    private customerService: CustomerService,
    private ruleService: RuleService,
    private evaluatorService: EvaluatorService
  ) {}

  ngOnInit(): void {
    const customers = this.customerService.getCustomers();
    const rules = this.ruleService.getRules();
    this.evaluated = this.evaluatorService.applyRules(rules, customers);
  }
}
