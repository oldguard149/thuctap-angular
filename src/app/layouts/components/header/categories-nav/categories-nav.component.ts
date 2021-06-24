import { Component, OnInit } from '@angular/core';
import { staticMenuData } from './categories-nav.data';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.scss']
})
export class CategoriesNavComponent implements OnInit {
  showHam = false;
  showSubMenu = false;
  items;

  ngOnInit(): void {
    this.items = staticMenuData;
  }
}