import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlanetRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';

@NgModule({
  declarations: [PlanetsComponent],
  exports: [PlanetsComponent],
  imports: [CommonModule, PlanetRoutingModule],
})
export class PlanetsModule {}
