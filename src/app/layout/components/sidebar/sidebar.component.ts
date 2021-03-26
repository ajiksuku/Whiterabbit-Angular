import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service'


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    public userType;
    constructor(private auth : AuthenticationService) { }

    ngOnInit() {
        this.showMenu = '';
        this.userType = 1;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
