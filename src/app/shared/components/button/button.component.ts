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
  // @Input() className: string = " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  @Input() className: string = "";
  @Input() inputType: string = 'button';
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  emitClickEvent() {
    this.buttonClick.emit('');
  }

}
