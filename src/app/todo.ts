type ListItem = {
  item: string;
};

export type ListType = {
  components: ListItem[];
  arrays: ListItem[];
};

export const TodoList: ListType = {
  components: [
    {
      item: 'Components -> Selectors -> Not pesudo class usecases, 3 examples',
    },
    {
      item: 'Components -> Styling -> View encapsulation definitions, style scoping',
    },
  ],
  arrays: [
    {
      item: '',
    },
  ],
};
