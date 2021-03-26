import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { AuthenticationService } from './../services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient,  private auth: AuthenticationService) { }


  
  
  public getDataFilter1 = (reportingFrom, reportingTo, comparisonFrom, comparisonTo, project, segment) => {
    const apiUrl = environment.apiBaseUrlNew + 'bid/file/getDashboard?reportingFrom=' + reportingFrom + '&reportingTo=' + reportingTo + '&comparisonFrom=' + comparisonFrom + '&comparisonTo=' + comparisonTo + '&project=' + project + '&segment=' + segment + '&filter=1' + '&userID=' + this.auth.user['uid']+ '&cid=' + this.auth.user['cid']+'&type='+this.auth.user['type'];
    return this.http.post(apiUrl, {}).toPromise();
  }
  public getDataFilter2 = (reportingYear, monthFrom, comparisonYear, monthTo, project, segment) => {
    const apiUrl = environment.apiBaseUrlNew + 'bid/file/getDashboard?reportingYear=' + reportingYear + '&monthFrom=' + monthFrom + '&comparisonYear=' + comparisonYear + '&monthTo=' + monthTo + '&project=' + project + '&segment=' + segment + '&filter=2' +  '&userID=' + this.auth.user['uid'] + '&cid=' + this.auth.user['cid']+'&type='+this.auth.user['type'];
    return this.http.post(apiUrl, {}).toPromise();
  }

  public getSegmentList(cid,uid) {
    return this.http.get(`${environment.apiBaseUrlNew}bid/common/commonApis?cid=${cid}&uid=${uid}`)
      .pipe(
        map(res => res['data'][0])
      )
      .toPromise();
  }



  public getProjectList = (sid) => {
    return this.http.get(`${environment.apiBaseUrlNew}bid/common/getProjectData?SID=${sid}&cid=1`)
      .pipe(
        map(res => res['data'][0]['projects'])
      )
      .toPromise()
  }

  public addUser = (data) => {
    const apiUrl = environment.apiBaseUrlNew + 'bid/user/register';
    return this.http.post(apiUrl, data).toPromise();
  }
  
  public updateUser = (data) => {
    const apiUrl = environment.apiBaseUrlNew + 'bid/user/update';
    return this.http.post(apiUrl, data).toPromise();
  }
  public updateUserProfile = (data) => {
    const apiUrl = environment.apiBaseUrlNew + 'bid/user/profileupdate';
    return this.http.post(apiUrl, data).toPromise();
  }

  public getFileList = () => {
    return this.http.get(`${environment.apiBaseUrlNew}listing`)
      .pipe(
        map(res => res['files'])
      )
      .toPromise()
  }

  public getUserProfile = (uid) => {
    return this.http.get(`${environment.apiBaseUrlNew}bid/user/profile?userID=${uid}`).toPromise()
  }

  public deleteFile = (file) => {
    return this.http.get(`${environment.apiBaseUrlNew}delete?file=${file}`).toPromise()
  }
}
// http://localhost:3000/bid/user/deleteUser?userID=15
// http://198.46.87.226:3000/bid/common/commonApis?cid=1
// http://198.46.87.226:3000/bid/common/getProjectData?SID=1&cid=1
