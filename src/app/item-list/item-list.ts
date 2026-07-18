import { Component, OnInit } from '@angular/core';
import { Item } from './Item';
import { ItemCart } from '../ItemCart';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.html',
  styleUrl: './item-list.scss',
})
export class ItemList implements OnInit {

  items: Item[] = [
  {
    "nombre": "Mouse Logitech G203",
    "tipo": "Mouse",
    "precio": 42999,
    "stock": 15,
    "img": "https://placehold.co/300x300?text=Mouse+Logitech+G203",
    "oferta": true,
    "cantidad": 0
  },
  {
    "nombre": "Teclado Redragon Kumara K552",
    "tipo": "Teclado",
    "precio": 68999,
    "stock": 8,
    "img": "https://placehold.co/300x300?text=Teclado+Redragon+K552",
    "oferta": false,
    "cantidad": 0
  },
  {
    "nombre": "Monitor Samsung 24'' FHD",
    "tipo": "Monitor",
    "precio": 259999,
    "stock": 5,
    "img": "https://placehold.co/300x300?text=Monitor+Samsung+24",
    "oferta": true,
    "cantidad": 0
  },
  {
    "nombre": "SSD Kingston NV2 1TB",
    "tipo": "SSD",
    "precio": 89999,
    "stock": 0,
    "img": "https://placehold.co/300x300?text=SSD+Kingston+1TB",
    "oferta": false,
    "cantidad": 0
  },
  {
    "nombre": "Auriculares HyperX Cloud Stinger",
    "tipo": "Auriculares",
    "precio": 79999,
    "stock": 10,
    "img": "https://placehold.co/300x300?text=HyperX+Cloud+Stinger",
    "oferta": true,
    "cantidad": 0
  },
  {
    "nombre": "Webcam Logitech C920",
    "tipo": "Webcam",
    "precio": 119999,
    "stock": 0,
    "img": "https://placehold.co/300x300?text=Logitech+C920",
    "oferta": false,
    "cantidad": 0
  },
  {
    "nombre": "Notebook Lenovo IdeaPad 3",
    "tipo": "Notebook",
    "precio": 999999,
    "stock": 3,
    "img": "https://placehold.co/300x300?text=Lenovo+IdeaPad+3",
    "oferta": false,
    "cantidad": 0
  },
  {
    "nombre": "Disco Externo WD 2TB",
    "tipo": "Disco Externo",
    "precio": 124999,
    "stock": 7,
    "img": "https://placehold.co/300x300?text=WD+2TB",
    "oferta": true,
    "cantidad": 0
  },
  {
    "nombre": "Mouse Pad XL Redragon",
    "tipo": "Mouse Pad",
    "precio": 18999,
    "stock": 20,
    "img": "https://placehold.co/300x300?text=Mouse+Pad+XL",
    "oferta": false,
    "cantidad": 0
  },
  {
    "nombre": "Memoria RAM Corsair Vengeance 16GB DDR4",
    "tipo": "Memoria RAM",
    "precio": 74999,
    "stock": 0,
    "img": "https://placehold.co/300x300?text=Corsair+16GB+DDR4",
    "oferta": true,
    "cantidad": 0
  }
];


  constructor(private cart: ItemCart) { }

  ngOnInit(): void {
  }

  restar(item: Item) {
    if (item.cantidad > 0) {
      item.cantidad--;
    }
  }

  sumar(item: Item) {
    if (item.cantidad < item.stock) {
      item.cantidad++;
    }
  }
  maxReached(message: string) {
    alert(message);
  }

  addToCart(item: Item): void {
    this.cart.addToCart(item);
    item.stock -= item.cantidad;
    item.cantidad = 0;
  }
}
