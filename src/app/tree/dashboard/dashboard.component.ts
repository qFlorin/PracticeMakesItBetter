import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HierarchyTreeComponent } from '../hierarchy-tree/hierarchy-tree.component';
import { TreeStore } from '../tree.store';
import { MatSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    MatTabsModule,
    RouterOutlet,
    HierarchyTreeComponent,
    MatSpinner,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [TreeStore],
  animations: [
    trigger('sidebarAnimation', [
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
          display: 'none', // Important to remove from layout
        })
      ),
      transition('visible => hidden', animate('300ms ease-out')),
      transition('hidden => visible', animate('300ms ease-in')),
    ]),
    trigger('contentAnimation', [
      state(
        'sidebarVisible',
        style({
          'margin-left': '25%',
        })
      ),
      state(
        'sidebarHidden',
        style({
          'margin-left': '0',
        })
      ),
      transition('sidebarVisible => sidebarHidden', animate('300ms ease-out')),
      transition('sidebarHidden => sidebarVisible', animate('300ms ease-in')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  readonly treeStore = inject(TreeStore);
  constructor() {}
  isTreeHidden = false;

  toggleTree() {
    this.isTreeHidden = !this.isTreeHidden;
  }

  get sidebarState() {
    return this.isTreeHidden ? 'visible' : 'hidden';
  }
  get contentState() {
    return this.isTreeHidden ? 'sidebarVisible' : 'sidebarHidden';
  }
  ngOnInit() {}

  @ViewChild('container', { static: false }) container!: ElementRef;
  @ViewChild('box1', { static: false }) box1!: ElementRef;
  @ViewChild('box2', { static: false }) box2!: ElementRef;
  @ViewChild('box3', { static: false }) box3!: ElementRef;
  @ViewChild('box4', { static: false }) box4!: ElementRef;
  @ViewChild('box5', { static: false }) box5!: ElementRef;
  boxes!: ElementRef[]; // Array to hold box element references

  ngAfterViewInit() {
    this.boxes = [this.box1, this.box2, this.box3, this.box4, this.box5]; // Populate box array

    if (this.container) {
      this.layoutBoxes();
    }
  }

  layoutBoxes() {
    if (!this.container) return;

    const containerWidth = this.container.nativeElement.offsetWidth;
    const columnWidth = containerWidth / 2; // Two columns
    const gap = 16; // 1rem = 16px (assuming default Tailwind config)
    const columnHeights = [0, 0]; // Heights of the two columns, initialized to 0
    const boxElements = this.boxes.map((boxRef) => boxRef.nativeElement); // Get native elements

    boxElements.forEach((box) => {
      const shortestColumnIndex = columnHeights[0] <= columnHeights[1] ? 0 : 1; // Find shorter column
      const xPosition = shortestColumnIndex * columnWidth; // Column 0 or Column 1 X position
      const yPosition = columnHeights[shortestColumnIndex]; // Top position is current column height

      box.style.left = `${xPosition}px`;
      box.style.top = `${yPosition}px`;

      columnHeights[shortestColumnIndex] += box.offsetHeight + gap; // Update column height
    });

    // Set container height to accommodate all boxes (optional, might be handled by content flow)
    const maxHeight = Math.max(columnHeights[0], columnHeights[1]);
    this.container.nativeElement.style.height = `${maxHeight}px`;
  }
}
