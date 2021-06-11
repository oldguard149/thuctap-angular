import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-action',
  templateUrl: './product-card-action.component.html',
  styleUrls: ['./product-card-action.component.scss']
})
export class ProductCardActionComponent implements OnInit {
  @Input() showReview: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
