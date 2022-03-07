import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandlistdataService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8888/phpwebapi/api/Brand/";

  AddBrand(postBody:any):Observable<any>
  {
    const brand = this.http.post<any>(this.baseUrl,postBody);
    return brand;
  }

  BrandList():Observable<any>
  {
    const brand = this.http.get<any>(this.baseUrl);
    return brand;
  }

  getBrand(postBody:any):Observable<any>
  { 
    const url = this.baseUrl+"?id="+postBody;
    const brand = this.http.get<any>(url);
    return brand;
  }
  updateBrand(postBody:any):Observable<any>
  {
    const brand = this.http.put<any>(this.baseUrl,postBody);
    return brand;
  }
}
