import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';
import { AuthenticationService } from './../services/authentication.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private alertService: NotificationService,
        private auth: AuthenticationService
    ) { }
    public email;
    public password;
    public companyid;
    ngOnInit() {
        
    }

    public async onLogin(form) {
        try {
            this.router.navigateByUrl('/dashboard')
            
        }
        catch (error) {
            this.alertService.showError(error.error.message);
        }
    }
}
