import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register(email, password) {
    this.userService.register(email, password).then(user => {
      console.log(user);
    }, error => {
        console.log('Error', error);
    });
  }
}
