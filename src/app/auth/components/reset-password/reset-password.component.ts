import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { changePassword } from '../../state/auth.actions';
import { selectAuthMessages } from '../../state/auth.selectors';
import { MustMatch } from '../register/register.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  messages$ = this.store.select(selectAuthMessages);
  resetPasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group(
      {
        password: ['', Validators.required],
        new_password: ['', Validators.required],
        confirm_new_password: ['', Validators.required],
      },
      { validator: MustMatch('new_password', 'confirm_new_password') }
    );
  }

  submit() {
    this.store.dispatch(changePassword({ body: this.resetPasswordForm.value }));
  }

  get formControls() {
    return this.resetPasswordForm.controls;
  }
}
