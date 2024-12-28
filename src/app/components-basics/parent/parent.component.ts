import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {
  CurrencyPipe,
  NgComponentOutlet,
  NgTemplateOutlet,
} from '@angular/common';
import { SiblingComponent } from '../sibling/sibling.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  imports: [ChildComponent, CurrencyPipe, NgComponentOutlet, NgTemplateOutlet],
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
