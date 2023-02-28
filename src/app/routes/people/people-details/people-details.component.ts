import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { FilmCardComponent } from 'src/app/component/films.component';
import { ShipCardComponent } from 'src/app/component/ship-card.component';
import { People } from 'src/app/models/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  standalone: true,
  imports: [CommonModule, ShipCardComponent, FilmCardComponent],
  selector: 'app-people-details',
  template: ` <div class="container">
    <div class="row">
      <h3>People Details</h3>

      <ng-container *ngIf="!loading">
        <ul class="list-group">
          <li class="list-group-item">
            <span class="fw-bold">name : </span>{{ people.name }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">height : </span>{{ people.height }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">mass : </span>{{ people.mass }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">hair_color : </span>{{ people.hair_color }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">skin_color : </span>{{ people.skin_color }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">eye_color : </span>{{ people.eye_color }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">birth_year : </span>{{ people.birth_year }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">gender : </span>{{ people.gender }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">homeworld : </span>{{ people.homeworld }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">created : </span>{{ people.created }}
          </li>
          <li class="list-group-item">
            <span class="fw-bold">edited : </span>{{ people.edited }}
          </li>
          <!-- cards -->
          <app-ship-card [urls]="people.starships"></app-ship-card>
          <app-film-card [urls]="people.films"></app-film-card>
        </ul>
      </ng-container>
    </div>
  </div>`,
})
export class PeopleDetailsComponent implements OnInit {
  public people: Partial<People> = {};

  loading = false;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (value) => {
        this.loading = true;
        this.peopleService
          .getPeopleById(value['id'])
          .pipe(finalize(() => (this.loading = false)))
          .subscribe({
            next: (people) => {
              this.people = {
                ...people,
                starships: people.starships ? people.starships : [],
              };
            },
          });
      },
    });
  }
}
