import { Injectable, computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface Todo {
  id: number;
  title: string; // Changed from 'text' to 'title' to match typical API responses
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  loading: boolean; // Add a loading state
  error: string | null; // Add an error state
}

@Injectable({ providedIn: 'root' })
export class TodosStore extends signalStore(
  withState<TodosState>({
    todos: [],
    filter: 'all',
    loading: false,
    error: null,
  }),
  withComputed(({ todos }) => ({
    activeCount: computed(
      () => todos().filter((todo) => !todo.completed).length
    ),
    completedCount: computed(
      () => todos().filter((todo) => todo.completed).length
    ),
    filteredTodos: computed(() => {
      const currentFilter = this.filter();
      switch (currentFilter) {
        case 'active':
          return todos().filter((todo) => !todo.completed);
        case 'completed':
          return todos().filter((todo) => todo.completed);
        default:
          return todos();
      }
    }),
  })),
  withMethods((store, http: HttpClient) => ({
    // Inject HttpClient
    loadTodos() {
      patchState(store, { loading: true, error: null });
      http
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .pipe(
          tap((todos) => patchState(store, { todos, loading: false })),
          tap({
            error: (error) =>
              patchState(store, { error: error.message, loading: false }),
          })
        )
        .subscribe();
    },
    addTodo(title: string) {
      patchState(store, { loading: true, error: null });
      http
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false,
          userId: 1,
        })
        .pipe(
          tap((newTodo) =>
            patchState(store, {
              todos: [...store.todos(), newTodo],
              loading: false,
            })
          ),
          tap({
            error: (error) =>
              patchState(store, { error: error.message, loading: false }),
          })
        )
        .subscribe();
    },
    toggleTodo(id: number) {
      const todo = store.todos().find((t) => t.id === id);
      if (!todo) return;

      patchState(store, { loading: true, error: null });
      http
        .patch<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          completed: !todo.completed,
        })
        .pipe(
          tap((updatedTodo) => {
            patchState(store, {
              todos: store
                .todos()
                .map((todo) => (todo.id === id ? updatedTodo : todo)),
              loading: false,
            });
          }),
          tap({
            error: (error) =>
              patchState(store, { error: error.message, loading: false }),
          })
        )
        .subscribe();
    },
    deleteTodo(id: number) {
      patchState(store, { loading: true, error: null });
      http
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .pipe(
          tap(() =>
            patchState(store, {
              todos: store.todos().filter((todo) => todo.id !== id),
              loading: false,
            })
          ),
          tap({
            error: (error) =>
              patchState(store, { error: error.message, loading: false }),
          })
        )
        .subscribe();
    },
    updateFilter(filter: 'all' | 'active' | 'completed') {
      patchState(store, { filter });
    },
    clearCompleted() {
      const completedIds = store
        .todos()
        .filter((todo) => todo.completed)
        .map((todo) => todo.id);
      if (completedIds.length === 0) return;

      patchState(store, { loading: true, error: null });
      // In a real app, you'd likely want to send a single request to clear all completed todos on the server
      // Here we simulate it with multiple requests
      completedIds.forEach((id) => {
        http
          .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .pipe(
            tap(() =>
              patchState(store, {
                todos: store
                  .todos()
                  .filter((todo) => !completedIds.includes(todo.id)),
              })
            ),
            tap({
              error: (error) =>
                patchState(store, { error: error.message, loading: false }),
            })
          )
          .subscribe();
      });

      patchState(store, { loading: false });
    },
  }))
) {
  filter = this.select((s) => s.filter);
  loading = this.select((s) => s.loading);
  error = this.select((s) => s.error);

  constructor(private http: HttpClient) {
    super(http);
  }
}
