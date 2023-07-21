import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router } from '@angular/router';

import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    this.authService.hasAuthChange.next(true);
    return true;
  }
}
