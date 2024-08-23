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

  // private _transactions:Itransaction[] = []
  // [
  //   {id:1, value:+1000, name:'salary', date:'2024-08-11T05:49'},
  //   {id:2, value:-150, name:'shoping', date:'2024-08-11T05:49'},
  //   {id:3, value:-200, name:'petrol', date:'2024-08-11T05:49'},  
  //   {id:4, value:-350, name:'rent', date:'2024-08-11T05:49'},
    
  // ]
  constructor() { }

  get transactions() {
    const transactions = localStorage.getItem('transactions');
    return (transactions ? JSON.parse(transactions) : [] ) as Itransaction[];
    // return this._transactions
  
  }

  get amounts() {
    const positiveValues = this.transactions
    .filter(transaction => transaction.value > 0)
    .map(transaction => transaction.value);
  
  const negativeValues = this.transactions
    .filter(transaction => transaction.value < 0)
    .map(transaction => transaction.value);

  const sumPositive = positiveValues.reduce((acc, value) => acc + value, 0);
  const sumNegative = negativeValues.reduce((acc, value) => acc + value, 0);
  const totalSum = sumPositive + sumNegative;

    return {positiveValues,negativeValues,sumPositive,sumNegative,totalSum}
  }

  set Addtransactions(value:Itransaction){
    const transactions = [...this.transactions]
    transactions.push(value)
    this.setLocalStorage(transactions)
  }

  editTransaction(value:Itransaction){
    const index = this.transactions.findIndex(transaction => transaction.id === value.id);
    if (index !== -1) {
      const transactions = [...this.transactions]
      transactions[index] = value;
      this.setLocalStorage(transactions)
    }
  }

  deleteTransaction(id: number) {
    const transactions = this.transactions.filter(transaction => transaction.id !== id);
    this.setLocalStorage(transactions);
  }

  setLocalStorage(newTransactions:Itransaction[]){
    localStorage.setItem('transactions', JSON.stringify(newTransactions));
  }

}