import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Learn man';

  getTitle() {}
}
