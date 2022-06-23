import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AlertTemplatePopup } from '../Templates/Templates.component';
import { PopupService } from './PopupService.service';

@Injectable({
  providedIn: 'any',
})
export class LoginGuard implements CanActivate {
  constructor(private popupService: PopupService) {}

  hasUserToken: string = '';
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // check if user has token for access to this page.
    this.hasUserToken = localStorage.getItem('token') || '';
    if (this.hasUserToken != '') {
      return true;
    } else {
      let data = 
      {
        datasource: 'Non si hanno abbastanza privilegi per visualizzare la pagina.\n Effettua il login.',
        alertType: 'danger',
      };
      data.datasource.replace("\n", "<br>");
      this.popupService.openWithCustomParam(AlertTemplatePopup, data);
      return false;
    }
  }
}
