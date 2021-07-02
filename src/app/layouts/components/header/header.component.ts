import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchProducts } from 'src/app/product-list/state/products.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchKey: [''],
    });
  }

  submit() {
    const searchKey = this.searchForm.get('searchKey').value;
    console.log(searchKey)
    this.router.navigate(['/search'], {
      queryParams: { q: searchKey },
    });
    this.store.dispatch(searchProducts({searchKey}))
  }
}
