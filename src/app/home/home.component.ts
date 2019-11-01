import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre: string;
  title: string;
  paragragh: string;
  today: Date;
  users: Array<string>;
  courses: Array<string>;

  constructor() { }

  ngOnInit() {
    this.title = 'Curso de angular 6';
    this.nombre = 'Alex Julian';
    this.paragragh ='Busque, Almacene y Comparta fácilmente';
    this.today = new Date;
    this.users = ['Alex','Raul','Julian','Caiza'];
    this.courses = ['Angular 6','meteor','reacjs','vuejs','adonisjs','laravel5','codeigniter3'];
  }

}
