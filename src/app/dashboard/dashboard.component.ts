import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(
    private budgetService: BudgetService
  ) { }
  get amounts(){
    return this.budgetService.amounts
    
  }
  ngOnInit(): void {
    
  }
}
