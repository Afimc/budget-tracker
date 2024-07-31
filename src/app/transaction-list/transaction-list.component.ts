import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BudgetService } from '../budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  constructor(
    private budgetService: BudgetService,
  ){}
  get transactions(){
    return this.budgetService.transactions
    
  }



}
