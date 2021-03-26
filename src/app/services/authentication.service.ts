import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public _user: {};
  public companyId;

  constructor(private http: HttpClient) { }

  set user(payload) {
    this._user = payload;
  }

  get user() {
    return this._user;
  }

  //   public login = (credentials) => {
  //     const apiUrl = environment.apiBaseUrlNew + 'bid/user/login';
  //     return this.http.post(apiUrl, credentials).map(response => {
  //       this.user = response['user'];
  //       return response;
  //     }).toPromise()
  //   }

  // }
  public login(credentials) {
    console.log("here...")
    const apiUrl = environment.apiBaseUrlNew + 'bid/user/login';
    return this.http.post(apiUrl, credentials).pipe(
      map(
        res => {
          this.setSession(res['token']);
          this.user = res['user']
          console.log("cid_to_add_user", this.user)
          return res;
        }
      )
    ).toPromise()
  }

  public changePassword(password) {
    const apiUrl = environment.apiBaseUrlNew + 'bid/user/changePassword';
    return this.http.post(apiUrl, password).toPromise()
  }
  private setSession(token) {
    localStorage.setItem('token', token);
  }

  public validateToken(token) {
    const apiUrl = environment.apiBaseUrlNew + 'bid/user/validate';
    return this.http
      .get(apiUrl)
      .map(response => {
        this.user = response['data'];
        return response;
      })
      .catch(res => {
        if (res instanceof HttpErrorResponse) {
          return Observable.throw(res.error);
        }
      });
  }

}



// public listTrips(start, end, tripid, vehicleid, companyid, status) {
//   return this.http.get(`${environment.apiBaseUrl}schedule/listTrips?fromDate=${start}&toDate=${end}&tripID=${tripid}&vid=${vehicleid}&tripcategory=All&cid=${companyid}&Status=${status}`)
//       .pipe(
//       map(res => res['tripSchedule'])
//       )
//       .toPromise();
// }