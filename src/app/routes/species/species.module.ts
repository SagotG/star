import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';

@NgModule({
  declarations: [SpeciesComponent],
  exports: [SpeciesComponent],
  providers: [BsModalService],
  imports: [CommonModule, SpeciesRoutingModule],
})
export class SpeciesModule {}
