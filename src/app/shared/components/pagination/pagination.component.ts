import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number;
  @Input() totalItems: number;
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() parentLink:string = '';

  isFirst: boolean;
  isLast: boolean;
  paginationList: number[];
  showingItemsFrom: number;
  constructor(
  ) {

  }
  ngOnInit(): void {
    this.calculatePaginationInfo()
  }

  ngOnChanges(): void {
    this.calculatePaginationInfo();
  }

  calculatePaginationInfo() {
    this.currentPage === 1 ? this.isFirst = true : this.isFirst = false;
    this.currentPage === this.totalPages ? this.isLast = true : this.isLast = false;
    this.calculatePaginationList();
    this.showingItemsFrom = this.currentPage * this.pageSize - this.pageSize + 1;
    
  }


  calculatePaginationList() {
    this.paginationList = [];
    const current = this.currentPage;
    const totalPage = this.totalPages;
    const pageLimit = 4;
    let lowerLimit = Math.min(current, totalPage);
    let upperLimit = lowerLimit;
  
    for (let b = 1; b < pageLimit && b < totalPage;) {
      if (lowerLimit > 1) {
        lowerLimit--; b++;
      }
      if (b < pageLimit && upperLimit < totalPage) {
        upperLimit++; b++;
      }
    }
  
    for (let i = lowerLimit; i <= upperLimit; i++) {
      this.paginationList.push(i);
    }
  }

}
