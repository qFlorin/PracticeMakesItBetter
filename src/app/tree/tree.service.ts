import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FlatNode } from './hierarchy-tree/tree-helpers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  private http = inject(HttpClient);
  TREE_NODE: FlatNode[] = [
    {
      id: 1,
      expandable: true,
      name: 'John Doe',
      level: 0,
      children: [
        {
          id: 2,
          expandable: true,
          name: 'Jane Smith',
          level: 1,
          children: [
            {
              id: 3,
              expandable: true,
              name: 'Alice Johnson',
              level: 2,
              children: [
                {
                  id: 4,
                  expandable: true,
                  name: 'Chris Evans',
                  level: 3,
                  children: [
                    {
                      id: 5,
                      expandable: false,
                      name: 'David Brown',
                      level: 4,
                      children: [],
                    },
                    {
                      id: 6,
                      expandable: false,
                      name: 'Emma Wilson',
                      level: 4,
                      children: [],
                    },
                  ],
                },
                {
                  id: 7,
                  expandable: false,
                  name: 'Olivia Martinez',
                  level: 3,
                  children: [],
                },
              ],
            },
            {
              id: 8,
              expandable: false,
              name: 'Sophia Anderson',
              level: 2,
              children: [],
            },
          ],
        },
        {
          id: 9,
          expandable: false,
          name: 'Liam Thomas',
          level: 1,
          children: [],
        },
      ],
    },
    {
      id: 10,
      expandable: true,
      name: 'Michael Scott',
      level: 0,
      children: [
        {
          id: 11,
          expandable: true,
          name: 'Emily Davis',
          level: 1,
          children: [
            {
              id: 12,
              expandable: true,
              name: 'Daniel Garcia',
              level: 2,
              children: [
                {
                  id: 13,
                  expandable: false,
                  name: 'Lucas Rodriguez',
                  level: 3,
                  children: [],
                },
                {
                  id: 14,
                  expandable: false,
                  name: 'Mia Hernandez',
                  level: 3,
                  children: [],
                },
              ],
            },
            {
              id: 15,
              expandable: false,
              name: 'Amelia Lopez',
              level: 2,
              children: [],
            },
          ],
        },
        {
          id: 16,
          expandable: false,
          name: 'James Gonzalez',
          level: 1,
          children: [],
        },
      ],
    },
  ];

  getTreeDataObservable$() {
    return of(this.TREE_NODE).pipe(delay(2000));
  }

  getNodeById(id: number): FlatNode | undefined {
    const findNode = (nodes: FlatNode[]): FlatNode | undefined => {
      for (let node of nodes) {
        if (node.id === id) {
          return node;
        }
        if (node.children.length > 0) {
          const found = findNode(node.children);
          if (found) {
            return found;
          }
        }
      }
      return undefined;
    };
    return findNode(this.TREE_NODE);
  }

  getUsers$(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
