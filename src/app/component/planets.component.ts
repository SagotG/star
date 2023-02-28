import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../routes/planets/planets.service';
import { extractParams } from '../utils/tools';

@Component({
  standalone: true,
  selector: 'app-planets-card',
  providers: [PlanetsService],
  template: `
    <div class="card">
      <div class="card-body container">
        <h5 class="card-title">Planets</h5>
        <div class="row"></div>
      </div>
    </div>
  `,
})
export class PlanetsCardComponent implements OnInit {
  @Input() urls: string[] = [];
  planetsExtras: string[] = [];
  constructor(private readonly planetsService: PlanetsService) {}

  ngOnInit(): void {
    this.urls.map((url) => {
      this.planetsService.getStarshipById(extractParams(url, '/')).subscribe({
        next: (values) => {
          this.planetsExtras = [...this.planetsExtras, values.name];
          console.log(this.planetsExtras);
        },
      });
    });
  }
}
