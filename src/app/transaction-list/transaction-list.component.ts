import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
    private router: Router
  ){}

  get transactions(){
    return this.budgetService.transactions
    
  }

  transactionForEdit(id:number){
    this.router.navigate([`transactions/edit/${id}`])
  }


}
