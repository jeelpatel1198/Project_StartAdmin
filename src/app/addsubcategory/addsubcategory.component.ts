import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorylistdataService } from '../services/category/categorylistdata.service';
import { SubcategorylistdataService } from '../services/subcategory/subcategorylistdata.service';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {

  constructor(private subcatservice:SubcategorylistdataService,private catservice:CategorylistdataService) { 
    this.catservice.CategoryList().subscribe(data=>{
      this.isProducts = true;
      this.category = data.rows;
      
     
      console.log(this.category);
    }, err=>{
      console.log(err);
    });
  }
  isProducts=false;
  category:any=[];
  categorys="";
  subcategory="";
  status="";

  ngOnInit(): void {
   

  }

  btn1Click(CategoryForm:NgForm){
    var modal = {
      categorys:CategoryForm.value.exampleInputCategory,
      subcategory:CategoryForm.value.exampleInputSubcategory,
      status:CategoryForm.value.exampleInputStatus
    }

    this.subcatservice.AddSubCategory(modal).subscribe(data=>{
      this.isProducts=true;
      this.categorys=data;
      console.log(this.categorys);
    },err=>{
      console.log(err);
    })
    
  }

}
