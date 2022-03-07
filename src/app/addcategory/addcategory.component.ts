import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorylistdataService } from '../services/category/categorylistdata.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private catservice:CategorylistdataService) { }

  ngOnInit(): void {
  }
  category="";
  status="";
  isProducts=false;
  categorydata="";
  btn1Click(CategoryForm:NgForm){
  
  
    var model = {
      category: CategoryForm.value.exampleInputCat,
      status: CategoryForm.value.exampleInputStatus
    };
    console.log(model);
    this.catservice.AddCategory(model).subscribe(data=>{
      this.isProducts = true;
      this.categorydata = data;
      
      console.log(this.status);
    }, err=>{
      console.log(err);
    })
  }

}
