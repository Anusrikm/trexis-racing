import { Component, OnInit, OnChanges } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { AbstractFormGroupDirective, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { team } from '../team.model';
import { member } from '../member.model';

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  team: any;
  status: any;
}

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit, OnChanges {

  //teams = [];
  teams:team[] = [];


  SaveMember(){

  }
  
  memberDetailsForm = new FormGroup({
    'firstName': new FormControl(),
    'lastName': new FormControl(),
    'jobTitle': new FormControl(),
    'status' : new FormControl(),
    'rteam':new FormControl()

  })

  constructor(private appService: AppService, private router: Router) {

   }

  
  ngOnInit(): void {
    this.appService.getTeams().subscribe((teams:team[])=>{
        this.teams = teams;
    });
    this.appService.updateMember.subscribe((member:member)=>{

      

        this.memberDetailsForm.setValue({
          'firstName': member.firstName,
          'lastName': member.lastName,
          'jobTitle': member.jobTitle,
          'status' : member.status,
          'rteam' : member.team
        })
    })
  } 

  ngOnChanges() { }

   // TODO: Add member to members
   onSubmit(){

   }

}
