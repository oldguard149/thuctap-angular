import { Component, OnInit } from '@angular/core';
import { socialIconsData } from 'src/app/shared/socialIcons';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {
  socialIcons = socialIconsData;
  constructor() { }

  ngOnInit(): void {
  }

}
