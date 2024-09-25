import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  constructor() {}

  getPosts(): Observable<Posts[]> {
    return this.http.get<PostsResponse[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getFakePosts(): Observable<Posts[]> {
    const fakePosts: Posts[] = [
      { userId: 1, id: 1, title: 'Fake Post 1', body: 'This is a fake post.' },
      {
        userId: 2,
        id: 2,
        title: 'Fake Post 2',
        body: 'This is another fake post.',
      },
    ];

    return new Observable<Posts[]>((observer) => {
      setTimeout(() => {
        observer.next(fakePosts);
        // observer.error(
        //   new Error('An error occurred while fetching fake posts.')
        // );
        observer.complete();
      }, 5000);
    });
  }
}
