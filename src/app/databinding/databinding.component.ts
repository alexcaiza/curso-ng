import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  user: Object = {
    id: 1,
    username: 'iparra',
    age: 35
  };

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: Object): void{
    console.log(user);
  }
  
}
