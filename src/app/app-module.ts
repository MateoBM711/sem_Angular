import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ItemList } from './item-list/item-list';

import { FormsModule } from '@angular/forms';
import { TeclanAbout } from './teclan-about/teclan-about';
import { TeclanCatalog } from './teclan-catalog/teclan-catalog';
import { Cart } from './cart/cart';
import { InputInteger } from './input-integer/input-integer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [App, ItemList, TeclanAbout, TeclanCatalog, Cart, InputInteger],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
