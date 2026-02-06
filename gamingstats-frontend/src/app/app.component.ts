import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gamingstats-frontend';
  backendStatus = 'Checking...';
  isHealthy = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.register({ username: 'health-check', password: 'pwd' }).subscribe({
      next: () => {
        this.backendStatus = 'Connected';
        this.isHealthy = true;
      },
      error: (err) => {
        if (err.status === 400 || err.status === 201 || err.status === 200) {
          this.backendStatus = 'Connected';
          this.isHealthy = true;
        } else {
          this.backendStatus = 'Connection Failed (HTTP ' + err.status + ')';
          this.isHealthy = false;
        }
      }
    });
  }
}
