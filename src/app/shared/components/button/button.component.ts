import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    class: 'grid justify-center'
  }
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  emitClickEvent() {
    this.buttonClick.emit('');
  }

}
