import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  @Input() content: string;
  @Input() isVisible: boolean = false;
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();

  handleOk() {
    this.confirm.emit();
  }

  handleCancel() {
    this.cancel.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
