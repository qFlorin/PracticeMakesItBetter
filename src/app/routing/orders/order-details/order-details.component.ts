import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './../orders.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class OrderDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private ordersService = inject(OrdersService);
  selectedOrderId: string | null = null;
  selectedOrder: any;
  constructor() {}

  ngOnInit() {
    this.selectedOrderId = this.activatedRoute.snapshot.paramMap.get('orderId');
    this.selectedOrder = this.ordersService.orders.find(
      (order) => order.orderId === this.selectedOrderId
    );
    console.log(this.selectedOrderId);
  }

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
}
