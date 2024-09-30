import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
})
export class OrdersComponent implements OnInit {
  private readonly ordersService = inject(OrdersService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  ordersForm: FormGroup = new FormGroup({
    orderType: new FormControl('all'),
  });
  orders = this.ordersService.orders;
  constructor() {}

  ngOnInit() {
    // Set initial query param when the page loads
    const initialOrderType =
      this.activatedRoute.snapshot.queryParamMap.get('orderType') || 'all';
    this.router.navigate([], {
      queryParams: { orderType: initialOrderType },
      queryParamsHandling: 'merge',
    });

    // Update the form value when the query param changes
    this.ordersForm.patchValue(
      { orderType: initialOrderType },
      { emitEvent: false }
    );

    this.ordersForm.get('orderType')?.valueChanges.subscribe((value) => {
      console.log('Value changes', value);
      this.router.navigate([], {
        queryParams: { orderType: value },
        queryParamsHandling: 'merge',
      });
    });

    this.activatedRoute.queryParamMap.subscribe((params) => {
      const orderType = params.get('orderType');
      console.log('Order type', orderType);

      if (orderType === 'confirmed') {
        this.orders = this.ordersService.orders.filter(
          (order) => order.status === 'Confirmed'
        );
      } else if (orderType === 'cancelled') {
        this.orders = this.ordersService.orders.filter(
          (order) => order.status === 'Cancelled'
        );
      } else if (orderType === 'transit') {
        this.orders = this.ordersService.orders.filter(
          (order) => order.status === 'inTransit'
        );
      } else if (orderType === 'pre-order') {
        this.orders = this.ordersService.orders.filter(
          (order) => order.status === 'preOrder'
        );
      } else if (orderType === 'all') {
        this.orders = this.ordersService.orders;
      } else {
        this.orders = this.ordersService.orders;
      }
    });
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

  goToOrderDetails(orderId: string) {
    this.router.navigate(['order-details', orderId], {
      relativeTo: this.activatedRoute,
    });
  }
}
