import { Component, signal, WritableSignal } from '@angular/core';
import { getRandomItems } from '../todo';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  standalone: true,
})
export class QuestionsComponent {
  x: WritableSignal<string[]> = signal([]);
  getItems() {
    this.x.set(getRandomItems());
  }
}
