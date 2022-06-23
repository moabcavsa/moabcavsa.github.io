import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Courses } from '../Models/courses';
import { popupTemplate } from '../Templates/Templates.component';
import { PopupService } from '../Services/PopupService.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ApiCallerService } from '../Services/ApiCallerService.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  constructor(private popupService: PopupService) {}

  @Input() Course!: Courses;
  @Input() CardIndex!: number;

  //se nell'outuput metto Output("courseSelected") e cambio il nome della proprietà continua a funzionare normalmente.
  @Output() courseSelected = new EventEmitter<Courses>();

  //local variables
  @ViewChild('el') p!:ElementRef;
  divElement!: HTMLElement;

  popupResult: boolean = false;
  subscription!: Subscription;

  OnCourseViewed() {
    console.log('bottone cliccato');
    this.courseSelected.emit(this.Course);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  IsCardVisible() {
    return this.Course.description.length > 10;
  }

  CardNgClass() {
    return {
      beginner: this.Course.category == 'BEGINNER',
      'course-card': true,
    };
  }

  CardStyles() {
    return {
      'text-decoration': 'Bold',
    };
  }

  OpenPopup(template: any) {
    this.divElement = this.p.nativeElement
    let a = this.popupService.open(template).closeResult((data: any) => {console.log(data)});
  }
}
