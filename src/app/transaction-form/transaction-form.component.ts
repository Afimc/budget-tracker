import { Component } from '@angular/core';
import { BudgetService } from '../budget.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent {
  txname:string = '';
  txvalue:number= 0;
  txdate:string = ''
  constructor(
    private budgetService: BudgetService,
    private router: Router
  ){}

  addTransaction(){
    const newId = this.budgetService.transactions.length + 1
    this.budgetService.Addtransactions = {id:newId , value: this.txvalue, name: this.txname, date: this.txdate}
    this.router.navigate(['/transactions'])
 
  }
}
