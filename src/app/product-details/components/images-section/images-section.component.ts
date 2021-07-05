import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-images-section',
  templateUrl: './images-section.component.html',
  styleUrls: ['./images-section.component.scss'],
})
export class ImagesSectionComponent implements OnInit {
  @Input() images;// = ExampleImages;
  private imageUrlSubject;
  imageUrl$;
  breakpoints = {
    1024: { slidesPerView: 4 },
  };

  ngOnInit(): void {
    this.imageUrlSubject =new BehaviorSubject(this.images[0]);
    this.imageUrl$ = this.imageUrlSubject.asObservable();
  }

  changeImage(imgUrl: string) {
    this.imageUrlSubject.next(imgUrl);
  }
}

const ExampleImages = [
  'https://cdn.shopify.com/s/files/1/1939/5421/products/2m-800x800_5802909f-a680-495a-88c1-07aa0a4efbda_grande.jpg?v=1493998953',
  'https://cdn.shopify.com/s/files/1/1939/5421/products/6m-800x800_cae056d5-5c3a-4f37-a989-0f3903060181_grande.jpg?v=1493998953',
  'https://cdn.shopify.com/s/files/1/1939/5421/products/13m-800x800_4ed5d5c0-8f3b-4066-845c-6a544a6c893d_grande.jpg?v=1493998953',
  'https://cdn.shopify.com/s/files/1/1939/5421/products/6m-800x800_cae056d5-5c3a-4f37-a989-0f3903060181_grande.jpg?v=1493998953',
  'https://cdn.shopify.com/s/files/1/1939/5421/products/13m-800x800_4ed5d5c0-8f3b-4066-845c-6a544a6c893d_grande.jpg?v=1493998953',
  'https://cdn.shopify.com/s/files/1/1939/5421/products/6m-800x800_cae056d5-5c3a-4f37-a989-0f3903060181_grande.jpg?v=1493998953',
  'https://cdn.shopify.com/s/files/1/1939/5421/products/13m-800x800_4ed5d5c0-8f3b-4066-845c-6a544a6c893d_grande.jpg?v=1493998953'
];
