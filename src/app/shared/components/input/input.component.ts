import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() id: string;
  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  @Input() className: string =
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
  @Input() inputType: string = 'text';
  constructor() {}

  ngOnInit(): void {}
}
