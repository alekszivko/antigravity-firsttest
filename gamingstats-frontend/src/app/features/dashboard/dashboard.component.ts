import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="flex h-screen bg-slate-950 overflow-hidden">
      <!-- Sidebar -->
      <aside class="w-64 glass border-r border-slate-800 flex flex-col">
        <div class="p-6">
          <h1 class="text-2xl font-bold gradient-text">GamingStats</h1>
        </div>
        
        <nav class="flex-1 px-4 space-y-2">
          <a routerLink="/dashboard" class="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-xl transition-all group">
            <span class="mr-3 group-hover:scale-110 transition-transform">📊</span>
            Overview
          </a>
          <a routerLink="/games" class="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-xl transition-all group">
            <span class="mr-3 group-hover:scale-110 transition-transform">🎮</span>
            Games
          </a>
          <a routerLink="/matches" class="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-xl transition-all group">
            <span class="mr-3 group-hover:scale-110 transition-transform">⚔️</span>
            Matches
          </a>
        </nav>

        <div class="p-4 border-t border-slate-800">
          <button (click)="logout()" class="w-full flex items-center px-4 py-3 text-red-400 hover:bg-red-950/30 rounded-xl transition-all">
            <span class="mr-3">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto p-8">
        <header class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold">Dashboard Overview</h2>
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <p class="text-sm text-slate-400">Welcome back,</p>
              <p class="font-semibold text-primary-400">Commander</p>
            </div>
            <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 flex items-center justify-center text-xl font-bold">
              C
            </div>
          </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <!-- Stat Cards -->
          <div class="glass p-6 rounded-2xl hover:border-primary-500/50 transition-all cursor-default group">
            <p class="text-slate-400 mb-1">Total Games</p>
            <h3 class="text-3xl font-bold group-hover:text-primary-400 transition-colors">24</h3>
          </div>
          <div class="glass p-6 rounded-2xl hover:border-emerald-500/50 transition-all cursor-default group">
            <p class="text-slate-400 mb-1">Matches Played</p>
            <h3 class="text-3xl font-bold group-hover:text-emerald-400 transition-colors">156</h3>
          </div>
          <div class="glass p-6 rounded-2xl hover:border-amber-500/50 transition-all cursor-default group">
            <p class="text-slate-400 mb-1">Win Rate</p>
            <h3 class="text-3xl font-bold group-hover:text-amber-400 transition-colors">68%</h3>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="glass p-8 rounded-2xl">
                <h4 class="text-xl font-bold mb-6">Recent Activity</h4>
                <div class="space-y-4">
                    <div *ngFor="let i of [1,2,3]" class="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                        <div class="flex items-center space-x-4">
                            <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">🎮</div>
                            <div>
                                <p class="font-semibold">Counter-Strike 2</p>
                                <p class="text-xs text-slate-500">2 hours ago</p>
                            </div>
                        </div>
                        <span class="px-3 py-1 bg-emerald-950/50 text-emerald-400 text-xs font-bold rounded-full">WON</span>
                    </div>
                </div>
            </div>

            <div class="glass p-8 rounded-2xl">
                <h4 class="text-xl font-bold mb-6">Top Games</h4>
                <!-- Placeholder for a chart or simple list -->
                <div class="space-y-6">
                    <div *ngFor="let game of ['CS2', 'Valorant', 'Dota 2']" class="space-y-2">
                        <div class="flex justify-between text-sm">
                            <span>{{game}}</span>
                            <span class="text-slate-400">45% of total</span>
                        </div>
                        <div class="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div class="h-full bg-primary-500 rounded-full" [style.width]="'45%'"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  `
})
export class DashboardComponent {
    constructor(private authService: AuthService) { }

    logout() {
        this.authService.logout();
    }
}
