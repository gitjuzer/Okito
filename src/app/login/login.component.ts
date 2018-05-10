import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    showError = false;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    login(email, password) {
        this.userService.login(email, password).then(res => {
            console.log(res);
            this.userService.token = JSON.parse(JSON.stringify(res))['token'];
            this.router.navigate(['account/accsettings']);
            this.showError = false;
        }, error => {
            this.showError = true;
        });
    }

}
