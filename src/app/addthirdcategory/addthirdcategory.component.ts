import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorylistdataService } from '../services/category/categorylistdata.service';
import { SubcategorylistdataService } from '../services/subcategory/subcategorylistdata.service';
import { ThirdcategorylistdataService } from '../services/thirdcategory/thirdcategorylistdata.service';

@Component({
  selector: 'app-addthirdcategory',
  templateUrl: './addthirdcategory.component.html',
  styleUrls: ['./addthirdcategory.component.css']
})
export class AddthirdcategoryComponent implements OnInit {

  isProducts = false;
  category:any=[];
  categorydata:any=[];
  subcatdata:any=[];
  cat="";
  st="";
  scat="";
  subcat="";
  hidid:any=[];

  constructor(private catservice:CategorylistdataService,private thirdcatservice:ThirdcategorylistdataService,private subcatservice:SubcategorylistdataService) { }

  ngOnInit(): void {

    this.catservice.CategoryList().subscribe(data=>{
      this.isProducts = true;
      this.category = data.rows;
      
     
      // console.log(this.category);
    }, err=>{
      console.log(err);
    });
  }

//   subCategoryChange(deviceValue: any) {
//     console.log(deviceValue.target.value);
//    const cid = deviceValue.target.value;
//    this.subcatservice.getSubCategoryData(cid).subscribe(data=>{
//      this.subcategory = data.rows;
//      console.log("res is: "+this.subcategory);
//    })
   
// }
  
  onChangeEvent(deviceValue: any) {
    // console.log(deviceValue.target.value);
    const catid = deviceValue.target.value;
    this.subcatservice.getSubCategoryData(deviceValue.target.value).subscribe(data=>{
      this.subcatdata = data.rows;
      console.log("res is:"+this.subcatdata[0].catid);
      this.cat=this.subcatdata[0].catid;
      // this.subCategoryChange(this.cat);
      this.scat=this.subcatdata[0].scat;
      this.st = this.subcatdata[0].st;

      this.hidid = this.subcatdata.subcatid;
      
      console.log("ksd"+this.hidid);
    })
}

categoryVal="";
subcategory="";
thirdcategory="";
status="";
btn1Click(CategoryForm:NgForm){
  
  var model = {
    categoryVal: CategoryForm.value.exampleInputCat,
    subcategory: CategoryForm.value.exampleInputSubCat,
    thirdcategory: CategoryForm.value.exampleInputThirdCat,
    status: CategoryForm.value.exampleInputStatus
  };
 console.log("cat is :"+model.subcategory);
  this.thirdcatservice.AddThirdCategory(model).subscribe(data=>{
    this.isProducts = true;
    this.category = data.rows;
    console.log("success");
    // console.log(this.category);
  }, err=>{
    console.log(err);
  })
 }

}
