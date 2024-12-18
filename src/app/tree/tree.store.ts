import { FlatNode } from './hierarchy-tree/tree-helpers';
import {
  signalStore,
  withMethods,
  withState,
  patchState,
  withHooks,
  withComputed,
} from '@ngrx/signals';
import { TreeService } from './tree.service';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

type TreeState = {
  tree: FlatNode[];
  loading: boolean;
  error: string | null;
  selectedNode: FlatNode | null;
  searchTerm: string;
};

const initialState: TreeState = {
  tree: [],
  loading: false,
  error: null,
  searchTerm: '',
  selectedNode: null,
};

export const TreeStore = signalStore(
  withState(initialState),
  withComputed(({ tree, searchTerm, selectedNode }) => ({
    treeCount: computed(() => tree().length),
    filteredTree: computed(() => {
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

      let result = tree();
      if (searchTerm() && searchTerm().length > 2) {
        return filterTree(tree(), searchTerm());
      }
      return result;
    }),

    nodeSelected: computed(() => {
      if (selectedNode() === null) {
        return tree()[0];
      } else {
        return selectedNode();
      }
    }),
  })),
  withMethods((store) => ({
    updateSearchTerm(value: string) {
      patchState(store, { searchTerm: value });
    },
    selectNode(node: FlatNode) {
      patchState(store, { selectedNode: node });
    },
  })),
  withMethods((store, treeService = inject(TreeService)) => ({
    loadAllNodes: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() => treeService.getTreeDataObservable$()),
        tap({
          next: (items: FlatNode[]) =>
            patchState(store, { tree: items, loading: false, error: null }),
          error: (err: string) =>
            patchState(store, { loading: false, error: err, tree: [] }),
        })
      )
    ),

    getById: (id: number): FlatNode | undefined => {
      console.log('id', id, store.tree());
      return store.tree().find((node) => node.id === Number(id));
    },
  })),
  withHooks({
    onInit: (store) => {
      store.loadAllNodes();
    },
  })
);
