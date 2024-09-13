export type DocsType = {
  components: {
    general: string[];
    signals: string[];
    communication: string[];
    styling: string[];
  };
  pipes: {
    general: string[];
    asyncPipes: string[];
  };
};

export const TodoList: DocsType = {
  components: {
    general: [
      'Components -> Selectors -> Not pseudo class usecases, 3 examples',
      'Components -> Styling -> View encapsulation definitions, style scoping',
    ],
    communication: [
      'Write a input variable who should have an alias',
      'Write a input variable who should transform data to uppercase',
      'Write a input variable who should add decimal numbers with 2 fixed',
      'Write a input variable who should add px or rem at the end',
      'Write a input variable who should be required and only of 2 types, add default value',
      'Specify inputs in @Component decorator, what is for (if you extend a class and get the input from base class), inputs: ..',
      'Add a variable who should change based if input changes, in child',
      '*****',
      'Emit a simple event who executes a function in parent, clicking a button from child',
      'Pass data from child to parent in emmiter',
      'Add an alias for event emmiter',
      'Specify a component output with outputs: ',
      'Subscribe to get the value from output',
      'Learn output from observable',
      'Convert an output to an observable',
      '*****',
      'Project element in a div, add a h1 and a P, try 2 ng contents and see what happens',
      'Project in h2 ng content with an alias, ngProjectAs and try select="" to select where it goes',
      'Project dynamic expression in a div',
      '*****',
      'Add a style property with host binding',
      'Add a dynamic class property with host binding',
      'Add a onClick event with host binding',
      'What property has bigger specificity with host binding, dynamic vs static',
    ],
    signals: ['Signals', 'etc'],
    styling: ['Styling', 'etc'],
  },
  pipes: {
    general: ['Hallo there', 'etc'],
    asyncPipes: ['coco', 'test'],
  },
};
