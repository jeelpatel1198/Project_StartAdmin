import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorylistdataService } from '../services/category/categorylistdata.service';
import { SubcategorylistdataService } from '../services/subcategory/subcategorylistdata.service';
import { ThirdcategorylistdataService } from '../services/thirdcategory/thirdcategorylistdata.service';

@Component({
  selector: 'app-third-category',
  templateUrl: './third-category.component.html',
  styleUrls: ['./third-category.component.css']
})
export class ThirdCategoryComponent implements OnInit {

  isProducts = false;
  thirdcategory:any=[];
  response:any=[];
  category:any=[];
  subcategory:any=[];
  cat="";
  st="";
  scat="";
  tcat="";
  subcat="";
  hidid="";
  constructor(private thirdcatservice:ThirdcategorylistdataService,private subcatservice:SubcategorylistdataService,private catservice:CategorylistdataService) { }

  ngOnInit(): void {

    this.catservice.CategoryList().subscribe(data=>{
      this.isProducts = true;
      this.category = data.rows;
      
     
      console.log("cat is:"+this.category);
    }, err=>{
      console.log(err);
    });

  

    this.thirdcatservice.ThirdCategoryList().subscribe(data=>{
      this.isProducts=true;
      this.thirdcategory = data.rows;
      // console.log(this.thirdcategory);
      
     },err=>{
       console.log(err);
     })
  }

  btn3UpdateCat(CategoryForm:NgForm)
  {
   const cat = {
      cat:CategoryForm.value.exampleInputCat,
      subcat:CategoryForm.value.exampleInputSubCat,
      thirdcat:CategoryForm.value.exampleInputThirdCat,
      st:CategoryForm.value.exampleInputStatus,
      tcid:CategoryForm.value.hidid
    };
    // console.log("cat is: "+cat.tcid);
    this.thirdcatservice.updateCategory(cat).subscribe(data=>{
      this.response = data;
      
      // console.log("response is: "+this.response);
    }
    ,err=>{
        console.log(err);
    });
    

  }

  // subCategoryChange(catid:any){
  // //  console.log(catid);
  // const id = catid.target.value;
  // console.log(id);
  //   // this.subcatservice.getCategory(id).subscribe(data=>{
  //   //   this.subcategory = data.rows;
  //   //   console.log("res is: "+this.subcategory);
  //   // })
  // }

  subCategoryChange(deviceValue: any) {
     console.log(deviceValue.target.value);
    const cid = deviceValue.target.value;
    this.subcatservice.getSubCategoryData(cid).subscribe(data=>{
      this.subcategory = data.rows;
      console.log("res is: "+this.subcategory);
    })
    
}

  editData(id:any){
    // console.log("id is:"+id);
    this.thirdcatservice.getCategory(id).subscribe(data=>{
      this.response = data.rows;
      // console.log(this.response);
      this.cat=this.response[0].catid;
      
      // this.subCategoryChange(this.cat);
      this.scat=this.response[0].subcatid;
      this.tcat=this.response[0].tcat;
      this.st = this.response[0].st;
      this.hidid = this.response[0].subcatid;
      // console.log(this.scat);
    })
   
  }

}
