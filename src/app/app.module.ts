import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './home/menu/menu.component';
import { ContentComponent } from './home/content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { UserService } from './user.service';
import { AccountComponent } from './account/account.component';
import { AccsettingsComponent } from './account/accsettings/accsettings.component';
import { StatsComponent } from './account/stats/stats.component';
import { AdminComponent } from './admin/admin.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';
import { SubjectService } from './subject/subject.service';
import { BasicErrorDialogComponent } from './dialogs/basic-error-dialog/basic-error-dialog.component';

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
    SubjectsComponent,
    BasicErrorDialogComponent,
  ],
  entryComponents: [
    BasicErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [UserService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
