import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  user: Object = { 
    id: 1,
    username: 'acaiza',
    fecha: new Date
  }

  constructor() { }

  ngOnInit() {
    
  }

}
