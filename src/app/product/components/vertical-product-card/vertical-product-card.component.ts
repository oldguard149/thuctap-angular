import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-product-card',
  templateUrl: './vertical-product-card.component.html',
  styleUrls: ['./vertical-product-card.component.scss']
})
export class VerticalProductCardComponent implements OnInit {
  @Input() productItem;
  constructor() { }

  ngOnInit(): void {
  }

}
