import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { UserAccount } from 'src/app/Models/UserAccount/UserAccount';
import { ApiCallerService } from 'src/app/Services/ApiCallerService.service';
import { PopupService } from 'src/app/Services/PopupService.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public apicaller: ApiCallerService,
    public popupservice: PopupService,
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  @ViewChild(NgbDropdown) private dropdown!: NgbDropdown;
  @ViewChild('popupTemplateAlert') private AlertPopuptemp!: TemplateRef<any>;
  @Output() LoggedUser = new EventEmitter<UserAccount>();

  formGroup!: FormGroup;
  user!: UserAccount;
  closeSession: boolean = false;

  ngOnInit(): void {}

  send() {
    if (!this.formGroup.valid) {
      console.log('not valid form');
      return;
    }
  }

  ExecuteLogin() {
    let a = this.apicaller
      .getLogin(
        this.formGroup.controls['email'].value,
        this.formGroup.controls['password'].value
      )
      .subscribe(
        (data: string) => {
          localStorage.setItem('token', data);
        },
        (error: string) => {
          console.log('data error' + error);
        }
      );

    if (localStorage.setItem != null) {
      this.dropdown.close();
    }
  }

  ExecuteEmails() {
    let a = this.apicaller.getEmail().subscribe(
      (data: any) => {
        this.user = new UserAccount(data);
        console.log(this.user);
        this.LoggedUser.emit(this.user);
      },
      (error: any) => {
        console.log('data execute mail' + error[0]);
      }
    );
  }

  DestroyToken() {
    console.log('distruggo sessione');
    this.apicaller.DestroyToken();
  }

  IsVisibleLogin(): any {
    if (
      localStorage.getItem('token') == '' ||
      localStorage.getItem('token') == null
    ) {
      return {
        visibility: 'visible',
      };
    } else {
      return {
        visibility: 'hidden',
      };
    }
  }

  IsVisibleLogout(): any {
    if (
      localStorage.getItem('token') == '' ||
      localStorage.getItem('token') == null
    ) {
      return {
        visibility: 'hidden',
      };
    } else {
      return {
        visibility: 'visible',
      };
    }
  }

  OpenPopup(content: any) {
    this.closeSession = this.popupservice
      .open(content)
      .then((data: any) => ((this.closeSession = data), this.ClosingPopup()));
  }

  ClosingPopup() {
    if (this.closeSession === true) {
      this.closeSession ? this.DestroyToken() : '', this.router.navigate([''], this.popupservice.open(this.AlertPopuptemp));
    }
  }
}
