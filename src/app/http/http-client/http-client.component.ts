import { Component, inject, signal } from '@angular/core';
import { PostsService, Posts } from './posts.service';
import { catchError, finalize, Observable, of, tap } from 'rxjs';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgFor],
})
export class HttpClientComponent {
  postsService = inject(PostsService);
  isError = signal(false);
  isLoading = signal(false);

  postsData$: Observable<Posts[]> = this.getPostData();

  getPostData(): Observable<Posts[]> {
    this.isLoading.set(true);
    console.log('Loading started');
    return this.postsService.getFakePosts().pipe(
      catchError((error) => {
        console.log('Error occurred');
        this.isError.set(true);
        return of([]);
      }),
      finalize(() => {
        console.log('Loading finished');
        this.isLoading.set(false);
      })
    );
  }
}
