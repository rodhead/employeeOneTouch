import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  aboutme:string="The Shiba Inu is the smallest of the six original and distinct sp"
  constructor() { }

  ngOnInit() {
  }

}
