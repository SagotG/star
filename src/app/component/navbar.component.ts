import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" [routerLink]="['/']">Wookiepedia</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" [routerLink]="['/films']">Films</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" [routerLink]="['/people']">People</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" [routerLink]="['/planets']">Planets</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" [routerLink]="['/species']">Species</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" [routerLink]="['/starships']">Starships</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" [routerLink]="['/vehicles']">Vehicles</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
