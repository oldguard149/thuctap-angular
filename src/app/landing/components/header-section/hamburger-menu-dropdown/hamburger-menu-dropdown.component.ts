import { Component, Input, OnInit } from '@angular/core';

export interface HamburgerMenuDropdown {
  main: { link: string; name: string };
  subs: { link: string; name: string }[];
}

@Component({
  selector: 'app-hamburger-menu-dropdown',
  templateUrl: './hamburger-menu-dropdown.component.html',
  styleUrls: ['./hamburger-menu-dropdown.component.scss'],
})
export class HamburgerMenuDropdownComponent implements OnInit {
  @Input() item: HamburgerMenuDropdown = {
    main: {name: 'Home', link: '/'},
    subs: [
      {name: 'Home 1', link: '/'},
      {name: 'Home 2', link: '/'},
      {name: 'Home 3', link: '/'},
      {name: 'Home 4', link: '/'},
      {name: 'Home 5', link: '/'},
      {name: 'Home 6', link: '/'},
      {name: 'Home 7', link: '/'}
    ]
  }
  showSubMenu: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
