import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../Models/UserAccount/UserAccount';
import { ApiCallerService } from '../Services/ApiCallerService.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  constructor(private Apicaller: ApiCallerService) {}

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  public userList: Array<UserAccount> = [];

  ngOnInit(): void {
     this.LoadUser();
  }

  LoadUser() {
    this.Apicaller.getUsers().subscribe(
      (data) => {
        this.collectionSize = data.length;
        this.userList = data.map((country: any, i: number) => ({ id: i + 1, ...country }))
        .slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize)
      },
      (error: any) => {
        console.log('data execute mail' + error[0]);
      }
    );
  }

}
