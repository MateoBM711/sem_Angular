import { Injectable } from '@angular/core';
import { Item } from './item-list/Item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ItemCart {
    private _cartList: Item[] = [];
    
    cartList: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
    
    constructor() { }

    addToCart(item: Item) {
        let existingItem: Item | undefined = this._cartList.find((v1) => v1.nombre === item.nombre);
        if (!existingItem) {
            this._cartList.push({...item});
        } else {
            existingItem.cantidad += item.cantidad;
        }
        this.cartList.next(this._cartList);
        console.log('Item agregado al carrito:', item);
    }
}
