import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'mdc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input('total') totalInput: number;
  @Input('limit') limitInput: number;
  @Input('currentPage') currentPageInput: number;
  @Input('url') urlInput: string;

  pagesCount: number;
  pages: number[];

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalInput / this.limitInput);
    this.pages = this.utilityService.range(0, this.pagesCount);
  }

}
