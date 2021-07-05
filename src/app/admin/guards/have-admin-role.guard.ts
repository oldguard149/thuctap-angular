import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAdmin } from 'src/app/auth/state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class HaveAdminRoleGuard implements CanLoad {
  isAdmin$ = this.store.select(selectIsAdmin);
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | boolean | UrlTree {
      let canLoad = false;
      this.isAdmin$.subscribe((isAdmin) => {
        if (isAdmin) {
          canLoad = true;
        } else {
          this.router.navigateByUrl('/');
        }
      }).unsubscribe();
      console.log(canLoad)
      return canLoad;
  }

  constructor(private store: Store, private router: Router){
  }
}
