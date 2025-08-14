import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { licenceQuestions, Question } from '../mocks/licence-questions';

@Component({
  selector: 'app-licence',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex">
      <div class="w-1/3 h-full flex items-center justify-center fixed">
        <header class="text-center mb-10">
          <h1 class="text-4xl sm:text-5xl font-bold text-slate-800">
            Angular & Tailwind Quiz
          </h1>
          <p class="text-slate-400 mt-2">
            Review questions with answers pre-revealed.
          </p>
          <nav class="flex justify-center items-center gap-2 sm:gap-4 mt-4">
            <button
              (click)="filterByCategory('All')"
              [ngClass]="{
                'bg-red-900 text-white shadow-lg': selectedCategory === 'All',
                'bg-slate-700 text-slate-300 hover:bg-slate-600':
                  selectedCategory !== 'All'
              }"
              class="px-4 py-2 rounded-full font-semibold transition-all duration-300"
            >
              All
            </button>
            <button
              (click)="filterByCategory('Multiple Answers')"
              [ngClass]="{
                'bg-red-900 text-white shadow-lg':
                  selectedCategory === 'Multiple Answers',
                'bg-slate-700 text-slate-300 hover:bg-slate-600':
                  selectedCategory !== 'Multiple Answers'
              }"
              class="px-4 py-2 rounded-full font-semibold transition-all duration-300"
            >
              Multiple Answers
            </button>
            <button
              (click)="filterByCategory('Mechanics')"
              [ngClass]="{
                'bg-red-900 text-white shadow-lg':
                  selectedCategory === 'Mechanics',
                'bg-slate-700 text-slate-300 hover:bg-slate-600':
                  selectedCategory !== 'Mechanics'
              }"
              class="px-4 py-2 rounded-full font-semibold transition-all duration-300"
            >
              Mechanics
            </button>
          </nav>
        </header>
      </div>
      <div class="w-2/3 ml-[35%]">
        <main class="min-h-screen  text-slate-100 p-4 sm:p-8 font-sans">
          <div class="max-w-4xl mx-auto">
            <section class="space-y-6">
              <div
                *ngFor="let question of filteredQuestions; let i = index"
                class=" rounded-2xl p-6 shadow-xl border"
              >
                <h2
                  class="text-xl font-bold bg-sky-900 rounded-md p-5 text-white mb-5"
                >
                  <span class="text-white mr-2">Q{{ i + 1 }}:</span>
                  {{ question.title }}
                </h2>

                <div class="space-y-3">
                  <div
                    *ngFor="let answer of question.answers"
                    [ngClass]="{
                      'bg-custom-darkgreen/80 bg-green-900': answer.isCorrect,
                      'bg-custom-indianred/80 bg-red-900': !answer.isCorrect
                    }"
                    class="flex items-center gap-4 p-3   font-bold"
                  >
                    <div *ngIf="answer.isCorrect; else wrongIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-green-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <ng-template #wrongIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-red-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </ng-template>

                    <span class="text-slate-100">{{ answer.text }}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  `,
})
export class LicenceComponent implements OnInit {
  // --- Component State ---
  selectedCategory: string = 'All';
  allQuestions: Question[] = [];
  filteredQuestions: Question[] = [];

  constructor() {
    // --- Initialize Question Data ---
    this.allQuestions = licenceQuestions;
  }

  ngOnInit(): void {
    // Initially, show all questions
    this.filteredQuestions = this.allQuestions;
  }

  /**
   * Filters the question list based on the selected category.
   * @param category The category to filter by ('All', 'Multiple Answers', 'Mechanics')
   */
  filterByCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredQuestions = this.allQuestions;
    } else {
      this.filteredQuestions = this.allQuestions.filter(
        (q) => q.category === category
      );
    }
  }
}
