import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/app/Models/UserAccount/UserAccount';
import { ApiCallerService } from 'src/app/Services/ApiCallerService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private apiService : ApiCallerService) { }

  public UserAcc : UserAccount = new UserAccount();

  ngOnInit(): void {
   let numb =  this.tokenExpired((localStorage.getItem("token") || ""));  
   if(numb)
   {
    this.apiService.DestroyToken();
   }
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  GenerateUser(userLogged : any)
  {
    //userLogged is type of UserAccount because EventEmitter emit UserAccount obj.
    this.UserAcc = userLogged;
    console.info(this.UserAcc); 
  }

}
