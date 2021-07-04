import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() items: any;
  @Input() defaultValue: string = '';
  @Input() width: string = 'max-content';
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleChange(value: any) {
    this.change.emit(value);
  }
}
