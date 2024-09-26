import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
})
export class TableComponent implements OnInit {
  @ViewChild('filterInput') filterInput!: ElementRef;
  @ViewChild('customTable') customTable!: ElementRef;

  constructor() {}

  ngOnInit() {}

  filterTable() {
    const input = this.filterInput.nativeElement;
    const filter = input.value.toUpperCase();
    const table = this.customTable.nativeElement;
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
      tr[i].style.display = 'none';
      const td = tr[i].getElementsByTagName('td');
      for (let j = 0; j < td.length; j++) {
        if (td[j]) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
            break;
          }
        }
      }
    }
  }

  sortTable(n: number) {
    const table = this.customTable.nativeElement;
    let rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    switching = true;
    dir = 'asc';

    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];
        if (dir === 'asc') {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === 'desc') {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount === 0 && dir === 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
  }
}
