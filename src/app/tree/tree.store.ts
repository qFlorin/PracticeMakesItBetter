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
import { exhaustMap, pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

type TreeState = {
  tree: FlatNode[];
  loading: boolean;
  error: string | null;
  selectedNode?: FlatNode;
  searchTerm: string;
};

const initialState: TreeState = {
  tree: [],
  loading: false,
  error: null,
  searchTerm: '',
};

export const TreeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ tree, searchTerm }) => ({
    treeCount: computed(() => tree().length),
    filteredTree: computed(() => {
      let result = tree();
      if (searchTerm()) {
        result = result.filter((node) => node.name.includes(searchTerm()));
      }
      return result;
    }),
    getNodeById: computed(() => {
      return tree().find((node) => node.id === 1);
    }),
  })),
  withMethods((store) => ({
    _setLoading() {
      patchState(store, { loading: true, error: null });
    },
    _setError(err: string) {
      patchState(store, { loading: false, error: err, tree: [] });
    },
    _setItems(items: FlatNode[]) {
      patchState(store, { tree: items, loading: false, error: null });
    },
  })),
  withMethods((store, treeService = inject(TreeService)) => ({
    loadAllNodes: rxMethod<void>(
      pipe(
        tap(() => store._setLoading()),
        switchMap(() => treeService.getTreeDataObservable$()),
        tap({
          next: (items: FlatNode[]) => store._setItems(items),
          error: (err: string) => store._setError(err),
        })
      )
    ),
    updateSearchTerm(value: string) {
      patchState(store, { searchTerm: value });
    },
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
