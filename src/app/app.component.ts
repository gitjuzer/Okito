import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  routeWithAuthentication(route: string) {
    this.userService.authenticate().then(res => {
      console.log('success');
      this.router.navigate([route]);
    }, reject => {
      this.router.navigate(['']);
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
