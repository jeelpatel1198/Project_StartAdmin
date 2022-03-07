import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ThirdCategoryComponent } from './third-category/third-category.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import { AddsubcategoryComponent } from './addsubcategory/addsubcategory.component';
import { AddthirdcategoryComponent } from './addthirdcategory/addthirdcategory.component';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DashboardComponent,
    AddcategoryComponent,
    SubcategoryComponent,
    ThirdCategoryComponent,
    BrandComponent,
    ProductComponent,
    AddsubcategoryComponent,
    AddthirdcategoryComponent,
    AddbrandComponent,
    AddproductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
