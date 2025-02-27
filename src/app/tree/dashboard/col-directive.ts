import {
  Directive,
  ElementRef,
  AfterViewInit,
  ContentChildren,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[appTwoColumnLayout]',
})
export class TwoColumnLayoutDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  @ContentChildren('.box', { read: ElementRef }) boxes!: QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log('TwoColumnLayoutDirective - ngAfterViewInit called'); // ADD THIS LINE
    this.layoutBoxes();
  }

  layoutBoxes() {
    console.log('TwoColumnLayoutDirective - layoutBoxes called'); // ADD THIS LINE
    const container = this.el.nativeElement;
    const containerWidth = container.offsetWidth;
    const columnWidth = containerWidth / 2;
    const gap = 16;
    const columnHeights = [0, 0];

    if (!this.boxes) {
      console.log('TwoColumnLayoutDirective - No boxes found!'); // ADD THIS LINE
      return;
    }

    console.log('TwoColumnLayoutDirective - Boxes found:', this.boxes); // ADD THIS LINE

    this.boxes.forEach((boxRef) => {
      const box = boxRef.nativeElement;
      const shortestColumnIndex = columnHeights[0] <= columnHeights[1] ? 0 : 1;
      const xPosition = shortestColumnIndex * columnWidth;
      const yPosition = columnHeights[shortestColumnIndex];

      box.style.position = 'absolute';
      box.style.left = `${xPosition}px`;
      box.style.top = `${yPosition}px`;

      columnHeights[shortestColumnIndex] += box.offsetHeight + gap;
    });

    const maxHeight = Math.max(columnHeights[0], columnHeights[1]);
    container.style.height = `${maxHeight}px`;
  }
}
