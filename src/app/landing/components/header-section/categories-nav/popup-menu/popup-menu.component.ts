import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent implements OnInit {
  @Input() hasHeaderTitle: false;
  @Input() headerTitle: string;
  @Input() items: any;
  @Input() parentLink: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.parentLink)
  }

}
