import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-countdown',
  templateUrl: './box-countdown.component.html',
  styleUrls: ['./box-countdown.component.scss']
})
export class BoxCountdownComponent implements OnInit {
  @Input() hours: number = 0;
  @Input() mins: number = 0;
  @Input() secs: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
