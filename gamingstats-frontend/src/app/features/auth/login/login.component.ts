import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    template: `
    <div class="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div class="glass w-full max-w-md p-8 rounded-2xl shadow-2xl animate-fade-in">
        <h2 class="text-3xl font-bold mb-6 text-center gradient-text">Welcome Back</h2>
        
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1">Username</label>
            <input 
              type="text" 
              [(ngModel)]="credentials.username" 
              name="username" 
              required
              class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your username"
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input 
              type="password" 
              [(ngModel)]="credentials.password" 
              name="password" 
              required
              class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            >
          </div>

          <div *ngIf="error" class="text-red-400 text-sm mt-2 text-center animate-shake">
            {{ error }}
          </div>

          <button 
            type="submit" 
            [disabled]="loading"
            class="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            {{ loading ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-slate-400">
          Don't have an account? 
          <a routerLink="/register" class="text-primary-400 hover:text-primary-300 font-medium cursor-pointer">Register here</a>
        </p>
      </div>
    </div>
  `
})
export class LoginComponent {
    credentials = { username: '', password: '' };
    loading = false;
    error = '';

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        this.loading = true;
        this.error = '';
        this.authService.login(this.credentials).subscribe({
            next: () => this.router.navigate(['/dashboard']),
            error: (err) => {
                this.error = 'Invalid username or password';
                this.loading = false;
            }
        });
    }
}
