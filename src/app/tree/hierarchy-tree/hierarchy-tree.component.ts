import { CdkTreeModule } from '@angular/cdk/tree';
import {
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  OnInit,
  Signal,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  MatProgressSpinner,
  MatSpinner,
} from '@angular/material/progress-spinner';
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
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hierarchy-tree',
  templateUrl: './hierarchy-tree.component.html',
  styleUrls: ['./hierarchy-tree.component.scss'],
  imports: [CdkTreeModule, JsonPipe, MatSpinner, FormsModule],
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
  private cdr = inject(ChangeDetectorRef);
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
    const searchTerm = (event.target as HTMLInputElement).value;
    if (searchTerm !== '') {
      this.treeControl.expandAll();
      this.cdr.detectChanges();
    }
    this.store.updateSearchTerm(searchTerm);
  }

  selectNodeInComponent(node: FlatNode) {
    this.store.selectNode(node);
  }
  handleFocus() {
    console.log('Input focused');
    this.treeControl.expandAll();
    this.treeControl.expand(this.treeControl.dataNodes[0]);
    // Add your logic here
  }

  clickNode(event: Event) {
    console.log('Input clicked', event);
    this.treeControl.expandAll();
  }
}
