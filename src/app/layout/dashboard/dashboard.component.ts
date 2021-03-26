import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../shared/services/notification.service';
import { DashboardService } from '../../services/dashboard.service'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isLoading: Boolean = false;
  public fileList = [];
  public cid;
  public uid;
  constructor(private notification: NotificationService,private dialog: MatDialog,  private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getFileList();
  }

  public async getFileList() {
    try {
        console.log('called')
      this.isLoading = true;
      this.fileList = await this.dashboardService.getFileList();
      this.isLoading = false
    }
    catch (error) {
      this.isLoading = false
    }
  }

  public async deleteFile(file) {
    try {
      this.isLoading = true;
      const response = await this.dashboardService.deleteFile(file)
      this.notification.showSuccess(response['msg']);
      this.fileList = await this.dashboardService.getFileList();
      this.isLoading = false;
    }
    catch (error) {
      this.isLoading = false;
      this.notification.showError(error.message)
    }
  }

}
