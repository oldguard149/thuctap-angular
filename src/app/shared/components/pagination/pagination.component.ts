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
  @Output() pageChange = new EventEmitter<number>();
  
  constructor(
  ) {

  }
  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  handlePageChange(page: number) {
    this.pageChange.emit(page);
  }
  


}
