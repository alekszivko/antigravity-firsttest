import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly AUTH_TOKEN = 'auth_token';
    private currentUserSubject = new BehaviorSubject<string | null>(localStorage.getItem(this.AUTH_TOKEN));

    constructor(private http: HttpClient, private router: Router) { }

    login(credentials: any): Observable<any> {
        return this.http.post<any>('http://localhost:8080/auth/login', credentials).pipe(
            tap(response => {
                localStorage.setItem(this.AUTH_TOKEN, response.token);
                this.currentUserSubject.next(response.token);
            })
        );
    }

    register(userData: any): Observable<any> {
        return this.http.post('http://localhost:8080/auth/register', userData);
    }

    logout() {
        localStorage.removeItem(this.AUTH_TOKEN);
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        return !!this.currentUserSubject.value;
    }

    getToken(): string | null {
        return this.currentUserSubject.value;
    }
}
