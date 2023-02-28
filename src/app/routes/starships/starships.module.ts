import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';

@NgModule({
  declarations: [StarshipsComponent],
  exports: [StarshipsComponent],
  providers: [BsModalService],
  imports: [CommonModule, StarshipsRoutingModule],
})
export class StarshipsModule {}
