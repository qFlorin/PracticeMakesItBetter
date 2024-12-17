import { CdkTreeModule } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { hasChild, TREE_NODE, treeControl, treeFlattner } from './tree-helpers';
import { MatTreeFlatDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-hierarchy-tree',
  templateUrl: './hierarchy-tree.component.html',
  styleUrls: ['./hierarchy-tree.component.scss'],
  imports: [CdkTreeModule],
})
export class HierarchyTreeComponent implements OnInit {
  hasChild = hasChild;
  treeControl = treeControl;
  treeDataSource = new MatTreeFlatDataSource(treeControl, treeFlattner);
  treeData = TREE_NODE;
  constructor() {}

  ngOnInit() {
    this.treeDataSource.data = this.treeData;
  }
}
