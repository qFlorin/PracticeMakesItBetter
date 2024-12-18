import { CdkTreeModule } from '@angular/cdk/tree';
import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {
  FlatNode,
  hasChild,
  TREE_NODE,
  treeControl,
  treeFlattner,
} from './tree-helpers';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { TreeStore } from '../tree.store';
import { JsonPipe } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hierarchy-tree',
  templateUrl: './hierarchy-tree.component.html',
  styleUrls: ['./hierarchy-tree.component.scss'],
  imports: [CdkTreeModule, JsonPipe],
})
export class HierarchyTreeComponent implements OnInit {
  hasChild = hasChild;
  treeControl = treeControl;

  treeStore = inject(TreeStore);
  nodeData: Signal<FlatNode[]> = this.treeStore.filteredTree;

  treeData = TREE_NODE;
  private store = inject(TreeStore);
  searchText = this.store.searchTerm || '';
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}
  treeDataSource = new MatTreeFlatDataSource(treeControl, treeFlattner);
  x = toObservable(this.treeStore.filteredTree);

  ngOnInit() {
    this.x.subscribe((data) => {
      this.treeDataSource.data = data;
    });
  }

  selectNode(node: FlatNode) {
    // Pass the whole node object
    const navigationExtras: NavigationExtras = {
      state: {
        nodeData: node, // Pass the node data here
      },
      relativeTo: this.activatedRoute,
    };
    this.router.navigate(['./', node.id], navigationExtras);
  }

  searchNode(event: Event) {
    this.store.updateSearchTerm((event.target as HTMLInputElement).value);
  }

  set treeDataSourceData(source: any) {
    this.treeDataSource.data = this.treeStore.filteredTree();
  }

  get treeDataSourceData(): any {
    return this.treeDataSource.data;
  }
}
