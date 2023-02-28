import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';

@NgModule({
  declarations: [FilmsComponent],
  exports: [FilmsComponent],
  providers: [BsModalService],
  imports: [CommonModule, FilmsRoutingModule],
})
export class FilmsModule {}
