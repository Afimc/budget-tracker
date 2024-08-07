import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transaction-edit.component.html',
  styleUrl: './transaction-edit.component.scss'
})
export class TransactionEditComponent implements OnInit {
  txname: string = '';
  txvalue: number = 0;
  txdate: string = '';
  transactionId: number | null = null;

  constructor(
    private budgetService: BudgetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.transactionId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.transactionId !== null) {
      const transaction = this.budgetService.transactions.find(t => t.id === this.transactionId);
      if (transaction) {
        this.txname = transaction.name;
        this.txvalue = transaction.value;
        this.txdate = transaction.date;
      }
    }
  }

  edditTransaction() {
    if (this.transactionId !== null) {
      this.budgetService.editTransaction({
        id: this.transactionId,
        value: this.txvalue,
        name: this.txname,
        date: this.txdate
      });

      this.router.navigate(['/transactions']);
    }
  }
}
