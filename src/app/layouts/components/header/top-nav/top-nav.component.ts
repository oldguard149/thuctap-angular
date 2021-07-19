import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/auth/state/auth.actions';
import { selectIsAdmin, selectIsLoggedIn } from 'src/app/auth/state/auth.selectors';
import { CurrencyUnitService } from 'src/app/services/currency-unit.service';
import { DropdownContent } from '../top-nav-dropdown/top-nav-dropdown.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  isLoggedIn$ = this.store.select(selectIsLoggedIn);
  isAdmin$ = this.store.select(selectIsAdmin);
  constructor(
    private router: Router,
    private currencyService: CurrencyUnitService,
    private store: Store
  ) {}

  handleLanguageChange(languageValue: string) {
  }

  handleCurrencyUnitChange(value: string) {
    this.currencyService.changeCurrencyUnit(value);
  }

  handleAccountActionChange(value: string) {
    if (value === '/logout') {
      return this.store.dispatch(logout());
    }
    this.router.navigateByUrl(value);
  }

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
    { displayName: 'Log In', value: '/login'},
    { displayName: 'Register', value: '/register'},
    { displayName: 'Wishlist', value: '/wishlist'},
    { displayName: 'Cart', value: '/cart'},
    { displayName: 'Checkout', value: '/checkout'},
  ]

  accountActionsWhenLoggedIn: DropdownContent[] = [
    { displayName: 'Acount', value: '/orders'},
    { displayName: 'Log out', value: '/logout'},
    { displayName: 'Wishlist', value: '/wishlist'},
    { displayName: 'Cart', value: '/cart'},
    { displayName: 'Checkout', value: '/checkout'},
    { displayName: 'Orders', value: '/orders'},
  ]

}
