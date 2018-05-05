import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    login(email, password) {
        return new Promise((resolve, reject) => {
            this.http.post<User>('/rest/users/login', {
                email: email,
                password: password
            }).subscribe(resolve, reject);
        });
    }

    register(email, password) {
        return new Promise((resolve, reject) => {
            this.http.post<User>('/rest/users/register', {
                email: email,
                password: password
            }).subscribe(resolve, reject);
        });
    }

}
