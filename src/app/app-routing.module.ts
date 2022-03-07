import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddsubcategoryComponent } from './addsubcategory/addsubcategory.component';
import { AddthirdcategoryComponent } from './addthirdcategory/addthirdcategory.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryAddChildGuard } from './category-add-child.guard';
import { CategoryAddGuard } from './category-add.guard';

import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ThirdCategoryComponent } from './third-category/third-category.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'category',component:CategoryComponent},
  {
  path:'category',
  canActivate:[CategoryAddGuard],
  children:[{
    path:'',
    component:CategoryComponent
  },
 {
  path:'',
  canActivateChild:[CategoryAddChildGuard],
  children:[
    {path:'add-category',component:AddcategoryComponent}
  ]
 }

]
},
{path:'sub-category',component:SubcategoryComponent},
{
  path:'sub-category',
  canActivate:[CategoryAddGuard],
  children:[{
    path:'',
    component:SubcategoryComponent
  },
 {
  path:'',
  canActivateChild:[CategoryAddChildGuard],
  children:[
    {path:'add-sub-category',component:AddsubcategoryComponent}
  ]
 }

]
},
{path:'third-category',component:ThirdCategoryComponent},
{
  path:'third-category',
  canActivate:[CategoryAddGuard],
  children:[{
    path:'',
    component:ThirdCategoryComponent
  },
 {
  path:'',
  canActivateChild:[CategoryAddChildGuard],
  children:[
    {path:'add-third-category',component:AddthirdcategoryComponent}
  ]
 }

]
},
{path:'brand',component:BrandComponent},
{
  path:'brand',
  canActivate:[CategoryAddGuard],
  children:[{
    path:'',
    component:BrandComponent
  },
 {
  path:'',
  canActivateChild:[CategoryAddChildGuard],
  children:[
    {path:'add-brand',component:AddbrandComponent}
  ]
 }

]
},
{path:'product',component:ProductComponent},
{
  path:'product',
  canActivate:[CategoryAddGuard],
  children:[{
    path:'',
    component:ProductComponent
  },
 {
  path:'',
  canActivateChild:[CategoryAddChildGuard],
  children:[
    {path:'add-product',component:AddproductComponent}
  ]
 }

]
},
{path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
