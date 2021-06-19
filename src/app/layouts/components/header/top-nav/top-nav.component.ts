import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyUnitService } from 'src/app/services/currency-unit.service';
import { DropdownContent } from '../top-nav-dropdown/top-nav-dropdown.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  language: DropdownContent[] = [
    {displayName: 'English', value: 'english'},
    {displayName: 'French', value: 'french'}
  ]

  currencyUnits: DropdownContent[] = [
    {displayName: 'USD', value: 'USD'},
    {displayName: 'EUR', value: 'EUR'},
    {displayName: 'GBP', value: 'GBP'},
    {displayName: 'PKR', value: 'PKR'},
    {displayName: 'CAD', value: 'CAD'},
    {displayName: 'JPY', value: 'JPY'}
  ]

  accountActions: DropdownContent[] = [
    { displayName: 'Sign In', value: '/sign-in'},
    { displayName: 'Register', value: '/register'},
    { displayName: 'Wishlist', value: '/wishlist'},
    { displayName: 'Cart', value: '/cart'},
    { displayName: 'Checkout', value: '/checkout'},
  ]
  constructor(
    private router: Router,
    private currencyService: CurrencyUnitService
  ) {}

  ngOnInit(): void {}
  handleLanguageChange(languageValue: string) {

  }

  handleCurrencyUnitChange(value: string) {
    this.currencyService.changeCurrencyUnit(value);
  }

  handleAccountActionChange(value: string) {
    // using router.navigateByUrl
  }

}
