import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistdataService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8888/phpwebapi/api/Product/";


  AddProduct(postBody:any):Observable<any>
  {
    const pro = this.http.post<any>(this.baseUrl,postBody);
    return pro;
 }
 ProductList():Observable<any>
 {
   const pro = this.http.get<any>(this.baseUrl);
   return pro;
 }
 getProduct(postBody:any):Observable<any>
  { 
    
    const url = this.baseUrl+"?id="+postBody;
    const pro = this.http.get<any>(url);
    return pro;
  }
  updateProduct(postBody:any):Observable<any>
  {
    const pro = this.http.put<any>(this.baseUrl,postBody);
    return pro;
  }
  deleteProduct(postBody:any):Observable<any>
  { 
    console.log(postBody);
    const url = this.baseUrl+"?delete="+postBody;
    const pro = this.http.get<any>(url);
    return pro;
  }
}
