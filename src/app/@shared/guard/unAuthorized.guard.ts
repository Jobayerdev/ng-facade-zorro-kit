import { CanActivate, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { storage } from '../services/utils/localStorage.utilservice';

@Injectable({
    providedIn: 'root',
})
export class UnAuthorizationGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate() {
        if (!Boolean(storage.getToken())) {
            return true;
        } else {
            this.router.navigate(['admin']);
            return false;
        }
    }
}
