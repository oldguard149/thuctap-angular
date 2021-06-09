import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  host: {
    class: 'hidden'
  }
})
export class DropdownComponent implements OnInit {
  @Input() items: string[];
  constructor() { }

  ngOnInit(): void {
  }

  choseItem(item: string) {

  }

}
