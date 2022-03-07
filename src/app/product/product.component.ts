import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrandlistdataService } from '../services/brand/brandlistdata.service';
import { CategorylistdataService } from '../services/category/categorylistdata.service';
import { ProductlistdataService } from '../services/product/productlistdata.service';
import { SubcategorylistdataService } from '../services/subcategory/subcategorylistdata.service';
import { ThirdcategorylistdataService } from '../services/thirdcategory/thirdcategorylistdata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productservicedata:ProductlistdataService,private catservice:CategorylistdataService,private subcatservice:SubcategorylistdataService,private thirdcatservice:ThirdcategorylistdataService,private brandservice:BrandlistdataService) { }
  isProducts = false;
  product:any=[];
  category:any=[];
  subcategory:any=[];
  thirdcategory:any=[];
  response:any=[];
  branddata:any=[];
 
  ngOnInit(): void {
    this.productservicedata.ProductList().subscribe(data=>{
      this.isProducts = true;
      this.product = data.rows;
      
     
      //  console.log(this.product);
    }, err=>{
      console.log(err);
    });

    this.catservice.CategoryList().subscribe(data=>{
      this.isProducts = true;
      this.category = data.rows;
      
     
      // console.log("cat is:"+this.category);
    }, err=>{
      console.log(err);
    });

    this.brandservice.BrandList().subscribe(data=>{
      this.isProducts = true;
      this.branddata = data.rows;
      
     
       console.log(this.branddata);
    }, err=>{
      console.log(err);
    });
  }

  subCategoryChange(deviceValue: any) {
    // console.log(deviceValue.target.value);
   const cid = deviceValue.target.value;
   this.subcatservice.getSubCategoryData(cid).subscribe(data=>{
     this.subcategory = data.rows;
    //  console.log("res is: "+this.subcategory);
   })
   
}
thirdCategoryChange(deviceValue: any) {
  // console.log(deviceValue.target.value);
 const subid = deviceValue.target.value;
 this.thirdcatservice.getThirdCategoryData(subid).subscribe(data=>{
   this.thirdcategory = data.rows;
   console.log("res is: "+this.thirdcategory);
 })
 
}
pdid="";
cat="";
scat="";
thirdcat="";
brand="";
proname="";
proprice="";
procolor="";
proimage="";
prodesc="";
status="";
hidid="";
  btn3UpdateCat(CategoryForm:NgForm){
    const prod = {
      cat:CategoryForm.value.exampleInputCat,
      scat:CategoryForm.value.exampleInputSubCat,
      thirdcat:CategoryForm.value.exampleInputThirdCat,
      brand:CategoryForm.value.exampleInputBrand,
      proname:CategoryForm.value.productName,
      proprice:CategoryForm.value.productPrice,
      procolor:CategoryForm.value.productColor,
      proimage:CategoryForm.value.productImage,
      prodesc:CategoryForm.value.productdescription,
      st:CategoryForm.value.exampleInputStatus,
      pdid:CategoryForm.value.hidid
    };
    // console.log(prod.cat+prod.scat+prod.thirdcat+prod.brand+prod.proname+prod.proprice+prod.procolor+prod.proimage+prod.prodesc+prod.st+prod.pdid);
    this.productservicedata.updateProduct(prod).subscribe(data=>{
      this.response = data;
      
      // console.log("response is: "+this.response);
    }
    ,err=>{
        console.log(err);
    });
  }
  pid="";
  subcat="";
  tcid="";
  brandid="";
  productname="";
  productprice="";
  productcolor="";
  productimage="";
  productdescription="";
  st="";
  editData(id:any){
    console.log(id);
    this.productservicedata.getProduct(id).subscribe(data=>{
      this.response = data.rows;
      console.log(this.response);
      this.pid = this.response[0].pid;
      this.cat=this.response[0].catid;
      
      // this.subCategoryChange(this.cat);
      this.subcat=this.response[0].subcatid;
      this.tcid=this.response[0].tcid;
      this.brandid=this.response[0].brandid;
      this.productname=this.response[0].productname;
      this.productprice=this.response[0].productprice;
      this.productcolor=this.response[0].productcolor;
      this.productimage=this.response[0].productimage;
      this.productdescription=this.response[0].productdescription;
      this.st = this.response[0].st;
      console.log(this.subcat);
      this.hidid = this.response[0].pid;
  })
}
  deleteData(id:any){
      this.productservicedata.deleteProduct(id).subscribe(data=>{
        this.response = data;
        
      })
      this.productservicedata.ProductList().subscribe(data=>{
        this.isProducts = true;
        this.product = data.rows;
        
       
        //  console.log(this.product);
      }, err=>{
        console.log(err);
      });
  }
  
}
