import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategorylistdataService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8888/phpwebapi/api/SubCategory/";

  SubCategoryList():Observable<any>
  {
    const scat = this.http.get<any>(this.baseUrl);
    return scat;
  }

  AddSubCategory(postBody:any):Observable<any>
  {
    const scat = this.http.post<any>(this.baseUrl,postBody);
    return scat;
  }
  getCategory(postBody:any):Observable<any>
  { 
    const url = this.baseUrl+"?id="+postBody;
    const scat = this.http.get<any>(url);
    
    return scat;
  }
  getSubCategoryData(postBody:any):Observable<any>
  { 
    const url = this.baseUrl+"?catid="+postBody;
    const scat = this.http.get<any>(url);
    console.log(url);
    return scat;
  }
  updateCategory(postBody:any):Observable<any>
  {
    const scat = this.http.put<any>(this.baseUrl,postBody);
    return scat;
  }
}
