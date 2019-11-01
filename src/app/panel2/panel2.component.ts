import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-panel2',
  templateUrl: './panel2.component.html',
  styleUrls: ['./panel2.component.css']
})
export class Panel2Component implements OnInit {

  @Input()
  user;

  @Output() onSelect = new EventEmitter<boolean>();
  
  public fired: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  public select()
  {
        this.fired = !this.fired;
        this.onSelect.emit(this.fired);
  }

}
