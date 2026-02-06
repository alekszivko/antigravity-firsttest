import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    template: `
    <div class="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div class="glass w-full max-w-md p-8 rounded-2xl shadow-2xl animate-fade-in">
        <h2 class="text-3xl font-bold mb-6 text-center gradient-text">Create Account</h2>
        
        <form (ngSubmit)="onSubmit()" #registerForm="ngForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1">Username</label>
            <input 
              type="text" 
              [(ngModel)]="userData.username" 
              name="username" 
              required
              class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              placeholder="Pick a username"
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input 
              type="password" 
              [(ngModel)]="userData.password" 
              name="password" 
              required
              class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            >
          </div>

          <div *ngIf="error" class="text-red-400 text-sm mt-2 text-center">
            {{ error }}
          </div>

          <button 
            type="submit" 
            [disabled]="loading"
            class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            {{ loading ? 'Creating account...' : 'Register' }}
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-slate-400">
          Already have an account? 
          <a routerLink="/login" class="text-primary-400 hover:text-primary-300 font-medium cursor-pointer">Sign in here</a>
        </p>
      </div>
    </div>
  `
})
export class RegisterComponent {
    userData = { username: '', password: '' };
    loading = false;
    error = '';

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        this.loading = true;
        this.error = '';
        this.authService.register(this.userData).subscribe({
            next: () => this.router.navigate(['/login']),
            error: (err) => {
                this.error = 'Registration failed. Try a different username.';
                this.loading = false;
            }
        });
    }
}
