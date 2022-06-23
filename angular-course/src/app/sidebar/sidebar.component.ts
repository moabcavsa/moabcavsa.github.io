import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  isNavbarCollapsed: boolean = false;

  ngOnInit(): void {
  }

  HiddenShowNav()
  {
    if(this.isNavbarCollapsed == false)
    {
      this.isNavbarCollapsed = true;
    }
    else
    {
      this.isNavbarCollapsed = false
    }
  }

}
