import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Courses } from '../Models/courses';
import { NgbActiveModal, NgbAlert, NgbModule, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { PopupService } from '../Services/PopupService.service';
import { SchedulerUser } from '../Models/SchedulerUser/SchedulerUser';
import { Task } from '../Models/Tasks/Tasks';
import { ApiCallerService } from '../Services/ApiCallerService.service';


@Component({
  selector: 'popup-template',
  template: ` 

  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Seleziona operazione!</h4>
    <button type="button" class="close" aria-label="Close"   (click)="modal.dismiss(false)">
      <i class="bi bi-x-circle"></i>
    </button>
  </div>
  <div class="modal-body">
  {{datasource}}
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-outline-dark bg-danger" (click)="modal.close(false)" >
    <i class="bi bi-hand-thumbs-down-fill"></i>
    </button>
    <button type="button" class="btn btn-outline-dark bg-success" (click)="modal.close(true)" >
    <i class="bi bi-hand-thumbs-up-fill"></i>
    </button>
  </div>
  

   `,
})


export class popupTemplate {

constructor()
{}

  @Input() datasource!: string;
  @Input() modal!: any

}

@Component({
  selector: 'alert-template',
  template: ` 
  
  <ngb-alert [type]="alertType">{{ datasource}}</ngb-alert>
   `,
})

export class AlertTemplate  {

  @Input() datasource! : any
  @Input() alertType! : string
}



@Component({
  selector:'alert-template-popup',
  template : `<ngb-alert #alert [dismissible]="false" [type]="alertType" class="mw-100 mh-100">{{datasource}}</ngb-alert>

  `,
})

export class AlertTemplatePopup implements OnInit
{
  @Input() datasource! : string
  @Input() alertType! : string
  @Input() modal! : any;
  @ViewChild('alert') alert! : NgbAlert;
  @Input() fromParent! : any;


constructor() {}

ngOnInit()
{
   console.log(this.fromParent)
   if(this.fromParent != null)
   {
    this.datasource = this.fromParent.datasource;
    this.alertType = this.fromParent.alertType;
   }

}

DismissAll()
{
  this.alert.close();
  this.modal.close();
}

}

@Component({
  selector:'Insert-Task-Popup',
  template : `

   <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Inserisci Task</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
  </div>
  <div class="modal-body">
    <form>
      <div class="mb-3">
        <label for="dateOfBirth">Informazioni</label>
        <div class="input-group">
          <input id="value" class="form-control" placeholder="Inserisci qualcosa" name="dp" [formControl]="userInput">
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" [disabled]="!userInput.valid" (click)="ClosePopup()">Save</button>
  </div>

  `,
})

export class InserTaskPopup implements OnInit
{


  public userInput = new FormControl('', Validators.required);  


  constructor(public activeModal: NgbActiveModal){}

  ngOnInit(): void {
  }


  ClosePopup()
  {
    this.activeModal.close(this.userInput.value);
  }
  

}

@Component({

  selector:'Toast-Template',
  template : `   
  <ngb-toast #toastr
  [delay]="datasource.delay || 15000"
>
test
</ngb-toast>`,

})
export class ToastTemplate 
{
 
  constructor(public popupService: PopupService) {}

  @Input() datasource! : any  
}

@Component({
  selector:'Modal-Task-ShownData',
  template: ` <div class="modal-header">
  <h4 class="modal-title" id="modal-basic-title">Gestione Task</h4>
  <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss(changes)"></button>
</div>
<div class="modal-body">
    <ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0" *ngFor="let item of Tasks; index as i">
        <ngb-panel>
    <ng-template ngbPanelTitle>
      <span>&#9733; <b>Task</b> {{i+1}} &#9733;</span>
    <div *ngIf="OpCode == 1">
      <button type="button" class="btn btn-outline-danger" (click)="DeleteTask(item.TaskId)"><i class="bi bi-trash3"> Elimina</i></button>
    </div>
    </ng-template>
            <ng-template ngbPanelContent>
            {{item.Memo}}
    </ng-template>
  </ngb-panel>
</ngb-accordion>
      </div>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)="activeModal.close(changes)">Close</button>
</div> `
})

export class TaskShownModalData implements OnInit{


constructor(public activeModal: NgbActiveModal, private apiCaller : ApiCallerService) {}

@Input() fromParent : Map<string,any> =  new Map;

Tasks : Array<SchedulerUser> = [];
OpCode!: number;

changes : boolean = false;

  ngOnInit(): void 
  {
    this.GetDataFromHashMap();
  }

  GetDataFromHashMap()
  {
    this.Tasks = this.fromParent.get("list");
    this.OpCode = this.fromParent.get("opCode");

  }

  DeleteTask(TaskId: number)
  {
    this.apiCaller.deleteTask(TaskId).subscribe((result: any) => this.ReloadLocalData(result,TaskId));
  }


  ReloadLocalData(result : any, TaskId:number)
  {
    this.changes = true;
    if(result == true)
    {
     const found = this.Tasks.findIndex(tmp => tmp.TaskId == TaskId);
     if(found != undefined)
     {
      this.Tasks.splice(found, 1);
      if(this.Tasks.length == 0)
      {
        this.activeModal.close(this.changes);
      }
     }
    }
  }
}