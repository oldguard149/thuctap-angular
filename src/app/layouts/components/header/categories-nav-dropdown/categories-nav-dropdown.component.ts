import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-nav-dropdown',
  templateUrl: './categories-nav-dropdown.component.html',
  styleUrls: ['./categories-nav-dropdown.component.scss']
})
export class CategoriesNavDropdownComponent implements OnInit {
  @Input() items: any;
  @Input() parentLink: string;
  showIndexes: Set<number> = new Set();
  isClose: Set<number> = new Set();
  // isClosed = true;

  toggleDropdown(event, i: number) {
    this.showIndexes.has(i)
      ? this.showIndexes.delete(i)
      : this.showIndexes.add(i);
    this.isClose.has(i) ? this.isClose.delete(i) : this.isClose.add(i);
  }
  ngOnInit(): void {
  }

}
