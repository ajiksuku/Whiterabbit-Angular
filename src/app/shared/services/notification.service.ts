import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

// Models
import { Notification } from './../../common';

// Components
import { NotificationComponent } from './../components/notification/notification.component';

@Injectable()
export class NotificationService {

    constructor(
        private snackbar: MatSnackBar
    ) { }

    /**
     * Shows the error message
     * @param message string
     */
    public showError(message: string) {
        this.snackbar.open(message, 'Close', {
            panelClass: ['error-class'],
            duration: 5000,
            horizontalPosition: 'center'
        })
    }


    /**
       * Shows the success message
       * @param message string
       */
    // public showSuccess(message: string) {
    //     this.snackbar.open(message, 'Close', {
    //         panelClass: ['success-message'],
    //         duration: 5000,
    //         horizontalPosition: 'center'
    //     })
    // }
    public showSuccess(message: string) {
        this.snackbar.open(message, 'Close', {
            duration: 5000,
            horizontalPosition: 'center'
        })
    }

    /**
     * Open up the Notification snackbar
     * @param notification Notification
     */
    public showAlert(notification: Notification) {
        this.snackbar.openFromComponent(NotificationComponent, {
            data: notification,
            duration: 8000,
            horizontalPosition: "right"
        })
    }

}
