import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrandlistdataService } from '../services/brand/brandlistdata.service';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {

  constructor(private brandservice:BrandlistdataService) { }

  ngOnInit(): void {
  }

  brand="";
  status="";
  isProducts=false;
  branddata="";
  btn1Click(CategoryForm:NgForm){
  
  
    var model = {
      brand: CategoryForm.value.exampleInputBrand,
      status: CategoryForm.value.exampleInputStatus
    };
    console.log(model);
    this.brandservice.AddBrand(model).subscribe(data=>{
      this.isProducts = true;
      this.branddata = data;
      
      console.log(this.brand);
    }, err=>{
      console.log(err);
    })
  }

}
