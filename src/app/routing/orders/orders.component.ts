import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class OrdersComponent implements OnInit {
  private readonly ordersService = inject(OrdersService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {}

  orders = this.ordersService.orders;
  setClassForStatus(status: string): string {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-500';
      case 'Cancelled':
        return 'bg-red-500';
      case 'inTransit':
        return 'bg-gray-500';
      case 'preOrder':
        return 'bg-yellow-500';
      default:
        return '';
    }
  }

  goToOrderDetails(orderId: string) {
    this.router.navigate(['order-details', orderId], {
      relativeTo: this.activatedRoute,
    });
  }
}
