import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  users: Array<string> = ["iparra", "iparra2", 'silvia', 'juan', 'andrés', 'manuel'];
    show: boolean = true;
    disabled: boolean = false;
    isBrand: boolean = true;
    bugType: number = 2;
    canSave: boolean = true;
    isUnchanged: boolean = true;
    isSpecial: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  public displayUser(user): void
    {
        console.log(user);
    }

    public setStyles()
    {
        let styles = {
            // CSS property names
            'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
            'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
            'font-size':   this.isSpecial    ? '32px'   : '12px',     // 24px
            'color': this.isBrand            ? '#EF997D': 'black'
        };
        return styles;
    }

}
