import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setCurrentAction } from 'src/app/auth/state/auth.actions';
import { selectIsLoggedIn } from 'src/app/auth/state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class CanActivateWishlistGuard implements CanActivate {
  isLoggedIn$ = this.store.select(selectIsLoggedIn);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
      let canAccess = false;
      this.isLoggedIn$.subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          canAccess = true;
        } else {
          this.store.dispatch(
            setCurrentAction({
              currentActionUrl: '/wishlist',
              messages: [
                {
                  type: 'failure',
                  content: 'You need login before access wishlist',
                },
              ],
            })
          );
          this.router.navigateByUrl('/login');
        }
      }).unsubscribe();
      return canAccess;
  }
  constructor(private store: Store, private router: Router){}
}
