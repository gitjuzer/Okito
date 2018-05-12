import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {

    token: string;

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

    authenticate() {
        return new Promise((resolve, reject) => {
            const headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ' + this.token);
            this.http.post('/rest/users/auth', {},
                {
                    headers: headers
                }).subscribe(resolve, reject);
        });
    }

    authenticateAdmin() {
        return new Promise((resolve, reject) => {
            const headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ' + this.token);
            this.http.post('/rest/users/admin', {},
                {
                    headers: headers
                }).subscribe(resolve, reject);
        });
    }

}
