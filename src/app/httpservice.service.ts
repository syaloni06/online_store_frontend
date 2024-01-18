import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
  getProduct()
  {
    const url = "http://localhost:8080/api/product/show";
    return this.http.get(url);
  }

  placeOrder(cust:Customer)
  {
    const url="http://localhost:8080/api/product/orderproduct"
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
    return this.http.post(url,cust,{headers,'responseType': 'text'});
  }
}
