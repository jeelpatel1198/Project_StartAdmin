import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrandlistdataService } from '../services/brand/brandlistdata.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private brandservice:BrandlistdataService) { }
  isProducts=false;
  brand:any=[];
  response:any=[];
  
  brnd="";
  st="";
  hidid="";

  ngOnInit(): void {
    this.brandservice.BrandList().subscribe(data=>{
      this.isProducts = true;
      this.brand = data.rows;
      
     
       console.log(this.brand);
    }, err=>{
      console.log(err);
    });
  }

  btn3UpdateBrand(CategoryForm:NgForm)
  {
    const brnd = {
      brand:CategoryForm.value.exampleInputBrand,
      st:CategoryForm.value.exampleInputStatus,
      id:CategoryForm.value.hidid
    };
    console.log(brnd.brand);
    this.brandservice.updateBrand(brnd).subscribe(data=>{
      this.response = data;
      
      console.log("response is: "+this.response);
    }
    ,err=>{
        console.log(err);
    });
    

  }

  editData(id:any){
    this.brandservice.getBrand(id).subscribe(data=>{
      this.response = data.rows;
      this.brnd=this.response[0].brnd;
      this.st = this.response[0].st;
      this.hidid = this.response[0].id;
      console.log(this.brnd+this.st);
    })
   
  }

}
