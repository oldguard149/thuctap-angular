import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss']
})
export class CardActionComponent implements OnInit {
  @Input() showReview: boolean = true;
  @Input() showAddToCart: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
