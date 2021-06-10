import { Component, OnInit } from '@angular/core';
import { DescriptionItem } from '../description-card/description-card.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  descriptionItems: DescriptionItem[] = [
    {
      image_url:
        'https://cdn.shopify.com/s/files/1/1939/5421/files/block-home1_70x60.png?v=1492711856',
      header: 'Five - star support',
      text: 'Hit up our FAQ’s or contact us with any questions or comments',
    },
    {
      image_url:
        'https://cdn.shopify.com/s/files/1/1939/5421/files/block1-home2_70x60.png?v=1493997378',
      header: 'QUALITY AND WARRANTY',
      text: 'Our reconditioned smartphones are guaranteed at least 6 months',
    },
    {
      image_url:
        'https://cdn.shopify.com/s/files/1/1939/5421/files/block1-home1_70x60.png?v=1492711880',
      header: 'No - hassle returns',
      text: "We'll take it back within the first 30 days - no questions asked",
    },
    {
      image_url:
        'https://cdn.shopify.com/s/files/1/1939/5421/files/block2-home1_70x60.png?v=1492711890',
      header: 'Socially conscious',
      text: "So far, we've helped change 20,000 lives through our partnership",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
