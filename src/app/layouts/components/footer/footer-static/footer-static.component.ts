import { Component, OnInit } from '@angular/core';
import { socialIconsData } from 'src/app/shared/socialIcons';
import { staticMenuData } from '../../header/categories-nav/categories-nav.data';

@Component({
  selector: 'app-footer-static',
  templateUrl: './footer-static.component.html',
  styleUrls: ['./footer-static.component.scss']
})
export class FooterStaticComponent implements OnInit {
  socialIcons = socialIconsData;
  menuData = staticMenuData;

  constructor() { }

  ngOnInit(): void {
  }

}
