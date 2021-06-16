import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu-dropdown',
  templateUrl: './hamburger-menu-dropdown.component.html',
  styleUrls: ['./hamburger-menu-dropdown.component.scss'],
})
export class HamburgerMenuDropdownComponent implements OnInit {
  @Input() items: any;
  @Input() parentLink: string;
  showIndexes: Set<number> = new Set();
  isClose: Set<number> = new Set();
  // isClosed = true;

  toggleDropdown(event, i: number) {
    console.log(event);
    this.showIndexes.has(i)
      ? this.showIndexes.delete(i)
      : this.showIndexes.add(i);
    this.isClose.has(i) ? this.isClose.delete(i) : this.isClose.add(i);
  }

  ngOnInit(): void {}
}
