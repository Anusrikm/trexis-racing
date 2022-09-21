import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { member } from './member.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  api = 'http://localhost:8000';
  username: string = '';

  updateMember = new Subject<any>();

  constructor(private http: HttpClient) { }

  // Returns all members
  public getMembers():Observable<any> {
    return this.http
      .get(`${this.api}/members`)
      .pipe(catchError(this.handleError));
  }

  public getTeams():Observable<any>{
    return this.http
    .get(`${this.api}/teams`)
    .pipe(catchError(this.handleError));
  }

  public editMember(member:member){
     return this.http.put('${this.api}/members/'+ member.id , member);
  }

  public insertMember(member:member){
    return this.http.put('${this.api}/members' , member);
 }

  setUsername(name: string): void {
    this.username = name;
  }

    routerStatus = new Subject<any>();
    
  //   getLoggedIn(){
  //   let userName = localStorage.getItem("username");
  //   let isUsersExists = false;
  //   this.getMembers().subscribe((x:member[])=>{
  //     isUsersExists = x.filter(user => user.firstName === userName).length > 0 ? true : false;
  //     this.routerStatus.next(isUsersExists);
  //   })
  // }

  // getLoggedIn(userName:string){
  //   let isUsersExists = false;
  //    this.getMembers().subscribe((x:member[])=>{
  //     isUsersExists = x.filter(user => user.firstName === userName).length > 0 ? true : false;
  //     this.routerStatus.next(isUsersExists);
  //   })
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return [];
  }
}
