import { ApiService } from './core/services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'lotr';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (!token) {
      this.login();
    }
  }

  login() {
    let request = {
      username: 'admin',
      password: 'admin',
    };
    this.apiService.login(request).subscribe({
      next: (res) => this.setSession(res),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  private setSession(auth: any) {
    // const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('token', auth.token);
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
}
