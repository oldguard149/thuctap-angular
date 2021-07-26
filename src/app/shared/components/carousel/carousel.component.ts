import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required components
import SwiperCore, { Pagination, Scrollbar, Swiper } from 'swiper/core';
// install Swiper components
SwiperCore.use([Pagination, Scrollbar]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  // There are two ways to solve this problem. First, bind templateRef through Input
  // @Input('cardTemplate') cardTemplateRef: TemplateRef<any>;
  // And second is use contentChild and we dont need Input anymore
  @ContentChild('swiperCard', { static: true, read: TemplateRef })
  cardTemplateRef: TemplateRef<any>;

  @Input() dataSource: any[];
  @Input() slidesPerView = 1;
  @Input() breakpoints: any = {
    599: { slidesPerView: 2 },
    824: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  };

  @ViewChild('swiperRef', { static: false }) private swiper?: SwiperComponent;
  private isEnd: boolean = false;
  private isBeginning: boolean = true;
  private totalItem: number;
  ngOnInit() {
    this.totalItem = this.dataSource.length;
  }

  changeSlide(direction: 'next' | 'prev') {
    if (direction === 'next') {
      // if current slide is at the end and user continue to click next btn, slide to first slide
      // similar for else but current slide is at the beginning
      if (this.isEnd) {
        this.swiper.swiperRef.slideTo(0);
      } else {
        this.swiper.swiperRef.slideNext();
      }
    } else {
      if (this.isBeginning) {
        this.swiper.swiperRef.slideTo(this.totalItem - 1);
      } else {
        this.swiper.swiperRef.slidePrev();
      }
    }
  }

  // watch the state of the slider
  slideChange(s: Swiper) {
    this.isBeginning = s.isBeginning;
    this.isEnd = s.isEnd;
  }
}
