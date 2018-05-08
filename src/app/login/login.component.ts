import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    showError = false;

    constructor(private userService: UserService) { }

    ngOnInit() {
    }

    login(email, password) {
        this.userService.login(email, password).then(user => {
            console.log(user);
            this.showError = false;
        }, error => {
            this.showError = true;
        });
    }

}
