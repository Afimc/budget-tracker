import { Component } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent {
  constructor(
    private budgetService: BudgetService
  ){}

  addTransaction(){
    this.budgetService.Addtransactions 
  }
}
