import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { ReminderComponent } from './reminder/reminder.component';
import {AuthGuardService} from './services/auth-guard.service'

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService],
children:[
  {path:'notes',component:NotesComponent},
  {path:'',component:NotesComponent},
  {path:'archive',component:ArchiveComponent},
  {path:'reminder',component:ReminderComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
