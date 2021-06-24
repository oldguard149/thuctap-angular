import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-nav-popup',
  templateUrl: './categories-nav-popup.component.html',
  styleUrls: ['./categories-nav-popup.component.scss']
})
export class CategoriesNavPopupComponent implements OnInit {
  @Input() hasHeaderTitle: false;
  @Input() headerTitle: string;
  @Input() items: any;
  @Input() parentLink: string;
  @Input() roundClass: string = 'rounded';
  constructor() { }

  ngOnInit(): void {
  }

}
