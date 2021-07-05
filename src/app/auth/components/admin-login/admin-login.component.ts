import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { adminLogin, resetMessages } from 'src/app/auth/state/auth.actions';
import { selectAuthMessages } from 'src/app/auth/state/auth.selectors';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  authMessages$ = this.store.select(selectAuthMessages);

  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetMessages());
  }

  submit(): void {
    this.store.dispatch(adminLogin({body: this.loginForm.value}));
  }
}
