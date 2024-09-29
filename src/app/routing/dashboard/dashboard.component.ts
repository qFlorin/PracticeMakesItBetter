import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  orders = [
    {
      orderId: '#FWB127364372',
      date: '20.12.2023',
      price: '$4,756',
      status: 'preOrder',
    },
    {
      orderId: '#FWB127364373',
      date: '21.12.2023',
      price: '$3,200',
      status: 'Confirmed',
    },
    {
      orderId: '#FWB127364374',
      date: '22.12.2023',
      price: '$2,150',
      status: 'Cancelled',
    },
    {
      orderId: '#FWB127364375',
      date: '23.12.2023',
      price: '$5,000',
      status: 'Confirmed',
    },
    {
      orderId: '#FWB127364376',
      date: '24.12.2023',
      price: '$1,750',
      status: 'preOrder',
    },
    {
      orderId: '#FWB127364377',
      date: '25.12.2023',
      price: '$4,000',
      status: 'Cancelled',
    },
    {
      orderId: '#FWB127364378',
      date: '26.12.2023',
      price: '$3,500',
      status: 'Confirmed',
    },
    {
      orderId: '#FWB127364379',
      date: '27.12.2023',
      price: '$2,800',
      status: 'preOrder',
    },
    {
      orderId: '#FWB127364380',
      date: '28.12.2023',
      price: '$6,000',
      status: 'Confirmed',
    },
    {
      orderId: '#FWB127364381',
      date: '29.12.2023',
      price: '$7,250',
      status: 'Cancelled',
    },
    {
      orderId: '#FWB127364382',
      date: '30.12.2023',
      price: '$8,000',
      status: 'inTransit',
    },
  ];
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
