import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf],
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  tableColumns: string[] = ['ID', 'Name', 'Age', 'Email'];
  tableRows: { [key: string]: any }[] = [
    { ID: 1, Name: 'John Doe', Age: 25, Email: 'john.doe@example.com' },
    { ID: 2, Name: 'Jane Smith', Age: 30, Email: 'jane.smith@example.com' },
    { ID: 3, Name: 'Sam Johnson', Age: 22, Email: 'sam.johnson@example.com' },
  ];

  getTableData() {
    return this.tableRows.map((row) => {
      let rowData: { [key: string]: any } = {};
      this.tableColumns.forEach((column) => {
        rowData[column] = row[column];
      });
      return rowData;
    });
  }
}
