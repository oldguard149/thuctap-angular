import { Component, OnInit } from '@angular/core';
import { items } from './categories-nav.data';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.scss']
})
export class CategoriesNavComponent implements OnInit {
  showHam = false;
  showSubMenu = false;
  items;

  constructor() {}

  ngOnInit(): void {
    this.items = items;
  }
}