import { Component } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { error } from 'console';
import { Cart } from '../Cart';
import { Customer } from '../Customer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  router: any;
  constructor(private httpService:HttpserviceService
    // 
    ){}
  posts: any;

  cart1:Cart[] = new Array();
  ngOnInit()
  {
    this.httpService.getProduct().subscribe(
      (response)=>{this.posts=response},
      (error)=>{console.log(error)}
    );
  }
  qty:any;
  total:number=0;

  onAddToCart(id:number, name:string, price:number)
  {
    this.total=0;
    this.cart1.push(new Cart(name,price,id,this.qty,price*this.qty));
    for(let i of this.cart1)
    {
      console.log(this.total);
      this.total += i.total;
    }
  }
  cust = new Customer("Syaloni", 6789054332, this.cart1);
  m:any;

  placeOrder()
  {
    this.httpService.placeOrder(this.cust).subscribe(
      (response:string)=>{this.m=response;
        if(this.m.indexOf('Your order has been placed Successfully!')!=-1)
        this.router.navigate(['/successful'])
      else
        document.write(this.m);
      },
      (error)=>{console.log(error)},
    );
  }
}
