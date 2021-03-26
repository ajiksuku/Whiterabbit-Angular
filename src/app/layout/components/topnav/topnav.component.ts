import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from './../../../shared/components/logout/logout.component';
@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;

    constructor(public router: Router, private translate: TranslateService,private dialog: MatDialog) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    } 

    onLoggedout() {
        this.dialog.open(LogoutComponent, {
            width: '300px',
            maxHeight: '300px',
      
          });

       
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    toMyProfile(){
        this.router.navigateByUrl('/profile')
    }
}
