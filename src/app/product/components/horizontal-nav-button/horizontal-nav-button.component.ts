import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horizontal-nav-button',
  templateUrl: './horizontal-nav-button.component.html',
  styleUrls: ['./horizontal-nav-button.component.scss']
})
export class HorizontalNavButtonComponent implements OnInit {
  @Input() shape: 'round' | 'square' = 'square';
  @Input() backgroundColor: string = '#fff';

  @Output() prevClick: EventEmitter<any> = new EventEmitter();
  @Output() nextClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  triggerPrevClick() {
    this.prevClick.emit('');
  }

  triggerNextClick() {
    this.nextClick.emit('');
  }

}
