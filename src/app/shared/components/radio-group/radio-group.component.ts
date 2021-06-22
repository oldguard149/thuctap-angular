import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  @Input() items: any;
  @Input() defaultValue = '';
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleChange(value: string) {
    this.change.emit(value);
  }

}
