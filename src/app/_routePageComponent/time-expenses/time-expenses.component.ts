import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
];
@Component({
  selector: 'app-time-expenses',
  templateUrl: './time-expenses.component.html',
  styleUrls: ['./time-expenses.component.css']
})
export class TimeExpensesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  foods:string[]=['hello','bolo'];
  constructor() { }

  ngOnInit() {
  }

}
