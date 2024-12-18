import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener } from '@angular/material/tree';

export interface FlatNode {
  id: number;
  expandable: boolean;
  name: string;
  level: number;
  children: FlatNode[];
}

export const hasChild = (_: number, node: FlatNode) => node.expandable;

export const treeControl = new FlatTreeControl<FlatNode>(
  (node) => node.level,
  (node) => node.expandable
);

const _transformer = (node: FlatNode, level: number): FlatNode => {
  return {
    id: node.id,
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level: node.level,
    children: node.children,
  };
};

export const treeFlattner = new MatTreeFlattener(
  _transformer,
  (node) => node.level,
  (node) => node.expandable,
  (node) => node.children
);

export const TREE_NODE: FlatNode[] = [
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
