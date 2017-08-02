import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Component, NgModule } from '@angular/core';

@NgModule({
  imports: [],
  exports: [ProductDetailComponent, ProductEditComponent, ProductListComponent],
  declarations: [ProductDetailComponent, ProductEditComponent, ProductListComponent],
})
export class ProductModule { }