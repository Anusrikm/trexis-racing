import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { member } from '../member.model';
import { Member } from '../member-details/member-details.component';
import { team } from '../team.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: member[] = [];

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getMembers()
  }

  editMember(member:Member){
    
    this.appService.getTeams().subscribe((teams:team[])=>{
      let teamId = teams.filter((team)=> team.teamName == member.team)[0].id;
      member.status =  member.status == "Active" ? true : false;
      member.team = teamId;
      this.appService.updateMember.next(member);
    })

     
  }

  goToAddMemberForm() {
    
  }

  SaveMember(){
    
  }

  getMembers(){
    this.appService.getMembers().subscribe((members: member[]) => (this.members = members));
  }
}
