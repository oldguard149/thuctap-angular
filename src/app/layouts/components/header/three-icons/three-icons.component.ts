import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-three-icons',
  templateUrl: './three-icons.component.html',
  styleUrls: ['./three-icons.component.scss']
})
export class ThreeIconsComponent implements OnInit {
  @Input() textColor: string = 'text-gray-900';
  constructor() { }

  ngOnInit(): void {
  }

}
