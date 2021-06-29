import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {
  @Input() categories: Category[]
  @Input() colors = [
    {label: 'Blue', value: 'color_blue'},
    {label: 'Red', value: 'color_red'},
    {label: 'White', value: 'color_white'}
  ]
  @Input() prices = [
    {label: '100', value: 'price_100'},
    {label: '150', value: 'price_150'},
    {label: '200', value: 'price_200'}
  ]
  @Output() colorAndPrice = new EventEmitter();

  ngOnInit(): void {
    console.log(this.categories);
  }

  handleColorAndPriceChange(value: string) {
    this.colorAndPrice.emit(value);
  }
}
