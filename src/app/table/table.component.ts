import { NgFor, NgIf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, AgGridAngular, InfiniteScrollDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TableComponent implements OnInit {
  items: any[] = [];
  page = 1;
  perPage = 50;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  onScroll() {
    this.page++;
    this.fetchItems();
  }

  fetchItems() {
    this.http
      .get<any[]>(
        `https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=${this.perPage}`
      )
      .subscribe((data: any[]) => {
        this.items = this.items.concat(data);
      });
  }
}
