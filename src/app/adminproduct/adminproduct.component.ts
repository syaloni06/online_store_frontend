import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { response } from 'express';
import { error } from 'console';
import { Product } from '../Product';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrl: './adminproduct.component.css'
})
export class AdminproductComponent {
id: any;
  constructor(private httpService: AdminserviceService){}
  posts: any;
  model: any;
  ngOnInit() // called by default as our web page gets loaded
  {
    this.httpService.getProduct().subscribe(
      (response) => {this.posts=response},
      (error) => {console.log(error)}
    );
  }
  post2:any;
  update(id:number, name:string, stk:number, price:number)
  {
    this.model = new Product(id, name, stk, price);
    this.httpService.update(this.model).subscribe(
      (response) => {this.post2=response}
    );
    window.location.reload();
  }

  delete(id:number)
  {
    this.httpService.delete(id).subscribe(
      (response) => {console.log(response)}
    );
    window.location.reload();
  }
}
