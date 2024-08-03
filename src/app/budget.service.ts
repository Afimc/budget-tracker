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
    {id:1, value:+1000, name:'salary', date:'12.01.21'},
    {id:2, value:-150, name:'shoping', date:'12.01.21'},
    {id:3, value:-200, name:'petrol', date:'13.01.21'},  
    {id:4, value:-350, name:'rent', date:'12.01.21'},
    
  ]
  constructor() { }

  get transactions() {
    return this._transactions
  }

  get amounts() {
    const positiveValues = this._transactions
    .filter(transaction => transaction.value > 0)
    .map(transaction => transaction.value);
  
  const negativeValues = this._transactions
    .filter(transaction => transaction.value < 0)
    .map(transaction => transaction.value);

  const sumPositive = positiveValues.reduce((acc, value) => acc + value, 0);
  const sumNegative = negativeValues.reduce((acc, value) => acc + value, 0);
  const totalSum = sumPositive + sumNegative;

    return {positiveValues,negativeValues,sumPositive,sumNegative,totalSum}
  }

  set Addtransactions(value:any){
    this._transactions.push(value)
    console.log({tr:this._transactions})
  }
}
