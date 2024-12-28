import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HierarchyTreeComponent } from '../hierarchy-tree/hierarchy-tree.component';
import { TreeStore } from '../tree.store';
import { MatSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    MatTabsModule,
    RouterOutlet,
    HierarchyTreeComponent,
    MatSpinner,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [TreeStore],
})
export class DashboardComponent implements OnInit {
  readonly treeStore = inject(TreeStore);
  constructor() {}
  isTreeHidden = false;

  toggleTree() {
    this.isTreeHidden = !this.isTreeHidden;
  }
  ngOnInit() {}
}
