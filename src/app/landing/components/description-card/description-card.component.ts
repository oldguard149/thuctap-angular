import { Component, Input, OnInit } from '@angular/core';

export interface DescriptionItem {
  image_url: string,
  header: string,
  text: string
}
@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {
  @Input() descriptionItem: DescriptionItem;  
  constructor() { }

  ngOnInit(): void {
  }

}
