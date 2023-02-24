import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PeopleRoutingModule } from './poeple-routing.module';

@NgModule({
  declarations: [PeopleComponent],
  exports: [PeopleComponent],
  providers: [BsModalService],
  imports: [CommonModule, PeopleRoutingModule],
})
export class PeopleModule {}
