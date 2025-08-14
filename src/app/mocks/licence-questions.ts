export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  title: string;
  answers: Answer[];
  category: 'Multiple Answers' | 'Mechanics';
}
export const licenceQuestions: Question[] = [
  {
    title: 'Which of the following are valid lifecycle hooks in Angular?',
    category: 'Multiple Answers',
    answers: [
      { text: 'ngOnInit', isCorrect: true },
      { text: 'ngOnDestroy', isCorrect: true },
      { text: 'ngStart', isCorrect: false },
    ],
  },
  {
    title: 'How is data shared from a parent component to a child component?',
    category: 'Mechanics',
    answers: [
      { text: 'Using the @Output decorator', isCorrect: false },
      { text: 'Using the @Input decorator', isCorrect: true },
      { text: 'Through a shared singleton service', isCorrect: true },
    ],
  },
  {
    title: 'What does the `async` pipe do?',
    category: 'Mechanics',
    answers: [
      {
        text: 'It automatically subscribes to an Observable or Promise.',
        isCorrect: true,
      },
      {
        text: 'It converts a synchronous function into an asynchronous one.',
        isCorrect: false,
      },
      {
        text: 'It pauses template rendering until all data is loaded.',
        isCorrect: false,
      },
    ],
  },
  {
    title: 'Select all features of Angular Standalone Components.',
    category: 'Multiple Answers',
    answers: [
      { text: 'They do not require an NgModule.', isCorrect: true },
      {
        text: 'They can directly import other components and modules.',
        isCorrect: true,
      },
      {
        text: 'They are not compatible with older Angular versions.',
        isCorrect: false,
      },
    ],
  },
];
