import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SchedulerUser } from '../Models/SchedulerUser/SchedulerUser';
import { ApiCallerService } from '../Services/ApiCallerService.service';
import { PopupService } from '../Services/PopupService.service';
import {
  InserTaskPopup,
  TaskShownModalData,
  ToastTemplate,
} from '../Templates/Templates.component';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
})
export class SchedulerComponent implements OnInit {
  constructor(
    private apiCall: ApiCallerService,
    private popupService: PopupService
  ) {
    this.currentServerDate = new Date();
  }

  Months: Array<string> = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ];
  DayWeek: Array<string> = [
    'Lunedì',
    'Martedi',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
    'Domenica',
  ];
  SelectedMonth!: string;
  currentServerDate: Date = new Date();
  selectedView!: string;
  NumbSelectedView!: number;
  UserTaskList: SchedulerUser[] = []
  DaysToLoad: Array<any> = [];
  SelectedMonthNumb!: number;
  TaskToSave!: string;
  Toastr!: ToastTemplate;

  HashMap: Map<string, any> = new Map;

  Items: Array<SchedulerUser> = [];

  ngOnInit(): void {
    this.selectedView = 'Settimana';
    this.NumbSelectedView = 7;
    this.apiCall
      .getServerDate()
      .subscribe((result: any) => (this.currentServerDate = result));
  }

  SelectedViewAsInteger() {
    switch (this.selectedView) {
      case 'Settimana':
        this.NumbSelectedView = 7;
        break;
      case 'Mese':
        this.NumbSelectedView = 31;
        break;
      case 'Anno':
        this.NumbSelectedView = 365;
        break;
    }
  }

  SetLargeCardCouse(obj: any, index: number): any {
    let a = 'col-sm-2';
    let b = 'col-sm-1';
    //check day
    let day = obj.toLocaleDateString('it-IT', { weekday: 'long' });

    a = a.concat(this.LoadStyles(obj));
    b = b.concat(this.LoadStyles(obj));
    if (day == 'sabato' || day == 'domenica') {
      return b;
    } else {
      return a;
    }
  }

  SetSpaceOnFirstDay(obj: Date, index: number): any {
    if (index == 0) {
      let spaceNeed: number = 0;

      let day = obj.toLocaleDateString('it-IT', { weekday: 'long' });
      console.log(day);

      switch (day) {
        case 'lunedì':
          spaceNeed = 0;
          break;
        case 'martedì':
          spaceNeed = 1;
          break;
        case 'mercoledì':
          spaceNeed = 2;
          break;
        case 'giovedì':
          spaceNeed = 3;
          break;
        case 'venerdì':
          spaceNeed = 4;
          break;
        case 'sabato':
          spaceNeed = 5;
          break;
        case 'domenica':
          spaceNeed = 5;
          break;
      }
      return spaceNeed;
    }
  }

  SelectedValue(content: string) {
    this.Items = [];
    this.DaysToLoad = [];
    this.SelectedMonth = content;
    let convMonth = this.SwitchMonthToNumber(this.SelectedMonth);
    let today = new Date();
    today.setMonth(convMonth);
    today.setFullYear(2022);
    today.setDate(1);
    while (today.getMonth() === convMonth) {
      this.DaysToLoad.push(new Date(today));
      today.setDate(today.getDate() + 1);
    }
    this.SetSpaceToDays();

    this.apiCall.getUserScheduler(convMonth,0,0).subscribe((result : Array<SchedulerUser>) => {
      this.CreateObjects(result)
      this.SetValueToDayDatabase();
    });
  }

  CreateObjects(res: Array<SchedulerUser>)
  {
    for(let element of res)
    {
      this.UserTaskList.push(new SchedulerUser(element))
    }
  }
  SetValueToDayDatabase() 
  {
  
    for(let item of this.DaysToLoad)
    {
      let found = this.UserTaskList.find(tmp => tmp.Date.getDate() === item.getDate());
      if(found != undefined)
      {
        this.Items.push(found);
      }
      else
      {
        let add : SchedulerUser = new SchedulerUser();
        add.Date = new Date(item);
        this.Items.push(add);
      }
    }

    console.log(this.Items);
  
  }

  SetSpaceToDays() {
    let day: Date = new Date();
    let sum: number = 0;
    day = this.DaysToLoad[0];

    sum = this.SetSpaceOnFirstDay(day, 0);
    for (let i = 0; i < sum; i++) {
      this.DaysToLoad.unshift(new Date(0));
    }
  }

  SwitchMonthToNumber(month: string): number {
    let value: number = 0;
    switch (month) {
      case 'Gennaio':
        value = 0;
        break;
      case 'Febbraio':
        value = 1;
        break;
      case 'Marzo':
        value = 2;
        break;
      case 'Aprile':
        value = 3;
        break;
      case 'Maggio':
        value = 4;
        break;
      case 'Giugno':
        value = 5;
        break;
      case 'Luglio':
        value = 6;
        break;
      case 'Agosto':
        value = 7;
        break;
      case 'Settembre':
        value = 8;
        break;
      case 'Ottobre':
        value = 9;
        break;
      case 'Novembre':
        value = 10;
        break;
      case 'Dicembre':
        value = 11;
        break;
    }
    return value;
  }

  ButtonClassMonth(monthName: string): any {
    if (monthName == '') {
      return 'invisible';
    } else {
      return 'visible';
    }
  }

  LoadStyles(checkDay: Date): any {
    const year = checkDay.getFullYear();
    if (year == 1970) {
      return ' invisible';
    } else {
      return ' visibile';
    }
  }

  AddTask(day: Date) {
    this.popupService
      .openWithCustomParam(InserTaskPopup, day)
      .then((data: any) => this.SaveUserInput(data, day));
  }

  SaveUserInput(content: any, checkDay: Date) {
    if (content != undefined) {
      this.TaskToSave = content;
      console.log('sending req');
      this.apiCall
        .sendTask(this.TaskToSave, checkDay)
        .subscribe((data: any) => console.log(data));
    }
  }

  ShowTask(day: Date, opCode: number)
  {
    console.log(day.getDate())
    this.apiCall.getUserScheduler(day.getMonth(), day.getDate(), 1).subscribe((result : Array<SchedulerUser>) => { this.LoadShowTaskData(result, opCode)})
   
  }

  LoadShowTaskData(res: Array<SchedulerUser>, opCode: number)
  {
    let Tasks : Array<SchedulerUser> = [];
    let promise : any
    for(let element of res)
    {
      let add : SchedulerUser = new SchedulerUser(element);
      Tasks.push(add);
    }
    
    //building hashMap.
    this.HashMap.set("list", Tasks);
    this.HashMap.set("opCode",opCode);
    this.popupService.openWithHashMap(TaskShownModalData, this.HashMap).result.then(result => {this.HaveToReload(result)});
  }

  HaveToReload(result : any)
  {
    console.log(result);
      if(result == true)
      {
        setTimeout(function (){}, 50000);
        this.SelectedValue(this.SelectedMonth);
      }
  }
}
