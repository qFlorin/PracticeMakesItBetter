import { Component, inject, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeStore } from '../tree.store';
import { FlatNode } from '../hierarchy-tree/tree-helpers';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tree-item-details',
  templateUrl: './tree-item-details.component.html',
  styleUrls: ['./tree-item-details.component.scss'],
  imports: [JsonPipe],
})
export class TreeItemDetailsComponent implements OnInit {
  private readonly treeStore = inject(TreeStore);
  nodeData: Signal<FlatNode[]> = this.treeStore.filteredTree;
  loading = this.treeStore.loading;
  selectedNode = this.treeStore.getById(1);
  treeCount = this.treeStore.treeCount();
  ngOnInit() {}
}
