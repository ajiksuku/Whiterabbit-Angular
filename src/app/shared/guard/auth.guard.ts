import { Injectable } from '@angular/core';
import {  CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private auth: AuthenticationService) {}

    canActivate() {
        return true;
    }
}

@Injectable()
export class AdminGuard implements CanActivateChild {
    constructor(private auth: AuthenticationService, private router: Router) { }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (!this.auth.user) {
            this.router.navigateByUrl('/login');
            return false;
        }
        // if (this.auth.user['type'] <= Roles.ADMIN) {
        if (this.auth.user['type'] === 1) {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}

