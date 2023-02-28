import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Films } from '../models/films.model';
import { FilmsService } from '../routes/films/films.service';
import { extractParams } from '../utils/tools';

interface FilmsExtra {
  title: string;
  episode_id: number;
  producer: string;
  release_date: string;
  link: string;
}

@Component({
  standalone: true,
  selector: `app-film-card`,
  imports: [CommonModule],
  providers: [FilmsService],
  template: `
    <div class="card">
      <div class="card-body container">
        <h5 class="card-title">Films</h5>
        <div class="row">
          <ul class="list-group col-3" *ngFor="let film of filmExtras">
            <li class="list-group-item">
              <span class="fw-bold">Title : </span>{{ film.title }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Episode : </span>{{ film.episode_id }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Producer : </span>{{ film.producer }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Realse : </span>{{ film.release_date }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
})
export class FilmCardComponent implements OnInit {
  @Input() urls: string[] = [];

  filmExtras: FilmsExtra[] = [];
  constructor(private readonly filmsService: FilmsService) {}
  ngOnInit(): void {
    this.urls.map((url) => {
      this.filmsService.getStarshipById(extractParams(url, '/')).subscribe({
        next: (values) => {
          this.filmExtras = [...this.filmExtras, this.setExtraList(values)];
          console.log(this.filmExtras);
        },
      });
    });
  }

  private setExtraList(films: Films): FilmsExtra {
    if (films) {
      const { title, episode_id, producer, release_date, url } = films;
      return {
        title,
        episode_id,
        producer,
        release_date,
        link: extractParams(url, '/'),
      };
    }
    return null;
  }
}
