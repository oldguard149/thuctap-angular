import { Injectable } from '@angular/core';
import {  CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setCurrentAction } from 'src/app/auth/state/auth.actions';
import { selectIsLoggedIn } from 'src/app/auth/state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class CanLoadCustomerOrderGuard implements  CanLoad {
  isLoggedIn$ = this.store.select(selectIsLoggedIn);
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean  {
      let canAccess = false;
      this.isLoggedIn$.subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          canAccess = true;
        } else {
          this.store.dispatch(
            setCurrentAction({
              currentActionUrl: '/orders',
              messages: [
                {
                  type: 'failure',
                  content: 'You need login before access orders',
                },
              ],
            })
          );
          this.router.navigateByUrl('/login');
        }
      }).unsubscribe();
      return canAccess;
  }

  constructor(private store: Store, private router: Router) {}
}
