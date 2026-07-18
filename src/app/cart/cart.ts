import { Component } from '@angular/core';
import { ItemCart } from '../ItemCart';
import { Item } from '../item-list/Item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartList$: Observable<Item[]>;

  constructor(private cart: ItemCart) {
    this.cartList$ = this.cart.cartList.asObservable();
  }
}