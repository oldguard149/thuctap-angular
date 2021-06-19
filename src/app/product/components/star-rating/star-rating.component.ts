import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Output() onRating: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  triggerRating(point: number) {
    this.onRating.emit(point);
  }

}
