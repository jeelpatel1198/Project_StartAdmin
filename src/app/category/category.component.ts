import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorylistdataService } from '../services/category/categorylistdata.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  isProducts=false;
  category:any=[];
  response:any=[];
  
  cat="";
  st="";
  hidid="";
  constructor(private catservice:CategorylistdataService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    
    this.catservice.CategoryList().subscribe(data=>{
      this.isProducts = true;
      this.category = data.rows;
      
     
       console.log(this.category);
    }, err=>{
      console.log(err);
    });
    // console.log(this.category);
  }
  
  btn3UpdateCat(CategoryForm:NgForm)
  {
    
   

    const cat = {
      cat:CategoryForm.value.exampleInputCat,
      st:CategoryForm.value.exampleInputStatus,
      id:CategoryForm.value.hidid
    };
    console.log(cat.id);
    this.catservice.updateCategory(cat).subscribe(data=>{
      this.response = data;
      
      console.log("response is: "+this.response);
    }
    ,err=>{
        console.log(err);
    });
    

  }

  editData(id:any){
    this.catservice.getCategory(id).subscribe(data=>{
      this.response = data.rows;
      this.cat=this.response[0].cat;
      this.st = this.response[0].st;
      this.hidid = this.response[0].id;
      console.log(this.cat+this.st);
    })
   
  }

}
