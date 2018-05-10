import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { StatsComponent } from './stats/stats.component';
import { AccsettingsComponent } from './accsettings/accsettings.component';
import { AdminComponent } from './admin/admin.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: 'stats',
        component: StatsComponent
      },
      {
        path: 'accsettings',
        component: AccsettingsComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'subjects',
        component: SubjectsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
