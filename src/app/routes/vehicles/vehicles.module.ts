import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';

@NgModule({
  declarations: [VehiclesComponent],
  exports: [VehiclesComponent],
  providers: [BsModalService],
  imports: [CommonModule, VehiclesRoutingModule],
})
export class VehiclesModule {}
