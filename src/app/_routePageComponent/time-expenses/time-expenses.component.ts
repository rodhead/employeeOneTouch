import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-expenses',
  templateUrl: './time-expenses.component.html',
  styleUrls: ['./time-expenses.component.css']
})
export class TimeExpensesComponent  {
  addForm: FormGroup;
  timeEntered=45;
  rows: FormArray;
  itemForm: FormGroup;
  fileName:String="upload File";
  timeCategory=[{value:'GDJ-03-AL-0093'},
 { value:'Leave'}, 
  {value:'Travel'},
  {value:'Client Site'}];
  timeFlag=true;
  constructor(
    private fb: FormBuilder,
    private router:Router
  ) { 
    this.addForm = this.fb.group({
    });

    this.rows = this.fb.array([]);

  }

  ngOnInit() {
    this.addForm.addControl('rows', this.rows);
    this.rows.push(this.createItemFormGroup());
  }

  changeTimeCategory(timeCat){
    console.log(timeCat);
  }
  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }
  onRemoveRow(rowIndex:number){
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      timeCategory: null,
      sun: null,
      mon: null,
      tue: null,
      wed: null,
      thu: null,
      fri: null,
      sat: null,
    });
  }

  saveTimeSheet(){
    console.log(this.addForm);
    console.log(this.timeCategory);
  }
  submitTimeSheet(){
    alert("submit");
  }

  submitEspenses(){
    alert("submit expenses!");
  }
  notificationRoute(){
    this.timeFlag=false;
    this.router.navigateByUrl("/notification")
  }


}
