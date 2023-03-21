import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  title = 'material-demo';
displayedColumns: string[] = ['item', 'amount', 'category', 'location','spendOn' ];
expenseEntries = ELEMENT_DATA;
}

export interface PeriodicElement {
  item: string;
  amount: string;
  category: string;
  location: string;
  spendOn: string;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
  {item: '1', amount: 'Lance', category: 'Rice', location: 'CCST',spendOn:'03-20-2023'},
  {item: '2', amount: 'Christian', category: 'Nuggets', location: 'CCST',spendOn:'03-20-2023'},
  {item: '3', amount: 'Ralph', category: 'Drinks', location: 'CCST',spendOn:'03-20-2023'},
  {item: '4', amount: 'Sannyboy', category: 'Dessert', location: 'CCST',spendOn:'03-20-2023'},
  {item: '5', amount: 'Romar', category: 'Soup', location: 'CCST',spendOn:'03-20-2023'},
  ];
