import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: true,
  imports: [ChildComponent, CurrencyPipe, JsonPipe],
})
export class ParentComponent {}
