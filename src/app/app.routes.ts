import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuleBuilderComponent } from './components/rule-builder/rule-builder.component';
import { RuleListComponent } from './components/rule-list/rule-list.component';
import { CustomerInputComponent } from './components/customer-input/customer-input.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';


export const routes: Routes = [
  { path: '', redirectTo: 'rules', pathMatch: 'full' },
  { path: 'rules', component: RuleListComponent },
  { path: 'create', component: RuleBuilderComponent },
  { path: 'customers', component: CustomerInputComponent },
  { path: 'result', component: ResultDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

