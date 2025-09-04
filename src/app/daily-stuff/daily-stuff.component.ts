import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-daily-stuff',
  templateUrl: './daily-stuff.component.html',
  styles: [],
  standalone: true,
})
export class DailyStuffComponent {
  public menuItems = [
    'Dashboard',
    'Analytics',
    'Reports',
    'Users',
    'Settings',
    'Profile',
    'Messages',
    'Calendar',
    'Tasks',
    'Projects',
    'Files',
    'Integrations',
    'Help',
    'Support',
    'Logout',
    'Dashboard',
    'Analytics',
    'Reports',
    'Users',
    'Settings',
    'Profile',
    'Messages',
    'Calendar',
    'Tasks',
    'Projects',
    'Files',
    'Integrations',
    'Help',
    'Support',
    'Logout',
    'Dashboard',
    'Analytics',
    'Reports',
    'Users',
    'Settings',
    'Profile',
    'Messages',
    'Calendar',
    'Tasks',
    'Projects',
    'Files',
    'Integrations',
    'Help',
    'Support',
    'Logout',
    'Dashboard',
    'Analytics',
    'Reports',
    'Users',
    'Settings',
    'Profile',
    'Messages',
    'Calendar',
    'Tasks',
    'Projects',
    'Files',
    'Integrations',
    'Help',
    'Support',
    'Logout',
  ];

  public listItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    'Item 13',
    'Item 14',
    'Item 15',
    'Item 16',
    'Item 17',
    'Item 18',
    'Item 19',
    'Item 20',
    'Item 21',
    'Item 22',
    'Item 23',
    'Item 24',
    'Item 25',
    'Item 26',
    'Item 27',
    'Item 28',
    'Item 29',
    'Item 30',
    'Item 31',
    'Item 32',
    'Item 33',
    'Item 34',
    'Item 35',
    'Item 36',
    'Item 37',
    'Item 38',
    'Item 39',
    'Item 40',
  ];
  // View refs
  @ViewChild('scrollHost', { static: true })
  scrollHost!: ElementRef<HTMLElement>;
  @ViewChild('sidebarScroller', { static: true })
  sidebarScroller!: ElementRef<HTMLElement>;
  @ViewChild('contentScroller', { static: true })
  contentScroller!: ElementRef<HTMLElement>;

  // Layout signals
  headerOffset = signal(128); // px
  private viewportHeight = signal(
    typeof window !== 'undefined' ? window.innerHeight : 0
  );
  availableHeight = computed(() =>
    Math.max(0, this.viewportHeight() - this.headerOffset())
  );

  // Scroll sizing
  virtualScrollHeight = signal(0);

  // Internal state
  private maxSidebar = 0;
  private maxContent = 0;
  private lastPagePos = 0;
  private rafId: number | null = null;

  ngAfterViewInit(): void {
    // Defer initial measure/sync to next frame to avoid NG0100
    this.scheduleMeasureAndSync();

    // Optionally, measure again after assets settle
    setTimeout(() => this.scheduleMeasureAndSync());
  }

  @HostListener('window:resize')
  onResize() {
    this.viewportHeight.set(window.innerHeight);
    this.scheduleMeasureAndSync();
  }

  onHostScroll() {
    const pagePos = this.clamp(this.hostY, 0, this.virtualScrollHeight());
    const delta = pagePos - this.lastPagePos;
    if (!delta) return;

    this.scrollPanesBy(delta);
    this.lastPagePos = pagePos;
  }

  // -------- Helpers --------
  private get hostEl() {
    return this.scrollHost.nativeElement;
  }
  private get sideEl() {
    return this.sidebarScroller.nativeElement;
  }
  private get mainEl() {
    return this.contentScroller.nativeElement;
  }
  private get hostY() {
    return this.hostEl.scrollTop || 0;
  }

  private scheduleMeasureAndSync() {
    if (this.rafId != null) cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this.syncAll();
    });
  }

  private syncAll() {
    this.recomputeBounds();

    const pagePos = this.clamp(this.hostY, 0, this.virtualScrollHeight());
    if (pagePos !== this.hostY) {
      this.hostEl.scrollTop = pagePos;
    }

    this.setPanes(pagePos);
    this.lastPagePos = pagePos;
  }

  private scrollPanesBy(delta: number) {
    this.sideEl.scrollTop = this.clamp(
      this.sideEl.scrollTop + delta,
      0,
      this.maxSidebar
    );
    this.mainEl.scrollTop = this.clamp(
      this.mainEl.scrollTop + delta,
      0,
      this.maxContent
    );
  }

  private setPanes(pagePos: number) {
    this.sideEl.scrollTop = this.clamp(pagePos, 0, this.maxSidebar);
    this.mainEl.scrollTop = this.clamp(pagePos, 0, this.maxContent);
  }

  private recomputeBounds() {
    this.maxSidebar = Math.max(
      0,
      this.sideEl.scrollHeight - this.sideEl.clientHeight
    );
    this.maxContent = Math.max(
      0,
      this.mainEl.scrollHeight - this.mainEl.clientHeight
    );
    this.virtualScrollHeight.set(Math.max(this.maxSidebar, this.maxContent));
  }

  private clamp(v: number, min: number, max: number) {
    return Math.max(min, Math.min(max, v));
  }
}
