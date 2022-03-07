import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrandlistdataService } from '../services/brand/brandlistdata.service';
import { CategorylistdataService } from '../services/category/categorylistdata.service';
import { ProductlistdataService } from '../services/product/productlistdata.service';
import { SubcategorylistdataService } from '../services/subcategory/subcategorylistdata.service';
import { ThirdcategorylistdataService } from '../services/thirdcategory/thirdcategorylistdata.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private catservice:CategorylistdataService,private subcatservice:SubcategorylistdataService,private thirdcatservice:ThirdcategorylistdataService,private brandservice:BrandlistdataService,private productservice:ProductlistdataService) { }
  isProducts = false;
  product:any=[];
  category:any=[];
  brand:any=[];
  subcatdata:any=[];
  thirdcatdata:any=[];

  ngOnInit(): void {
    this.catservice.CategoryList().subscribe(data=>{
      this.isProducts = true;
      this.category = data.rows;
      
     
      // console.log(this.category);
    }, err=>{
      console.log(err);
    });

    this.brandservice.BrandList().subscribe(data=>{
      this.isProducts = true;
      this.brand = data.rows;
      
     
      
    }, err=>{
      console.log(err);
    });


  }

  onChangeEvent(deviceValue: any) {
    // console.log("event is:"+deviceValue.target.value);
    const catid = deviceValue.target.value;
    this.subcatservice.getSubCategoryData(deviceValue.target.value).subscribe(data=>{
      this.subcatdata = data.rows;
      // console.log("res is:"+this.subcatdata[0].catid);
      // this.cat=this.subcatdata[0].catid;
      // // this.subCategoryChange(this.cat);
      // this.scat=this.subcatdata[0].scat;
      // this.st = this.subcatdata[0].st;

      // this.hidid = this.subcatdata.subcatid;
      
     
    })
}
onChangeSubCategoryEvent(deviceValue: any){

  this.thirdcatservice.getThirdCategoryData(deviceValue.target.value).subscribe(data=>{
    this.thirdcatdata = data.rows;
    console.log("data is:"+this.thirdcatdata[0]);

  })
 }

categoryVal="";
subcategory="";
thirdcategory="";
brandName="";
productName="";
productPrice="";
productColor="";
productImage="";
productDesc="";
status="";

btn1Click(CategoryForm:NgForm){
  
  var model = {
    categoryVal: CategoryForm.value.exampleInputCat,
    subcategory: CategoryForm.value.exampleInputSubCat,
    thirdcategory: CategoryForm.value.exampleInputThirdCat,
    brandName: CategoryForm.value.exampleInputBrand,
    productName: CategoryForm.value.exampleInputProductName,
    productPrice: CategoryForm.value.exampleInputProductPrice,
    productColor: CategoryForm.value.exampleInputProductColor,
    productImage: CategoryForm.value.exampleInputProductImage,
    productDesc: CategoryForm.value.exampleInputProductDesc,
    status: CategoryForm.value.exampleInputStatus
  };
 console.log("cat is :"+model.status);
  this.productservice.AddProduct(model).subscribe(data=>{
    this.isProducts = true;
    this.product = data.rows;
    // console.log("success");
    console.log(this.product);
  }, err=>{
    console.log(err);
  })
 }

}


