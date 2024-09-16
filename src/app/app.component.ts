import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './component-basics/parent/parent.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParentComponent,
    QuestionsComponent,
    ReactiveFormsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
