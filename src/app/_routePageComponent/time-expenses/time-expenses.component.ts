import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-time-expenses',
  templateUrl: './time-expenses.component.html',
  styleUrls: ['./time-expenses.component.css']
})
export class TimeExpensesComponent implements OnInit {
  
  timeCategory:string[]=['GDJ-03-AL-0093','Leave', 'Travel','Client Site'];
  constructor() { }

  ngOnInit() {
  }

  saveTimeSheet(){
    alert("save");
  }
  submitTimeSheet(){
    alert("submit");
  }

  submitEspenses(){
    alert("submit expenses!");
  }
}
