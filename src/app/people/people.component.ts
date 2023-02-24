import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-people',
  template: `<button
      type="button"
      class="btn btn-primary"
      (click)="openModal(template)"
    >
      Create template modal
    </button>

    <ng-template #template>
      <div class="modal-header">
        <h4 class="modal-title pull-left">Modal</h4>
        <button
          type="button"
          class="btn-close close pull-right"
          aria-label="Close"
          (click)="modalRef?.hide()"
        >
          <span aria-hidden="true" class="visually-hidden">&times;</span>
        </button>
      </div>
      <div class="modal-body">This is a modal.</div>
    </ng-template>`,
})
export class PeopleComponent {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
