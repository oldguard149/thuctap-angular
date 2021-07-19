import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { updateProfile } from '../../state/auth.actions';
import {
  selectAuthMessages,
  selectUserProfile,
} from '../../state/auth.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required]
  });
  authMessages$ = this.store.select(selectAuthMessages);
  userProfile$ = this.store.select(selectUserProfile);

  private destroyed = new Subject<void>();
  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.userProfile$
      .pipe(takeUntil(this.destroyed))
      .subscribe((userProfile) => {
        if (userProfile) {
          this.form.patchValue({
            first_name: userProfile.first_name,
            last_name: userProfile.last_name,
            phone: userProfile.phone,
            address: userProfile.address,
          });
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  submit() {
    this.store.dispatch(updateProfile({ body: this.form.value }));
  }
  get formControls() {
    return this.form.controls;
  }
}
