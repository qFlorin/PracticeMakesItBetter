import {
  afterNextRender,
  afterRender,
  AfterRenderOptions,
  AfterViewInit,
  Component,
  ElementRef,
  inject,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {
  CurrencyPipe,
  JsonPipe,
  NgComponentOutlet,
  NgTemplateOutlet,
} from '@angular/common';
import { SiblingComponent } from '../sibling/sibling.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: true,
  imports: [
    ChildComponent,
    CurrencyPipe,
    JsonPipe,
    NgComponentOutlet,
    SiblingComponent,
    NgTemplateOutlet,
  ],
})
export class ParentComponent {
  sibling = SiblingComponent;
  elRef = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      this.elRef.nativeElement.querySelector('#currency').style.color = 'red';
    });
  }
}
