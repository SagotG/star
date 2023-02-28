import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { People } from 'src/app/models/people.model';
import { extractParams } from 'src/app/utils/tools';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-people',
  template: `
    <div class="container">
      <div *ngIf="!loading; else loader" class="row">
        <ng-template ngFor let-people [ngForOf]="peopleList">
          <div class="col-3">
            <div class="card m-1">
              <div class="card-body p-2">
                <h5 class="card-title">{{ people.name }}</h5>
                <a
                  type="button"
                  class="btn btn-primary"
                  [routerLink]="['/people/', people.url]"
                  >Details
                </a>
              </div>
            </div>
          </div>
        </ng-template>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            *ngIf="nextPage"
            type="button"
            class="btn btn-md btn-secondary"
            (click)="showMore()"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
    <ng-template #loader>
      <p>Loading...</p>
    </ng-template>
  `,
})
export class PeopleComponent implements OnInit {
  peopleList: People[] = [];
  nextPage: string = '1';
  prevPage: string = '';
  loading = false;

  constructor(private readonly peopleService: PeopleService) {}

  ngOnInit(): void {
    this.loadData(this.nextPage);
  }

  private loadData(page: string): void {
    this.loading = true;
    this.peopleService
      .getAllPeople(page)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (value) => {
          this.nextPage = extractParams(value?.next, '=');
          this.peopleList = [...this.peopleList, ...value.results];
        },
      });
  }

  showMore(): void {
    this.loadData(this.nextPage);
  }
}
