import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login, resetMessages } from '../../state/auth.actions';
import { selectAuthMessages } from '../../state/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
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
    this.store.dispatch(login({ body: this.loginForm.value }));
  }

  get formControls() {
    return this.loginForm.controls;
  }
}
