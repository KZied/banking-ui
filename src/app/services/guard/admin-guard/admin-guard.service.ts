import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor(
    private router:Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    if (token){
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token as string);
      if (decodedToken.authorities[0].authority !== 'ROLE_ADMIN') {
        this.router.navigate(['access-denied']);
        return false;
      }
      return true;
    }
    return false;
  }
}

export const AdminGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AdminGuardService).canActivate(next, state);
}
