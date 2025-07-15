import { Component, OnInit } from '@angular/core';
import { Rule } from '@models/rule.model';
import { RuleService } from 'src/app/services/rule.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css'],
  imports: [CommonModule]
})
export class RuleListComponent implements OnInit {
  rules: Rule[] = [];

  constructor(private ruleService: RuleService) {}

  ngOnInit(): void {
    this.rules = this.ruleService.getRules();
  }

  deleteRule(id: string) {
    this.ruleService.deleteRule(id);
    this.rules = this.ruleService.getRules(); // Refresh list
  }
}
