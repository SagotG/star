import { NgModule } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { PeopleComponent } from './people.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PeopleRoutingModule } from './poeple-routing.module';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [PeopleComponent],
  exports: [PeopleComponent],
  providers: [BsModalService, PeopleService],
  imports: [CommonModule, PeopleRoutingModule, NgTemplateOutlet],
})
export class PeopleModule {}
