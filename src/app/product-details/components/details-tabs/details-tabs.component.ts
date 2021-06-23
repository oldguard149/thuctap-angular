import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ExampleProduct } from 'src/app/product/components/mock-data';

@Component({
  selector: 'app-details-tabs',
  templateUrl: './details-tabs.component.html',
  styleUrls: ['./details-tabs.component.scss'],
})
export class DetailsTabsComponent implements OnInit {
  @Input() product: Product = ExampleProduct;
  tabsName = [
    { label: 'product description', value: 'description' },
    { label: 'reviews', value: 'reviews' },
    { label: 'additional Information', value: 'additionalInfo' },
    { label: 'tags', value: 'tags' },
  ];
  reviewForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    title: ['', Validators.required],
    description: ['']
  });
  private activatedTabSubject = new BehaviorSubject(this.tabsName[0].value);
  activatedTab$ = this.activatedTabSubject.asObservable();
  trustedVideoUrls: any[] = [];
  showWriteReview = false;
  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.sanitizerVideoUrls();
  }

  showTab(value: string ) {
    this.activatedTabSubject.next(value);
  }

  sanitizerVideoUrls() {
    for (let i = 0; i < this.product.videos.length; i++) {
      const videoUrl = this.product.videos[i];
      this.trustedVideoUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl));
    }
  }

  submit() {
    console.log(this.reviewForm.value);
  }

  handleRating(value: number) {
    this.reviewForm.get('rating').setValue(value);
  }
}
