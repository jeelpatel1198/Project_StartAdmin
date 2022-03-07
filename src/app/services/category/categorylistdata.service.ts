import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategorylistdataService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8888/phpwebapi/api/Category/";
  

  CategoryList():Observable<any>
  {
    const cat = this.http.get<any>(this.baseUrl);
    return cat;
  }
  AddCategory(postBody:any):Observable<any>
  {
    
    const cat = this.http.post<any>(this.baseUrl,postBody);
    // console.log("cat site: "+this.baseUrl+postBody);
    return cat;
  }
  getCategory(postBody:any):Observable<any>
  { 
    const url = this.baseUrl+"?id="+postBody;
    const cat = this.http.get<any>(url);
    return cat;
  }
  updateCategory(postBody:any):Observable<any>
  {
    const cat = this.http.put<any>(this.baseUrl,postBody);
    return cat;
  }
  


  



  // addCategory(categorymod:any){
  //   const product = this.http.get('http://localhost:8888/phpwebapi/Category/CategoryAdd.php?category='+categorymod.category+'&status='+categorymod.status).subscribe(retval=>{
  //     // console.log(retval);
  //     return retval;

  //   });
    
  // }

  // categoryList(){
  //   const product = this.http.get('http://127.0.0.1/phpwebapi/Category/CategoryList.php').subscribe(retval=>{
  //      console.log(retval);
  //     return retval;

  //   },(err)=>{
  //     console.log(err);
  //     return(err);
  //   });
  // }
}
