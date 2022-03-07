import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorylistdataService } from '../services/category/categorylistdata.service';
import { SubcategorylistdataService } from '../services/subcategory/subcategorylistdata.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  isProducts=false;
  subcategory:any=[];
  response:any=[];
  category:any=[];
  cat="";
  st="";
  scat="";
  subcat="";
  hidid="";
  constructor(private subcatservice:SubcategorylistdataService,private catservice:CategorylistdataService) { }

  ngOnInit(): void {

    this.catservice.CategoryList().subscribe(data=>{
      this.isProducts = true;
      this.category = data.rows;
      
     
      console.log(this.category);
    }, err=>{
      console.log(err);
    });

   this.subcatservice.SubCategoryList().subscribe(data=>{
    this.isProducts=true;
    this.subcategory = data.rows;
    console.log(this.subcategory);
    console.log("jsdgj");
   },err=>{
     console.log(err);
   })
  }

  btn3UpdateCat(CategoryForm:NgForm)
  {
   const cat = {
      cat:CategoryForm.value.exampleInputCat,
      subcat:CategoryForm.value.exampleInputSubCat,
      st:CategoryForm.value.exampleInputStatus,
      subcatid:CategoryForm.value.hidid
      
    };
    // console.log("hid id: "+cat.subcatid);
    this.subcatservice.updateCategory(cat).subscribe(data=>{
      this.response = data;
      
      // console.log("response is: "+this.response);
    }
    ,err=>{
        console.log(err);
    });
    

  }

  editData(id:any){
    console.log(id);
    this.subcatservice.getCategory(id).subscribe(data=>{
      this.response = data.rows;
      // console.log(this.response);
      this.cat=this.response[0].catid;
      this.scat=this.response[0].scat;
      this.st = this.response[0].st;
      this.hidid = this.response[0].subcatid;
      // console.log(this.cat+this.st);
    })
   
  }


}
