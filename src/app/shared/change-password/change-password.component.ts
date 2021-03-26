import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from './../../shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from './../../services/dashboard.service'
import { AuthenticationService } from './../../services/authentication.service'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public changePasswordForm: FormGroup
  public cancelForm: boolean = false;
  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data, public fb: FormBuilder, public router: Router, private route: ActivatedRoute, private auth: AuthenticationService, private alertService: NotificationService, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.changePasswordForm = this.fb.group({
      ID: [null],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    })
    console.log("data", this.data)

  }


  public async submit(form: FormGroup) {
    if (form.invalid == true && !this.cancelForm) {
      this.alertService.showError("Invalid input. Please correct the fields");
    }
    else {

      if (this.changePasswordForm.value.password != this.changePasswordForm.value.confirmPassword) {
        if (!this.cancelForm) {
          this.alertService.showError("Password does not match");
        }
        this.changePasswordForm.get('password').setValue('');
        this.changePasswordForm.get('confirmPassword').setValue('');
      }
      else {
        this.changePasswordForm.value.ID = this.data.uid
        delete (this.changePasswordForm.value.confirmPassword)
        try {
          const response = await this.auth.changePassword(this.changePasswordForm.value)
          console.log("response", this.changePasswordForm.value)
          if (!this.cancelForm) {
            this.alertService.showSuccess(response['message'])
          }
          this.dialog.closeAll();
        }
        catch (error) {
          if (!this.cancelForm) {
            this.alertService.showError(error.message)

          }
        }
      }
    }


  }

  public cancel() {
    this.cancelForm = true;
    this.dialog.closeAll();
  }
}