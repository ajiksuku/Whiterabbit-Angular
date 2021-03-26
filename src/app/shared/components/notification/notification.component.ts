import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import * as moment from 'moment';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

    constructor( @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

    ngOnInit() {
        this.data.time = moment(this.data.time);
        this.data.time = this.getDateFormat(this.data.time);
        console.log("time", this.data.time);
        console.log(this.data);
    }

    getDateFormat(date: string) {
        if (!date || date === '') { return ''; }
        return moment.utc(date).local().format('DD/MM/YYYY hh:mm:ss ');
    }

}
