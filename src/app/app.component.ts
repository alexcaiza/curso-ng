import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  interpolation: ['{{','}}'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'curso-ng';
  nombre = 'Alex Caiza';

  user1: Object = { 
    id: 1,
    username: 'acaiza',
    fecha: new Date
  }

  user2: Object = { 
    id: 1,
    username: 'jcaiza',
    fecha: new Date
  }

  public constructor(private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle('Curso de angular 6');
  }

  selectUser(selected) {
    console.log("Evento lanzado, selected es: " + selected);
  }

}
