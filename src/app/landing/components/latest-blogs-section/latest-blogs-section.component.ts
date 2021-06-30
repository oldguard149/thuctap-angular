import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-blogs-section',
  templateUrl: './latest-blogs-section.component.html',
  styleUrls: ['./latest-blogs-section.component.scss']
})
export class LatestBlogsSectionComponent implements OnInit {
  breakpoints = {
    524: { slidesPerView: 2 },
    998: { slidesPerView: 3 },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
