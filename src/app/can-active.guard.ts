import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {

  membersList: Array<member> = [];
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (localStorage.getItem("isUsersExists") == "true") {
      return true;
    }
    else {
      return false;
    }

  }

}
