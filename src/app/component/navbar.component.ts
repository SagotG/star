import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">MyApp</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" routerLink="/people">People</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" routerLink="/planets">Planets</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
