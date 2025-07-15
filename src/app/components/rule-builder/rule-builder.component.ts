import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RuleService } from 'src/app/services/rule.service';
import { v4 as uuidv4 } from 'uuid'; // install using npm install uuid
import { Rule } from '@models/rule.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rule-builder',
  templateUrl: './rule-builder.component.html',
  styleUrls: ['./rule-builder.component.css'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule]
})
export class RuleBuilderComponent {
  ruleForm: FormGroup;

  constructor(private fb: FormBuilder, private ruleService: RuleService) {
    this.ruleForm = this.fb.group({
      conditions: this.fb.array([]),
      riskLabel: ['', Validators.required]
    });
    this.addCondition(); // Add 1 default condition
  }

  get conditions(): FormArray {
    return this.ruleForm.get('conditions') as FormArray;
  }

  addCondition() {
    const conditionGroup = this.fb.group({
      field: ['income', Validators.required],
      operator: ['<', Validators.required],
      value: [0, [Validators.required, Validators.min(0)]]
    });
    this.conditions.push(conditionGroup);
  }

  removeCondition(index: number) {
    this.conditions.removeAt(index);
  }

  onSubmit() {
    if (this.ruleForm.valid) {
      const rule: Rule = {
        id: uuidv4(),
        conditions: this.ruleForm.value.conditions,
        riskLabel: this.ruleForm.value.riskLabel
      };
      this.ruleService.addRule(rule);
      alert('Rule added!');
      this.ruleForm.reset();
      this.conditions.clear();
      this.addCondition();
    }
  }
}
