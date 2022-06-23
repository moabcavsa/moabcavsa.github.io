import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Courses } from './Models/courses';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor() {}


  data = {
    title: 'corso angular',
  };

  courses = COURSES;
  CurrentDateTime = new Date();



  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  OnClickComponent(c: any) {
    console.log('Cliccato il componente!', c);
  }

  onLogoClicked() {
    alert("Hello Word, dati "+ this.data.title);
}
}
