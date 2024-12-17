import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener } from '@angular/material/tree';

export interface FlatNode {
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
    expandable: true,
    name: 'John Doe',
    level: 0,
    children: [
      {
        expandable: true,
        name: 'Jane Smith',
        level: 1,
        children: [
          {
            expandable: true,
            name: 'Alice Johnson',
            level: 2,
            children: [
              {
                expandable: true,
                name: 'Chris Evans',
                level: 3,
                children: [
                  {
                    expandable: false,
                    name: 'David Brown',
                    level: 4,
                    children: [],
                  },
                  {
                    expandable: false,
                    name: 'Emma Wilson',
                    level: 4,
                    children: [],
                  },
                ],
              },
              {
                expandable: false,
                name: 'Olivia Martinez',
                level: 3,
                children: [],
              },
            ],
          },
          {
            expandable: false,
            name: 'Sophia Anderson',
            level: 2,
            children: [],
          },
        ],
      },
      {
        expandable: false,
        name: 'Liam Thomas',
        level: 1,
        children: [],
      },
    ],
  },
  {
    expandable: true,
    name: 'Michael Scott',
    level: 0,
    children: [
      {
        expandable: true,
        name: 'Emily Davis',
        level: 1,
        children: [
          {
            expandable: true,
            name: 'Daniel Garcia',
            level: 2,
            children: [
              {
                expandable: false,
                name: 'Lucas Rodriguez',
                level: 3,
                children: [],
              },
              {
                expandable: false,
                name: 'Mia Hernandez',
                level: 3,
                children: [],
              },
            ],
          },
          {
            expandable: false,
            name: 'Amelia Lopez',
            level: 2,
            children: [],
          },
        ],
      },
      {
        expandable: false,
        name: 'James Gonzalez',
        level: 1,
        children: [],
      },
    ],
  },
];
