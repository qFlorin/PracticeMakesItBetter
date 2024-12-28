import { CdkTreeModule } from '@angular/cdk/tree';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  OnInit,
  signal,
  Signal,
  ViewChild,
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
import {
  FormsModule,
  FormControl,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-hierarchy-tree',
  templateUrl: './hierarchy-tree.component.html',
  styleUrls: ['./hierarchy-tree.component.scss'],
  imports: [CdkTreeModule, FormsModule, ReactiveFormsModule],
})
export class HierarchyTreeComponent implements OnInit {
  @ViewChild('tree') tree!: any;
  hasChild = hasChild;
  search = new FormControl<string>('');
  treeControl = treeControl;
  // searchForm = new FormGroup({
  //   search: new FormControl(''),
  // });
  public filteredTree: Signal<FlatNode[]> = computed(() => {
    const filterTree = (nodes: FlatNode[], term: string): FlatNode[] => {
      return nodes
        .map((node) => {
          if (node.name.toLowerCase().includes(term.toLowerCase())) {
            return node;
          }
          if (node.children) {
            const filteredChildren = filterTree(node.children, term);
            if (filteredChildren.length > 0) {
              return { ...node, children: filteredChildren };
            }
          }
          return null;
        })
        .filter((node) => node !== null) as FlatNode[];
    };

    let result = this.treeData;
    if (this.searchText() && this.searchText().length > 2) {
      return filterTree(this.treeData, this.searchText());
    }
    return result;
  });
  public filterText: string = '';

  treeStore = inject(TreeStore);
  nodeData: Signal<FlatNode[]> = this.treeStore.tree;

  treeData = TREE_NODE;
  private store = inject(TreeStore);
  searchText = signal('');

  constructor() {
    // this.filterTree();
  }
  treeDataSource = new MatTreeFlatDataSource(treeControl, treeFlattner);
  x = toObservable(this.treeStore.tree);
  ngOnInit() {
    this.treeDataSource.data = this.filteredTree();
    this.search.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log('value', value);
      this.searchText.set(value || '');
      this.treeDataSource.data = this.filteredTree();
      this.treeControl.expandAll();
      if (this.searchText() === '') {
        this.treeControl.collapseAll();
      }
      console.log('searchText', this.searchText());
    });
  }

  // searchNode(event: Event) {
  //   const searchTerm = (event.target as HTMLInputElement).value;
  //   this.store.updateSearchTerm(searchTerm);
  // }

  // searchNode(event: Event) {
  //   this.searchText.set((event.target as HTMLInputElement).value);
  //   this.treeDataSource.data = this.filteredTree();
  //   this.treeControl.expandAll();
  //   console.log('searchText', this.searchText());
  // }
  selectNodeInComponent(node: FlatNode) {
    this.store.selectNode(node);
  }
}
