import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchedulerUser } from '../Models/SchedulerUser/SchedulerUser';
import { Task } from '../Models/Tasks/Tasks';
import { QueryMonth } from '../Models/QueryMonth/QueryMonth';


@Injectable({
  providedIn: 'any',
})
export class ApiCallerService {
  constructor(private req: HttpClient) {}

  result!: string;
  userTask = new Task('')
  month = new QueryMonth();


  getServerDate() : any
  {
    return this.req.get("http://localhost:5000/api/user/serverdate", { responseType: 'json'});
  }

  getLogin(username: string, password: string) : any {
    let body = JSON.stringify({username,password});
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.req
      .post('http://localhost:5000/api/login', body, {
        headers: headers,
        responseType: 'text',
      });
  }


  getUsers() :Observable<any>
  {

  var headers_object = new HttpHeaders().set("Authorization", "Bearer " +  (localStorage.getItem("token")));

  return this.req.get("http://localhost:5000/api/user/users",{headers:headers_object,  responseType: 'json'});
  }


  getUserScheduler(SelectedMonth: any, SelectedDay: any, opCode: any) : any
  {
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    });

    this.month.Month = SelectedMonth;
    this.month.Day = SelectedDay;
    this.month.OpCode = opCode;
    let data = JSON.stringify(this.month);
    console.log(data);
  return this.req.post<any>("http://localhost:5000/api/user/Scheduler",data,{headers:headers,  responseType: 'json'});
  }

  getEmail() : any
  {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " +  (localStorage.getItem("token")));

    return this.req.get("http://localhost:5000/api/user/admins",{headers:headers_object,  responseType: 'json'});
  }

  DestroyToken()
  {
      localStorage.removeItem("token");
  }


  sendTask(userInput : string, checkDay : Date): any
  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    });


  this.userTask = new Task('');
  this.userTask.Task = userInput;
  this.userTask.DayTask = checkDay;
  console.log(this.userTask);
  let data = JSON.stringify(this.userTask);
  return this.req.put("http://localhost:5000/api/user/Tasks",data, {headers: headers} );
  }


  deleteTask(TaskId: number) : any
  {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    });
    
    return this.req.delete("http://localhost:5000/api/user/DelTask/?TaskId="+TaskId, {headers: headers});
  }
}
