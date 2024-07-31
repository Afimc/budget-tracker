import { Injectable } from '@angular/core';
interface Itransaction {
    id: number,
    value: number,
    name: string,
    date: string
}
@Injectable({
  providedIn: 'root'
})

export class BudgetService {

  private _transactions:Itransaction[] = [
    {id:1, value:150, name:'shoping', date:'12.01.21',},
    {id:2, value:200, name:'petrol', date:'13.01.21',}
  ]
  constructor() { }

  get transactions() {
    return this._transactions
  }

  set Addtransactions(value:Itransaction){
    this._transactions.push(value)
  }
}
