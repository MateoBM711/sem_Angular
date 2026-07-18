import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item-list/Item';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger {
  constructor() { }
  
  @Input()
  cantidad!: number;
  @Input()
  max!: number;
  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  restar() {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  sumar() {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.maxReached.emit("Se alcanzo el maximo de stock disponible");
    }
  }
}

