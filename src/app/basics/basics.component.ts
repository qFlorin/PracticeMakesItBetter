import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
  standalone: true,
})
export class BasicsComponent implements OnInit {
  @Input() count = 0;
  constructor() {}

  ngOnInit() {}

  add() {
    this.count++;
  }
}
