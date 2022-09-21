import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { member } from '../member.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) { }



  ngOnInit(): void {
  }
  username: string = "";
  login() {
    this.appService.getMembers().subscribe((members: member[]) => {
      let isUsersExists = members.filter((member) => member.firstName == this.username).length > 0 ? true : false;
      if (isUsersExists == true) {
        localStorage.setItem("isUsersExists", "true");
        this.router.navigate(["/members"]);
      } else {
        localStorage.setItem("isUsersExists", "false");
        alert("User in not auterized");
      }


    })


  }

}
