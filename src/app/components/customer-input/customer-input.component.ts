import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '@models/customer.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CustomerInputComponent {
  customerForm: FormGroup;
  customerList: Customer[] = [];

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      income: [0, [Validators.required, Validators.min(0)]],
      creditScore: [0, [Validators.required, Validators.min(0)]],
      loanAmount: [0, [Validators.required, Validators.min(0)]]
    });

    this.refreshList();
  }

  onSubmit() {
    if (this.customerForm.valid) {
      this.customerService.addCustomer(this.customerForm.value);
      this.customerForm.reset();
      this.refreshList();
    }
  }

  refreshList() {
    this.customerList = this.customerService.getCustomers();
  }

  clearAll() {
    this.customerService.clearCustomers();
    this.refreshList();
  }
}
