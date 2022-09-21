import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BannerComponent } from './banner/banner.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MembersComponent } from './members/members.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { CanActiveGuard } from './can-active.guard';



// We may be missing a route...
const ROUTES:Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'members',
    component: MembersComponent,
    canActivate: [CanActiveGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

// Notice how both FormsModule and ReactiveFormsModule imported...choices, choices!
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BannerComponent,
    MemberDetailsComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
