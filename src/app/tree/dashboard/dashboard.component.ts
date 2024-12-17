import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { HierarchyTreeComponent } from '../hierarchy-tree/hierarchy-tree.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatTabsModule, RouterOutlet, HierarchyTreeComponent],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
