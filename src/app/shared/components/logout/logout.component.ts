import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private dialogRef: MatDialog
  ) { }

  ngOnInit() {

  }
  Logout() {
    this.router.navigate(['/login']);
    this.dialogRef.closeAll();
  }
  Cancel() {
    this.dialogRef.closeAll();
  }

}
