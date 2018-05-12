import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { BasicErrorDialogComponent } from './dialogs/basic-error-dialog/basic-error-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private dialog: MatDialog) { }

  routeWithAuthentication(route: string) {
    this.userService.authenticate().then(res => {
      console.log('success');
      this.router.navigate([route]);
    }, reject => {
      const dialogRef = this.dialog.open(BasicErrorDialogComponent, {
        hasBackdrop: true,
        autoFocus: true,
        width: '300px',
        data: {
          error: 'Nem vagy bejelentkezve!'
        }
      });
    });
  }

  routeWithAdminAuthentication(route: string) {
    this.userService.authenticateAdmin().then(res => {
      console.log(res);
      this.router.navigate([route]);
    }, reject => {
      const dialogRef = this.dialog.open(BasicErrorDialogComponent, {
        hasBackdrop: true,
        autoFocus: true,
        width: '300px',
        data: {
          error: 'Nincs jogosultságod az admin felület eléréséhez!'
        }
      });
    });
  }

  logout() {
    this.userService.authenticate().then(res => {
      // successfully logged out
    }, reject => {
      // aren't even logged in
    });
    this.userService.token = null;
    this.router.navigate(['']);
  }
}
