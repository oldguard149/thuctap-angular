import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    {displayName: 'USD', value: 'usd'},
    {displayName: 'EUR', value: 'eur'},
    {displayName: 'GBP', value: 'gbp'},
    {displayName: 'PKR', value: 'pkr'},
    {displayName: 'CAD', value: 'cad'},
    {displayName: 'JPY', value: 'jpy'}
  ]

  accountActions: DropdownContent[] = [
    { displayName: 'Sign In', value: '/sign-in'},
    { displayName: 'Register', value: '/register'},
    { displayName: 'Wishlist', value: '/wishlist'},
    { displayName: 'Cart', value: '/cart'},
    { displayName: 'Checkout', value: '/checkout'},
  ]
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}
  handleLanguageChange(languageValue: string) {

  }

  handleCurrencyUnitChange(value: string) {

  }

  handleAccountActionChange(value: string) {
    // using router.navigateByUrl
  }

}
