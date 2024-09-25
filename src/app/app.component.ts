import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './component-basics/parent/parent.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { HttpClientComponent } from './http/http-client/http-client.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParentComponent,
    QuestionsComponent,
    ReactiveFormsComponent,
    HttpClientComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
