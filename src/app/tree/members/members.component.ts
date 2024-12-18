import { Component, inject, OnInit, effect } from '@angular/core';

import { TreeStore } from '../tree.store';
import { TreeService } from '../tree.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  imports: [AsyncPipe, JsonPipe],
})
export class MembersComponent implements OnInit {
  treeStore = inject(TreeStore);
  treeService = inject(TreeService);
  members = this.getMembers();
  constructor() {
    effect(() => {
      this.members = this.getMembers();
    });
  }

  ngOnInit() {}

  getMembers(): Observable<any> {
    const userId = this.treeStore.nodeSelected()?.id;
    if (userId !== undefined) {
      return this.treeService.getUsers$(userId);
    }
    return of([]);
  }
}
