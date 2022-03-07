import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThirdcategorylistdataService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8888/phpwebapi/api/ThirdCategory/";
  
  ThirdCategoryList():Observable<any>
  {
    const tcat = this.http.get<any>(this.baseUrl);
    return tcat;
  }
  AddThirdCategory(postBody:any):Observable<any>
  {
    
    const tcat = this.http.post<any>(this.baseUrl,postBody);
    return tcat;
    
  }
  getThirdCategoryData(postBody:any):Observable<any>
  { 
    const url = this.baseUrl+"?subid="+postBody;
    const tcat = this.http.get<any>(url);
    console.log(url);
    return tcat;
  }
 
  getCategory(postBody:any):Observable<any>
  { 
    
    const url = this.baseUrl+"?id="+postBody;
    const tcat = this.http.get<any>(url);
    return tcat;
  }
   updateCategory(postBody:any):Observable<any>
  {
    const scat = this.http.put<any>(this.baseUrl,postBody);
    return scat;
  }
}
