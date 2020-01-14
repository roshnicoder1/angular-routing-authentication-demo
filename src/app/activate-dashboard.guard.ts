import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateDashboardGuard implements CanActivate {

  constructor(private authService: AuthenticationService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return this.authService.isValid(this.authService.getToken()).then((res)=>{
      let valid = res.isAuthenticated;
     return valid;
    })

  }
  
}
