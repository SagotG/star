import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Starships } from '../models/starships.model';
import { StarshipService } from '../routes/starships/starship.service';
import { extractParams } from '../utils/tools';

interface StarshipExtra {
  name: string;
  model: string;
  manufacturer: string;
}

@Component({
  standalone: true,
  selector: `app-ship-card`,
  imports: [CommonModule],
  providers: [StarshipService],
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Starship</h5>
        <ng-template e ngFor let-ship [ngForOf]="shipsExtras">
          <span class="badge text-bg-primary">{{ ship.name }}</span>
          <span class="badge text-bg-secondary">{{ ship.model }}</span>
          <span class="badge text-bg-success">{{ ship.manufacturer }}</span>
        </ng-template>
      </div>
    </div>
  `,
})
export class ShipCardComponent implements OnInit {
  @Input() urls: string[] = [];

  shipsExtras: StarshipExtra[] = [];
  constructor(private readonly starshipService: StarshipService) {}
  ngOnInit(): void {
    this.urls.map((url) => {
      this.starshipService.getStarshipById(extractParams(url, '/')).subscribe({
        next: (values) => {
          this.shipsExtras = [...this.shipsExtras, this.setExtraList(values)];
          console.log(this.shipsExtras);
        },
      });
    });
  }

  private setExtraList(starship: Starships): StarshipExtra {
    if (starship) {
      const { name, model, manufacturer } = starship;
      return {
        name,
        model,
        manufacturer,
      };
    }
    return null;
  }
}
