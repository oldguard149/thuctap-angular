import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    class: 'grid justify-center'
  }
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() buttonType: string = 'submit';
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  @Input() className: string = "bg-gray-900 hover:bg-brand";
  
  emitClickEvent() {
    this.buttonClick.emit('');
  }

}
