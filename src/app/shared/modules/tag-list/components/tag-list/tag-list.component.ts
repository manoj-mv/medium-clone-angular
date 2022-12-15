import { Component, Input, OnInit } from '@angular/core';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';

@Component({
  selector: 'mdc-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsInput: PopularTagType[];
  constructor() { }

  ngOnInit(): void {
  }

}
