import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../state/auth.actions';
import { selectAuthMessages } from '../../state/auth.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  authMessages$ = this.store.select(selectAuthMessages);
  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', ],
      first_name: ['', ],
      last_name: ['', ],
      address: ['', ],
      phone: ['', ],
      password: ['', ],
      confirmPassword: ['', ]
    });
  }

  submit() {
    console.log(this.registerForm.value);
    this.store.dispatch(register({body: this.registerForm.value}));
  }
}