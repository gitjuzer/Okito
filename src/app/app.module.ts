import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserService } from './user.service';
import { AccountComponent } from './account/account.component';
import { AccsettingsComponent } from './accsettings/accsettings.component';
import { StatsComponent } from './stats/stats.component';
import { AdminComponent } from './admin/admin.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    AccsettingsComponent,
    StatsComponent,
    AdminComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
